import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
export const metadata: Metadata = {
  title: "ДВЕРИ•ВАРИАНТ",
  description: "Двери от надежнах застройщиков по доступным ценам",
  icons: {
    icon: ['/favicon.ico']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="48x48"/>
      </Head>
      <body>{children}</body>
    </html>
  );
}
