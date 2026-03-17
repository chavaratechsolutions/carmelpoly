import React from "react";
import ContactPage from "../../pages/ContactPage";
import type { Metadata } from "next";

// SEO Metadata for Contact Page
export const metadata: Metadata = {
  title: "Contact Us | Carmel Polytechnic College",
  description:
    "Get in touch with Carmel Polytechnic College, Alappuzha. Find our address, contact numbers, email, and directions to reach the campus.",
  keywords: [
    "Carmel Polytechnic Contact",
    "Contact College Alappuzha",
    "Carmel Polytechnic Address",
    "CMI College Kerala",
    "Polytechnic Kerala contact number",
    "Engineering College Punnapra",
  ],
  metadataBase: new URL("https://www.carmelpoly.in"),
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Carmel Polytechnic College",
    description:
      "Reach out to Carmel Polytechnic College for inquiries, admissions, support, or directions to our Alappuzha campus.",
    url: "https://www.carmelpoly.in/contact",
    siteName: "Carmel Polytechnic College",
    images: [
      {
        url: "https://www.carmelpoly.in/images/contact-og.jpg", // ✅ Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Carmel Polytechnic College Campus Location",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Carmel Polytechnic College",
    description:
      "Looking to contact Carmel Polytechnic College? Find phone numbers, email, and location details here.",
    images: ["https://www.carmelpoly.in/images/contact-twitter.jpg"], // ✅ Replace with actual image
    site: "@carmelpoly",
    creator: "@carmelpoly",
  },
};

export default function Page() {
  return <ContactPage />;
}
