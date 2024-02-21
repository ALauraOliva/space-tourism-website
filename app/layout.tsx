import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar";

//? if use react hooks, nees to add 'use client'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "Website for space tourism",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
