import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khi Nào Đi Đẹp? – Lịch du lịch 63 tỉnh thành Việt Nam",
  description: "Tra cứu thời điểm du lịch lý tưởng cho 63 tỉnh thành Việt Nam – thời tiết, lễ hội, mùa mưa bão theo từng tháng.",
  keywords: "du lịch việt nam, thời tiết, lịch du lịch, khi nào đi đẹp, mùa du lịch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
