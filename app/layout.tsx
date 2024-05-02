import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "LinkMyList",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col justify-between",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <footer className="flex justify-center mb-3">
          <div className="text-xs">
            Made with ❤️ by{" "}
            <Link
              className="underline"
              href={"https://mustafaravullu.vercel.app"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Mustafa Ravullu
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
