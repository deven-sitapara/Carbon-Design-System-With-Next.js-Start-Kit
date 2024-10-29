// import localFont from "next/font/local";
// import "./globals.css";
import "../globals.scss";
import { AuthThemeProvider } from "@/components/AuthThemeSelector/AuthThemeContext";
export const metadata = {
    title: "Carbon + Next14",
    description: "IBM Carbon Tutorial with Next.js 14",
};
export default function RootLayout({ children, }) {
    return (<>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <AuthThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
            <div id="modal-root"></div>
          </AuthThemeProvider>
        </body>
      </html>
    </>);
}
