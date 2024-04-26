import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "./navigation/nav";
import { BreadcrumbWithCustomSeparator } from "./navigation/breadcrumb";
import { Toaster } from "@/components/ui/toaster";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`flex min-h-screen flex-col w-full ${font.className}`}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Nav />
            <div className="ml-5">
              <BreadcrumbWithCustomSeparator />
            </div>
          </header>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
