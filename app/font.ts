import { Rubik, Inter } from "next/font/google";

export const rubik = Rubik({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
});
