import type { Metadata } from "next";
import { Geist, Geist_Mono, Tiny5 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const pixel = Tiny5({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home | Vedas Hashtag - Join the Community of Vedas College Students",
  description:
    "Welcome to Vedas Hashtag, the home page for the vibrant community of students from Vedas College. Join us today and be part of the organizing committee for every event at Vedas College.",
  openGraph: {
    title:
      "Home | Vedas Hashtag - Join the Community of Vedas College Students",
    description:
      "Welcome to Vedas Hashtag, the home page for the vibrant community of students from Vedas College. Join us today and be part of the organizing committee for every event at Vedas College.",
    url: "https://www.vedashashtag.com",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vedas Hashtag",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vedashashtag",
    title:
      "Home | Vedas Hashtag - Join the Community of Vedas College Students",
    description:
      "Welcome to Vedas Hashtag, the home page for the vibrant community of students from Vedas College. Join us today and be part of the organizing committee for every event at Vedas College.",
    images: ["/images/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Vedas Hashtag",
    "Vedas College",
    "student community",
    "college events",
    "organizing committee",
    "vedas",
    "hashtag",
    "networking",
    "collaboration",
    "innovation",
    "leadership",
    "teamwork",
  ],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pixel.variable} antialiased`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme={"light"}
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Toaster />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
