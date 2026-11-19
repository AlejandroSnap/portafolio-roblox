import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import { SITE_BASE_PATH, SITE_NAME, SITE_ORIGIN } from "@/lib/constants";

const description =
  "Roblox games, custom gameplay systems, and intuitive interfaces by AlejandroSnap. Explore my work and let’s build your next experience.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: `${SITE_NAME} — Roblox Game Developer`,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  openGraph: {
    title: `${SITE_NAME} — Roblox Game Developer`,
    description,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${SITE_BASE_PATH}/img/work/step-risk-rng.webp`,
        alt: "Step Risk RNG, a Roblox game by AlejandroSnap",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Roblox Game Developer`,
    description,
    images: [`${SITE_BASE_PATH}/img/work/step-risk-rng.webp`],
  },
  icons: {
    icon: [
      { url: `${SITE_BASE_PATH}/favicon.ico`, sizes: "any" },
      { url: `${SITE_BASE_PATH}/icon.svg`, type: "image/svg+xml" },
    ],
    apple: { url: `${SITE_BASE_PATH}/icon-192.png`, sizes: "192x192" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
