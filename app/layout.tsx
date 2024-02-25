import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar/Navbar";

//? if use react hooks, needs to add 'use client'

export const metadata: Metadata = {
  title: { default: "Home | Space Tourism", template: "%s | Space Tourism" },
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
