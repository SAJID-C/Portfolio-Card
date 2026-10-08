import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-card-pfrz.vercel.app"),
  title: "Md Sajid Chowdhury | Software Engineer & Lecturer",
  description:
    "Md Sajid Chowdhury is a Software Engineer and Lecturer focused on software development, backend systems, databases, APIs and AI-assisted engineering.",
  keywords: [
    "Md Sajid Chowdhury",
    "Software Engineer",
    "Lecturer",
    "Backend Developer",
    "C#",
    "Python",
    "FastAPI",
    "ASP.NET Core",
    "PostgreSQL",
    "AI-Assisted Engineering",
    "ICT Bangladesh",
    "Bangladesh",
  ],
  authors: [{ name: "Md Sajid Chowdhury" }],
  creator: "Md Sajid Chowdhury",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-card-pfrz.vercel.app",
    title: "Md Sajid Chowdhury | Software Engineer & Lecturer",
    description:
      "Md Sajid Chowdhury is a Software Engineer and Lecturer focused on software development, backend systems, databases, APIs and AI-assisted engineering.",
    siteName: "Md Sajid Chowdhury Portfolio",
    images: [
      {
        url: "/images/sajid-chowdhury.jpeg",
        width: 1200,
        height: 630,
        alt: "Md Sajid Chowdhury - Software Engineer & Lecturer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Sajid Chowdhury | Software Engineer & Lecturer",
    description:
      "Md Sajid Chowdhury is a Software Engineer and Lecturer focused on software development, backend systems, databases, APIs and AI-assisted engineering.",
    images: ["/images/sajid-chowdhury.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${sansFont.variable} ${monoFont.variable} min-h-screen antialiased bg-white dark:bg-dark-900 text-neutral-900 dark:text-white selection:bg-brand-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
