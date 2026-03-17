import React from 'react';
import WorkshopPage from '../../../pages/Department/WorkshopPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Workshop | Carmel Polytechnic College",
  description:
    "Explore the Workshop Department at Carmel Polytechnic College. Discover hands-on training, lab facilities, and the practical foundation of engineering.",
  keywords: [
    "Workshop Carmel Polytechnic",
    "Engineering Workshop Kerala",
    "Hands-on Training",
    "Mechanical Workshop",
    "Carmel Polytechnic College",
  ],
  metadataBase: new URL("https://www.carmelpoly.in"),
  alternates: {
    canonical: "/departments/workshop",
  },
  openGraph: {
    title: "Workshop | Carmel Polytechnic College",
    description:
      "Explore the Workshop Department at Carmel Polytechnic College. Discover hands-on training and lab infrastructure supporting engineering education.",
    url: "https://www.carmelpoly.in/departments/workshop",
    siteName: "Carmel Polytechnic College",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workshop | Carmel Polytechnic College",
    description:
      "Explore the Workshop Department at Carmel Polytechnic College. Practical training, tools, and labs for engineering foundation.",
    site: "@carmelpoly",
    creator: "@carmelpoly",
  },
};

export default function Page() {
  return <WorkshopPage />;
}
