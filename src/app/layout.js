import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import 'remixicon/fonts/remixicon.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning >
      <head>
        <script dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem("theme");
                if (theme === "dark") {
                  document.documentElement.classList.add("dark");
                }
              })();
            `,
          }}/>
      </head>
      <body className={` ${inter.variable} ${space.variable}`}>{children}</body>
    </html>
  );
}
