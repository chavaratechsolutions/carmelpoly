import React from 'react';
import OurInspirationPage from '../../../pages/About/OurInspirationPage';
import type { Metadata } from 'next';

// SEO Metadata for Our Inspiration Page
export const metadata: Metadata = {
  title: 'Our Inspiration | Carmel Polytechnic College',
  description:
    'Very Rev. Fr. Gilbert Palakunnel CMI, the founder of Carmel Polytechnic College, continues to inspire generations through his vision, values, and dedication to education.',
  keywords: [
    'Carmel Polytechnic Founder',
    'Fr. Gilbert Palakunnel',
    'Our Inspiration Carmel College',
    'CMI Fathers Vision',
    'Educational Leadership Kerala',
    'Inspiration Carmel Polytechnic',
  ],
  metadataBase: new URL('https://www.carmelpoly.in'),
  alternates: {
    canonical: '/about/our-inspiration',
  },
  openGraph: {
    title: 'Our Inspiration | Carmel Polytechnic College',
    description:
      'Learn about the legacy and vision of Very Rev. Fr. Gilbert Palakunnel CMI, the inspirational force behind Carmel Polytechnic College.',
    url: 'https://www.carmelpoly.in/about/our-inspiration',
    siteName: 'Carmel Polytechnic College',
    images: [
      {
        url: 'https://www.carmelpoly.in/images/inspiration-og.jpg', // ✅ Replace with actual image URL
        width: 1200,
        height: 630,
        alt: 'Fr. Gilbert Palakunnel CMI',
      },
    ],
    locale: 'en_IN',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Inspiration | Carmel Polytechnic College',
    description:
      'Discover the values and vision of our founder, Fr. Gilbert Palakunnel CMI, who continues to guide Carmel Polytechnic College.',
    images: ['https://www.carmelpoly.in/images/inspiration-twitter.jpg'], // ✅ Replace with actual image
    site: '@carmelpoly',
    creator: '@carmelpoly',
  },
};

export default function Page() {
  return <OurInspirationPage />;
}
