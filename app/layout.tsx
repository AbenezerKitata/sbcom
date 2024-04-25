import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "./navigation/nav";
import { BreadcrumbWithCustomSeparator } from "./navigation/breadcrumb";

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
      <body className={font.className}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header>
            <Nav />
            <div className="ml-1 lg:ml-14">
              <BreadcrumbWithCustomSeparator />
            </div>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
