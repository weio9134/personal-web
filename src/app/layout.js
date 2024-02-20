import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title> Wei's Website </title>
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
