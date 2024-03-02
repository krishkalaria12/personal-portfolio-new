import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-thumb-rounded-* scrollbar-thumb-blue-500 scrollbar-track-black h-32 overflow-y-scroll scrollbar-thin">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
          <main className="bg-[#060606] h-full min-h-screen">
          {children}
            </main>
      </body>
    </html>
  );
}
