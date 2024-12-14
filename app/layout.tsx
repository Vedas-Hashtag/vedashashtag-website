import type { Metadata } from "next";
import { Geist, Geist_Mono, Tiny5 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

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
  title: "Home | Vedas Hashtag ",
  description:
    "This is the home page of Vedas Hashtag. A community of students from Vedas College. Join Us today to be part of the organizing committee in every event that takes place in Vedas College.",
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
