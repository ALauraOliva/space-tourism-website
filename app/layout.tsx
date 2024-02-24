import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/Navbar";

//? if use react hooks, nees to add 'use client'

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "Website for space tourism",
  keywords: "space, tourism, website, galatic thrills",
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
