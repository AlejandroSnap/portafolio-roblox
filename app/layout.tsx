import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import { SITE_BASE_PATH, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_NAME} | Portfolio`,
  description: "Personal portfolio of AlejandroSnap, built with Next.js.",
  icons: {
    icon: [
      { url: `${SITE_BASE_PATH}/favicon.ico`, sizes: "any" },
      { url: `${SITE_BASE_PATH}/icon.svg`, type: "image/svg+xml" },
    ],
    apple: { url: `${SITE_BASE_PATH}/icon-192.png`, sizes: "192x192" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={`${SITE_BASE_PATH}/favicon.ico`} sizes="any" />
        <link rel="icon" href={`${SITE_BASE_PATH}/icon.svg`} type="image/svg+xml" />
        <link rel="apple-touch-icon" href={`${SITE_BASE_PATH}/icon-192.png`} />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}