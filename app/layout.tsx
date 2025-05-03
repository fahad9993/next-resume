import type { Metadata } from "next";
import Toaster from "@/component/Toaster";

import { inter, rubik } from "@/app/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resume-Md. Fahad Rahman",
  description: "Professional Resume built with Next.js + Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${inter.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
