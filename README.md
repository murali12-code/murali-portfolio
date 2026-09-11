# Murali Krishna Portfolio

<div align="center">

![Project Banner](./public/demo.png)

### Midnight Liquid Glass Portfolio
*A premium, responsive video editing and motion graphics portfolio built with modern web technologies.*

[![Next.js](https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

</div>

## ✨ Design Philosophy: Midnight Liquid Glass

This project implements a unique **"Midnight Liquid Glass"** aesthetic, focusing on deep blacks, neon accents, and organic fluidity.

-   **Frosted Glass 2.0**: Premium `backdrop-blur-3xl` with milky-white tint for distinct separation.
-   **Unified Liquid Navigation**: A shapeshifting navbar that fluidly expands to contain mobile menus.
-   **Dynamic Interactions**: Mouse-following gradients and spotlight effects.

## 🚀 Getting Started

### Prerequisites

- Node.js 22+
- npm / pnpm package manager

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/murali12-code/murali-portfolio.git
    cd murali-portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Set up environment variables**
    ```env
    RESEND_API_KEY=your_resend_api_key_here
    TO_EMAIL=krishnacanedit@gmail.com
    FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```

5.  **Open your browser**
    Navigate to [http://localhost:3000](http://localhost:3000)

## 📂 Project Structure

```plaintext
📦murali-portfolio
 ┣ 📂public
 ┃ ┣ 📂companies
 ┃ ┣ 📂project-images
 ┃ ┣ 📂tools
 ┃ ┣ 📜demo.png
 ┃ ┗ 📜not-found.jpg
 ┣ 📂src
 ┃ ┣ 📂app
 ┃ ┃ ┣ 📂_services
 ┃ ┃ ┣ 📂about
 ┃ ┃ ┣ 📂api
 ┃ ┃ ┃ ┗ 📂send-email
 ┃ ┃ ┣ 📂contact
 ┃ ┃ ┣ 📂project
 ┃ ┃ ┣ 📂skills
 ┃ ┃ ┣ 📜favicon.ico
 ┃ ┃ ┣ 📜globals.css
 ┃ ┃ ┣ 📜layout.tsx
 ┃ ┃ ┣ 📜loading.tsx
 ┃ ┃ ┣ 📜not-found.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂animate-ui
 ┃ ┃ ┣ 📂ui
 ┃ ┃ ┣ 📜CTASection.tsx
 ┃ ┃ ┣ 📜email-template.tsx
 ┃ ┃ ┣ 📜footer.tsx
 ┃ ┃ ┣ 📜glassmorphism-card.tsx
 ┃ ┃ ┣ 📜intro-animation.tsx
 ┃ ┃ ┣ 📜jump-to-top.tsx
 ┃ ┃ ┣ 📜mouse-move-effect.tsx
 ┃ ┃ ┣ 📜navbar.tsx
 ┃ ┃ ┗ 📜theme-provider.tsx
 ┃ ┣ 📂db
 ┃ ┃ ┣ 📜categories.ts
 ┃ ┃ ┣ 📜clients.ts
 ┃ ┃ ┣ 📜data.ts
 ┃ ┃ ┗ 📜skills.ts
 ┃ ┣ 📂hooks
 ┃ ┃ ┗ 📜use-mobile.tsx
 ┃ ┣ 📂lib
 ┃ ┃ ┣ 📜helper.ts
 ┃ ┃ ┣ 📜helper.test.ts
 ┃ ┃ ┗ 📜utils.ts
 ┃ ┣ 📂styles
 ┃ ┗ 📂types
 ┃ ┃ ┣ 📜cta.ts
 ┃ ┃ ┗ 📜videos.ts
 ┣ 📜.dockerignore
 ┣ 📜.env
 ┣ 📜.gitignore
 ┣ 📜Dockerfile
 ┣ 📜LICENSE
 ┣ 📜README.md
 ┣ 📜components.json
 ┣ 📜eslint.config.mjs
 ┣ 📜next-env.d.ts
 ┣ 📜next.config.ts
 ┣ 📜package.json
 ┣ 📜pnpm-lock.yaml
 ┣ 📜postcss.config.mjs
 ┣ 📜tsconfig.json
 ┗ 📜vitest.config.ts
```

### 📝 Adding New Video Projects

To add a new project, simply edit `src/lib/data.ts`. No new code required!

```typescript
export const videoProjectsData = {
  "Talking Head": [
    {
      id: "unique-video-id",
      video_title: "Your Video Title",
      video_description: "Detailed description...",
      tags: ["Tag1", "Tag2"],
      cover_image: "youtube-video-id",
      publish_date: "2024-01-01",
      client_name: "Client Name",
      client_image: "/companies/client-logo.png",
      client_feedback: "Client testimonial...",
      video_link: "https://youtu.be/video-id",
      project_images: ["/path/to/image1.jpg"],
      category: "Talking Head",
      duration: "5:30",
      software_used: ["DaVinci Resolve", "After Effects"],
    },
  ],
};
```

## 🛠️ Tech Stack

-   **Core**: Next.js 15, TypeScript
-   **Styling**: Tailwind CSS, Shadcn/ui
-   **Animation**: Framer Motion
-   **Backend**: Resend (Email), Server Actions
-   **Testing**: Vitest (Unit testing)


