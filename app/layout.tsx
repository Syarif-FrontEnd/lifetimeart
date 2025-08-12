import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
// import Nav from "@/components/Navbar/Nav";

const font = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LifeTime Art",
  description: "LifeTime Art - Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
