import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";

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
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/webicon.png" type="image/png" />
      </head>
      <body className="min-h-full flex flex-col font-body">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}