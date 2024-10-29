// import localFont from "next/font/local";
// import "./globals.css";
import "./globals.scss";
import { ThemeProvider } from "@/components/ThemeSelector/ThemeContext";
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
export const metadata = {
    title: "Carbon + Next14",
    description: "IBM Carbon Tutorial with Next.js 14",
};
export default function RootLayout({ children, }) {
    return (<>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>);
}
