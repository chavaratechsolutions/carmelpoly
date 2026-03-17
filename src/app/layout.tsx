import React from "react";
import type { Metadata } from "next";
import "@styles/scss/main.scss";
import TopBar from "@widgets/TopBar";
import Header from "@widgets/Header";
import Footer from "@widgets/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Carmel Polytechnic College | Premier Technical Education Since 1958",
  description:
    "Established in 1958 by Very Rev. Fr. Gilbert Palakunnel CMI, Carmel Polytechnic College offers quality technical education managed by CMI Fathers in Punnapra, Alappuzha.",
  keywords: [
    "Carmel Polytechnic College",
    "Technical education Kerala",
    "Polytechnic college Alappuzha",
    "CMI managed college",
    "Diploma courses Kerala",
    "Best polytechnic in Kerala",
    "Engineering diploma",
    "Fr. Gilbert Palakunnel",
    "midnitcode innovations",
    "Midnitcode",
  ],
  authors: [{ name: "Carmel Polytechnic College" }],
  creator: "Carmel Polytechnic College",
  publisher: "Carmel Polytechnic College",
  metadataBase: new URL("https://www.carmelpolytechnic.ac.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Carmel Polytechnic College | Premier Technical Education Since 1958",
    description:
      "Established in 1958 by Very Rev. Fr. Gilbert Palakunnel CMI, offering quality technical education in Punnapra, Alappuzha.",
    url: "https://www.carmelpolytechnic.ac.in",
    siteName: "Carmel Polytechnic College",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Carmel Polytechnic College Campus",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Carmel Polytechnic College | Premier Technical Education Since 1958",
    description:
      "Established in 1958 by Very Rev. Fr. Gilbert Palakunnel CMI, offering quality technical education in Punnapra, Alappuzha.",
    images: ["/images/twitter-image.jpg"],
    site: "@carmelpoly",
    creator: "@carmelpoly",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/poly.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/poly.png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Analytics />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/fonts/custom-font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Carmel Polytechnic College",
            url: "https://www.carmelpolytechnic.ac.in",
            logo: "https://www.carmelpolytechnic.ac.in/images/logo.png",
            foundingDate: "1958",
            founder: {
              "@type": "Person",
              name: "Very Rev. Fr. Gilbert Palakunnel CMI",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "Punnapra",
              addressLocality: "Alappuzha",
              addressRegion: "Kerala",
              postalCode: "688004",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Admissions",
              telephone: "+91-XXX-XXXXXXX",
              email: "admissions@carmelpolytechnic.ac.in",
            },
          })}
        </script>
      </head>
      <body className="text-gray-700">
        <TopBar />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
