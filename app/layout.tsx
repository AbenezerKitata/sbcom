import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/mode-toggle";
import NavMenu from "./navigation/page";

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
          <header className="mt-5 flex justify-between">
            <div className="ml-5 lg:ml-10">
              <NavMenu />
            </div>
            <div className="flex justify-end md:mr-10 mr-5">
              <ModeToggle />
            </div>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
