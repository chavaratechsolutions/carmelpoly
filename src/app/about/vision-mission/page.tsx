import React from 'react';
import MissionVisionPage from '../../../pages/About/MissionVisionPage';
import type { Metadata } from 'next';

// SEO Metadata for Vision & Mission Page
export const metadata: Metadata = {
  title: 'Vision & Mission | Carmel Polytechnic College',
  description:
    'Discover the vision and mission of Carmel Polytechnic College, rooted in excellence, discipline, and service. Guided by CMI values, we strive to empower future generations through quality technical education.',
  keywords: [
    'Vision of Carmel Polytechnic',
    'Mission Carmel Polytechnic College',
    'CMI Education Values',
    'Carmel College Goals',
    'Carmel Polytechnic Kerala',
    'Polytechnic Education Mission',
    'Best Polytechnic Kerala',
  ],
  metadataBase: new URL('https://www.carmelpoly.in'),
  alternates: {
    canonical: '/about/vision-mission',
  },
  openGraph: {
    title: 'Vision & Mission | Carmel Polytechnic College',
    description:
      'Our mission and vision reflect our commitment to technical excellence, ethical leadership, and societal growth in Kerala and beyond.',
    url: 'https://www.carmelpoly.in/about/vision-mission',
    siteName: 'Carmel Polytechnic College',
    images: [
      {
        url: 'https://www.carmelpoly.in/images/vision-mission-og.jpg', // ✅ Replace with actual image
        width: 1200,
        height: 630,
        alt: 'Carmel Polytechnic Vision and Mission',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vision & Mission | Carmel Polytechnic College',
    description:
      'Explore the values that drive our institution’s commitment to technical excellence and holistic development.',
    images: ['https://www.carmelpoly.in/images/vision-mission-twitter.jpg'], // ✅ Replace with actual image
    site: '@carmelpoly',
    creator: '@carmelpoly',
  },
};

export default function Page() {
  return <MissionVisionPage />;
}
