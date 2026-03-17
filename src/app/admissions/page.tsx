import React from "react";
import AdmissionsPage from "../../pages/AdmissionsPage";
import type { Metadata } from "next";

// SEO Metadata for Admissions Page
export const metadata: Metadata = {
  title: "Admissions | Carmel Polytechnic College",
  description:
    "Start your journey with Carmel Polytechnic College. Learn about the diploma courses offered, eligibility, application process, important dates, and contact information for admissions.",
  keywords: [
    "Carmel Polytechnic Admissions",
    "Diploma Admission Kerala",
    "Polytechnic Application Form",
    "CMI College Admissions",
    "Engineering Diploma Kerala",
    "Admissions 2025 Carmel College",
  ],
  metadataBase: new URL("https://www.carmelpoly.in"),
  alternates: {
    canonical: "/admissions",
  },
  openGraph: {
    title: "Admissions | Carmel Polytechnic College",
    description:
      "Find all admission details for Carmel Polytechnic College – courses offered, eligibility, application process, and more.",
    url: "https://www.carmelpoly.in/admissions",
    siteName: "Carmel Polytechnic College",
    images: [
      {
        url: "https://www.carmelpoly.in/images/admissions-og.jpg", // ✅ Replace with real image
        width: 1200,
        height: 630,
        alt: "Carmel Polytechnic College Admissions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Admissions | Carmel Polytechnic College",
    description:
      "Explore the admissions process at Carmel Polytechnic College – eligibility, courses, deadlines, and contact info.",
    images: ["https://www.carmelpoly.in/images/admissions-twitter.jpg"], // ✅ Replace with actual image
    site: "@carmelpoly",
    creator: "@carmelpoly",
  },
};

export default function Page() {
  return <AdmissionsPage />;
}
