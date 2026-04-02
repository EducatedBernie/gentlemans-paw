import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Gentleman\u2019s Paw | Private Member\u2019s Club",
  description:
    "Premium structured pack dog walking in Santa Clara County. Experience the ultimate in canine social education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&family=Manrope:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F9F6F0] font-body text-[#333333]">{children}</body>
    </html>
  );
}
