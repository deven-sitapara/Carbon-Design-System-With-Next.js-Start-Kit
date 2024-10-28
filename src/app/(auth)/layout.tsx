import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "./globals.css";
import "../globals.scss";
import { AuthThemeProvider } from "@/components/AuthThemeSelector/AuthThemeContext";

export const metadata: Metadata = {
  title: "Carbon + Next14",
  description: "IBM Carbon Tutorial with Next.js 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <AuthThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <div id="modal-root"></div>
          </AuthThemeProvider>
        </body>
      </html>
    </>
  );
}
