import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Free Fire - Rewards Redemption Site",
  description: "Redeem your Free Fire reward codes here. Login with your social account to claim exclusive in-game rewards.",
  keywords: ["Free Fire", "Garena", "Rewards", "Redemption", "Battle Royale", "Gaming"],
  authors: [{ name: "Garena International" }],
  icons: {
    icon: "/logo-icon.png",
  },
  openGraph: {
    title: "Free Fire - Rewards Redemption Site",
    description: "Redeem your Free Fire reward codes and claim exclusive rewards",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
