import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const font = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App Name (change later)",
  description: "App description (change later)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
