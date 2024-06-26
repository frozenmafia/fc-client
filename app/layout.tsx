import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Love Coding? Master Web Dev with Forge Code: Python, Next.js, FastAPI, Deployment & More!", // New engaging title
    template: "%s | Forge Code"
  },
  description: "**Learn to code like a pro!** Master Python, Next.js, FastAPI, deployment strategies, **SOLID principles**, and **system design**. Build real-world web applications and **unleash your coding potential** with Forge Code. We'll guide you every step of the way!", // Enhanced description with additional topics
  keywords: [
    "web development",
    "coding",
    "software development",
    "beginner coding",
    "Python",
    "Next.js",
    "FastAPI",
    "React",
    "deployment",
    "SOLID principles",
    "system design",
    "web development basics",
    "HTML",
    "CSS",
    "JavaScript",
    "full-stack development",
    "backend development",
    "frontend development",
    "API development",
    "coding tutorials",
    "web development courses",
    "beginner web development",
    "learn to code for free",
  ]
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
      <div>
        Hello 
      </div>
        {children}</body>
    </html>
  );
}
