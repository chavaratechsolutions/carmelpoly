import React from 'react';
import GeneralEngineeringPage from '../../../pages/Department/GeneralEngineeringPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "General Engineering | Carmel Polytechnic College",
  description: "Explore the General Engineering section at Carmel Polytechnic College. Foundational subjects common to all engineering branches are covered here.",
  keywords: [
    "General Engineering Carmel",
    "Engineering Basics Kerala",
    "Carmel Polytechnic College",
    "Common Engineering Subjects",
    "First Year Engineering",
  ],
  metadataBase: new URL("https://www.carmelpoly.in"),
  alternates: {
    canonical: "/departments/general-engineering",
  },
  openGraph: {
    title: "General Engineering | Carmel Polytechnic College",
    description: "Explore the General Engineering section at Carmel Polytechnic College. Foundational subjects common to all engineering branches are covered here.",
    url: "https://www.carmelpoly.in/departments/general-engineering",
    siteName: "Carmel Polytechnic College",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "General Engineering | Carmel Polytechnic College",
    description: "Explore the General Engineering section at Carmel Polytechnic College.",
    site: "@carmelpoly",
    creator: "@carmelpoly",
  },
};

export default function Page() {
  return <GeneralEngineeringPage />;
}
