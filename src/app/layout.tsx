import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import { geistMono, geistSans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="px-6 py-10 space-y-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
