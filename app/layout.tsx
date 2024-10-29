import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gilroy = localFont({
  src: "./fonts/Gilroy.woff2",
  variable: "--font-gilroy",
  weight: "100 400 900",
});

const iconfont = localFont({
  src: "./fonts/iconfont.woff2",
  variable: "--font-iconfont",
  weight: "100 400 900",
});

const opposans = localFont({
  src: "./fonts/OPPOSans.woff2",
  variable: "--font-oppo-sans",
  weight: "100 400 900",
});

export const metadata: Metadata = {
  title: "InspireQuill | 灵思妙笔",
  description: "灵思妙笔，灵感无限。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gilroy.variable} ${iconfont.variable} ${opposans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
