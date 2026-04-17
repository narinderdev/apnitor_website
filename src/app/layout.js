import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import CursorCircle from "@/components/shared/cursor-circle";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Apnitor Solutions",
  description: "Software Company",
  icons: {
    icon: "/webicon-v2.png",
    shortcut: "/webicon-v2.png",
    apple: "/webicon-v2.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <CursorCircle />
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}