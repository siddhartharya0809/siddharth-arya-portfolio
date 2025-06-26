import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Johnson - Full Stack Developer",
  description:
    "Passionate full-stack developer creating digital experiences with modern web technologies.",
  keywords:
    "full stack developer, web developer, react, next.js, typescript, portfolio",
  authors: [{ name: "Alex Johnson" }],
  openGraph: {
    title: "Alex Johnson - Full Stack Developer",
    description:
      "Passionate full-stack developer creating digital experiences with modern web technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Johnson - Full Stack Developer",
    description:
      "Passionate full-stack developer creating digital experiences with modern web technologies.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
