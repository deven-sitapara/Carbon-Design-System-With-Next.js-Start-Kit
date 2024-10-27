import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "./globals.css";
import "../globals.scss";
import { AuthThemeProvider } from "@/components/AuthThemeSelector/AuthThemeContext";
import DashboardHeader from "@/components/DashboardHeader/DashboardHeader";
import { ThemeDropdown } from "@/components/ThemeSelector/ThemeDropdown";

// import { ThemeProvider } from "./providers.jsx";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

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
          </AuthThemeProvider>
        </body>
      </html>
    </>
  );
}
