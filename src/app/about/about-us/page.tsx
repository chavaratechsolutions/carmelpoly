import React from 'react';
import AboutUsPage from '../../../pages/About/AboutUsPage';
import type { Metadata } from 'next';

// SEO Metadata for About Us Page
export const metadata: Metadata = {
  title: 'About Us | Carmel Polytechnic College',
  description:
    'Carmel Polytechnic College, established in 1958 by Very Rev. Fr. Gilbert Palakunnel CMI, has been a beacon of technical education in Kerala. Discover our mission, vision, and legacy.',
  keywords: [
    'About Carmel Polytechnic College',
    'Carmel Polytechnic Alappuzha',
    'CMI Technical Education',
    'Engineering Diploma Kerala',
    'Polytechnic College About Us',
    'Fr. Gilbert Palakunnel CMI',
  ],
  metadataBase: new URL('https://www.carmelpoly.in'),
  alternates: {
    canonical: '/about/about-us',
  },
  openGraph: {
    title: 'About Us | Carmel Polytechnic College',
    description:
      'Learn more about Carmel Polytechnic College, a pioneer in technical education since 1958 in Kerala.',
    url: 'https://www.carmelpoly.in/about/about-us',
    siteName: 'Carmel Polytechnic College',
    images: [
      {
        url: 'https://www.carmelpoly.in/images/og-image.jpg', // Update with actual OG image
        width: 1200,
        height: 630,
        alt: 'Carmel Polytechnic College Campus',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Carmel Polytechnic College',
    description:
      'Explore our rich history, values, and commitment to excellence in technical education.',
    images: ['https://www.carmelpoly.in/images/twitter-image.jpg'], // Update with actual Twitter image
    site: '@carmelpoly', // Optional: add official Twitter handle
    creator: '@carmelpoly',
  },
};

export default function Page() {
  return <AboutUsPage />;
}
