import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ДВЕРИ•ВАРИАНТ",
  description: "Двери от надежнах застройщиков по доступным ценам",
  openGraph: {
    title: "Двери"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
