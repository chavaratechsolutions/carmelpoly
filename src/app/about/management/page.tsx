import React from "react";
import ManagementPage from "../../../pages/About/ManagementPage";
import type { Metadata } from "next";

// SEO Metadata for Management Page
export const metadata: Metadata = {
  title: "Management | Carmel Polytechnic College",
  description:
    "Meet the visionary leadership and dedicated management team of Carmel Polytechnic College, guided by CMI Fathers to deliver quality technical education in Kerala.",
  keywords: [
    "Carmel Polytechnic College Management",
    "CMI Fathers",
    "College leadership Kerala",
    "Educational management team",
    "Carmel Polytechnic administrators",
    "Principal Carmel Polytechnic",
    "Technical education Kerala",
  ],
  metadataBase: new URL("https://www.carmelpoly.in"),
  alternates: {
    canonical: "/about/management",
  },
  openGraph: {
    title: "Management | Carmel Polytechnic College",
    description:
      "Learn about the dedicated management and leadership team that ensures the smooth functioning and academic excellence at Carmel Polytechnic College.",
    url: "https://www.carmelpoly.in/about/management",
    siteName: "Carmel Polytechnic College",
    images: [
      {
        url: "https://www.carmelpoly.in/images/management-og.jpg", // ✅ Replace with real OG image
        width: 1200,
        height: 630,
        alt: "Carmel Polytechnic College Management Team",
      },
    ],
    locale: "en_IN",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Management | Carmel Polytechnic College",
    description:
      "Get to know the visionary management team behind Carmel Polytechnic College's continued excellence.",
    images: ["https://www.carmelpoly.in/images/management-twitter.jpg"], // ✅ Replace with actual image
    site: "@carmelpoly",
    creator: "@carmelpoly",
  },
};

export default function Page() {
  return <ManagementPage />;
}
