import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prince Kumar - Full Stack & Cloud Developer",
  description: "Detail-oriented Cloud Engineer & Full Stack Developer with 2+ years of experience in cloud infrastructure, DevOps automation, and scalable web applications. Skilled in AWS, Azure, Docker, and CI/CD pipelines.",
  keywords: [
    "Prince Kumar",
    "Full Stack Developer",
    "Cloud Engineer",
    "AWS",
    "Azure",
    "React",
    "Next.js",
    "Docker",
    "DevOps",
    "Django",
    "PostgreSQL",
    "Cloud Infrastructure"
  ],
  authors: [{ name: "Prince Kumar" }],
  creator: "Prince Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kumarprince.vercel.app",
    title: "Prince Kumar - Full Stack & Cloud Developer",
    description: "Professional portfolio showcasing cloud engineering and full-stack development expertise",
    siteName: "Prince Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Kumar - Full Stack & Cloud Developer",
    description: "Professional portfolio showcasing cloud engineering and full-stack development expertise",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
