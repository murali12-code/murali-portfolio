import { EmailTemplate } from "@/components/email-template";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  let body;
  try {
    body = await req.json();
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid JSON request body" },
      { status: 400 }
    );
  }

  const { name, email, message, projectType, timeline, honeypot } = body || {};

  // Honeypot check (bots will fill this hidden field)
  if (honeypot) {
    return NextResponse.json(
      { error: "Spam detected" },
      { status: 400 }
    );
  }

  // Validate required fields
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // Validate input lengths to prevent resource exhaustion/DoS attacks
  if (
    name.length > 100 ||
    email.length > 250 ||
    message.length > 5000 ||
    (projectType && projectType.length > 100) ||
    (timeline && timeline.length > 100)
  ) {
    return NextResponse.json(
      { error: "Input text exceeds maximum allowed limit" },
      { status: 400 }
    );
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Invalid email format" },
      { status: 400 }
    );
  }

  // Validate message length
  if (message.trim().length < 30) {
    return NextResponse.json(
      { error: "Message should be at least 30 characters long" },
      { status: 400 }
    );
  }

  // Block disposable email providers
  const blockList = ["tempmail", "mailinator", "10minutemail", "guerrillamail"];
  const domain = email.split("@")[1];
  if (domain && blockList.some((blocked) => domain.includes(blocked))) {
    return NextResponse.json(
      { error: "Temporary email addresses are not allowed" },
      { status: 403 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.TO_EMAIL || "krishnacanedit@gmail.com";
  const fromEmail = process.env.FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

  if (!apiKey || apiKey === "your_resend_api_key_here") {
    return NextResponse.json(
      { error: "Contact form email API key is not configured in .env yet." },
      { status: 400 }
    );
  }

  try {
    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New Message from ${name} - ${projectType || "General Inquiry"}`,
      react: EmailTemplate({ name, email, message, projectType, timeline }),
    });

    if (error) {
      const errorMessage = typeof error === "object" && error !== null && "message" in error
        ? String((error as { message: string }).message)
        : "Failed to send email";
      return NextResponse.json({ error: errorMessage }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Failed to send email";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
