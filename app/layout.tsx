import type { Metadata } from "next";
import { Public_Sans, Syne } from "next/font/google";
import "./globals.css";
import { MobileStickyCall } from "@/components/mobile-sticky-call";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { EMERGENCY_PHONE_DISPLAY, SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";

const publicSans = Public_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${SITE_NAME} | Poly B Replacement and PEX Repipe Services`,
    template: "%s",
  },
  description:
    "Pex Pipe Pros publishes national and local Poly B replacement pages, pricing guides, and licensed Poly B to PEX repiping service paths.",
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: `${SITE_NAME} | Poly B Replacement and PEX Repipe Services`,
    description: "Poly B to PEX conversion guidance with local service pages, cost pages, and immediate phone intake.",
    url: absoluteUrl("/"),
    siteName: SITE_NAME,
    images: [absoluteUrl("/pexpipepros-logo.webp")],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable} ${syne.variable} antialiased`}>
        <SiteNavbar />
        {children}
        <SiteFooter />
        <MobileStickyCall />
        <a className="sr-only" href="tel:18887022090">
          Call Pex Pipe Pros at {EMERGENCY_PHONE_DISPLAY}
        </a>
      </body>
    </html>
  );
}
