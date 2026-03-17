import React from 'react';
import AdministrativeStaffPage from '../../../pages/Department/AdministrativeStaffPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Administrative Staff | Carmel Polytechnic College",
  description: "Meet the dedicated administrative staff of Carmel Polytechnic College. Learn about the team behind the smooth operations of the institution.",
  keywords: [
    "Carmel Polytechnic College staff",
    "Administrative team",
    "College administration Kerala",
    "Carmel Polytechnic Alappuzha",
  ],
  metadataBase: new URL("https://www.carmelpoly.in"),
  alternates: {
    canonical: "/departments/administrative-staff",
  },
  openGraph: {
    title: "Administrative Staff | Carmel Polytechnic College",
    description: "Meet the administrative staff of Carmel Polytechnic College who ensure efficient campus operations.",
    url: "https://www.carmelpoly.in/departments/administrative-staff",
    siteName: "Carmel Polytechnic College",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Administrative Staff | Carmel Polytechnic College",
    description: "Meet the administrative staff of Carmel Polytechnic College who ensure efficient campus operations.",
    site: "@carmelpoly",
    creator: "@carmelpoly",
  },
};

export default function Page() {
  return <AdministrativeStaffPage />;
}
