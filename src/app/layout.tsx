// src/app/layout.tsx
import "./globals.css";
import { Metadata } from "next";
import { Orbitron, Megrim } from "next/font/google";
import { ReactNode } from "react";
import { BodyWrapper } from "@/components/BodyWrapper";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "700"],
});

const megrim = Megrim({
  subsets: ["latin"],
  variable: "--font-megrim",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Artang",
  description: "Soluções inteligentes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt" className={`${orbitron.variable} ${megrim.variable}`}>
      <BodyWrapper>{children}</BodyWrapper>
    </html>
  );
}
