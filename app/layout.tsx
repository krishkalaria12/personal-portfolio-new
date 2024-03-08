import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils"
import { fontSans } from "@/components/font";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Krish Kalaria | Personal Portfolio',
  description: 'Embarking on a journey to craft digital experiences through creative coding, web development, and innovative solutions. A dedicated individual with a passion for pushing boundaries, exploring new technologies, and fostering meaningful connections in the digital realm.',
}

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
          <Analytics />
            </main>
      </body>
    </html>
  );
}
