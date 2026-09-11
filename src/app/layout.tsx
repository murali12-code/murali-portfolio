import React from "react";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar";
import MouseMoveEffect from "@/components/mouse-move-effect";
import JumpToTop from "@/components/jump-to-top";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll";
import { Toaster } from "@/components/ui/sonner";
import FramerLazyMotion from "@/components/framer-lazy-motion";

const inter = Inter({ subsets: ["latin"] });
// const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Murali Krishna | Video Editor & Motion Designer",
    template: "%s | Murali Krishna",
  },
  description:
    "Portfolio of Murali Krishna, a video editor and motion designer creating engaging videos, motion graphics, visual stories, and digital content.",
  keywords: [
    "Murali Krishna",
    "Video Editor",
    "Motion Designer",
    "Video Editing",
    "Motion Graphics",
    "After Effects",
    "Premiere Pro",
    "DaVinci Resolve",
    "Visual Storytelling",
    "Andhra Pradesh",
    "India",
  ],
  authors: [{ name: "Murali Krishna" }],
  creator: "Murali Krishna",
  publisher: "Murali Krishna",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Murali Krishna — Video Editor & Motion Designer",
    description:
      "Video editing, motion design, and visual storytelling.",
    siteName: "Murali Krishna Portfolio",
    images: [
      {
        url: "/demo.png",
        width: 1200,
        height: 630,
        alt: "Murali Krishna - Video Editor & Motion Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Murali Krishna — Video Editor & Motion Designer",
    description:
      "Video editing, motion design, and visual storytelling.",
    images: ["/demo.png"],
  },
  category: "Video Editing & Motion Design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#020817" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Murali Krishna",
              jobTitle: "Video Editor & Motion Designer",
              knowsAbout: [
                "Video Editing",
                "Motion Graphics",
                "DaVinci Resolve",
                "Adobe Premiere Pro",
                "Adobe After Effects",
                "Adobe Photoshop",
                "Adobe Illustrator",
                "CapCut",
                "Color Grading",
                "Visual Storytelling",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen text-white`}
        style={{
          background: "#020817",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="grid-background-large min-h-screen">
          <SmoothScroll>
            <FramerLazyMotion>
              <MouseMoveEffect />
              <Navbar />
              <main className="">{children}</main>
              <Footer />
              <JumpToTop />
              <Toaster position="top-center" />
            </FramerLazyMotion>
          </SmoothScroll>
        </div>
      </body>
    </html>
  );
}
