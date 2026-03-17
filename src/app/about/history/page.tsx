import React from 'react';
import HistoryPage from '../../../pages/About/HistoryPage';
import type { Metadata } from 'next';

// SEO Metadata for History Page
export const metadata: Metadata = {
  title: 'Our History | Carmel Polytechnic College',
  description:
    'Explore the rich legacy of Carmel Polytechnic College, established in 1958 by Very Rev. Fr. Gilbert Palakunnel CMI. Learn how the institution became a cornerstone of technical education in Kerala.',
  keywords: [
    'Carmel Polytechnic History',
    'Carmel Polytechnic College',
    'Fr. Gilbert Palakunnel',
    'CMI Education Kerala',
    'Polytechnic legacy Kerala',
    'Technical education history',
    '1958 Carmel College',
  ],
  metadataBase: new URL('https://www.carmelpoly.in'),
  alternates: {
    canonical: '/about/history',
  },
  openGraph: {
    title: 'Our History | Carmel Polytechnic College',
    description:
      'Discover the journey of Carmel Polytechnic College from its foundation in 1958 to becoming a leading institution in technical education.',
    url: 'https://www.carmelpoly.in/about/history',
    siteName: 'Carmel Polytechnic College',
    images: [
      {
        url: 'https://www.carmelpoly.in/images/history-og.jpg', // ✅ Replace with actual OG image if available
        width: 1200,
        height: 630,
        alt: 'Carmel Polytechnic College Old Campus',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our History | Carmel Polytechnic College',
    description:
      'Learn about the history and founding legacy of Carmel Polytechnic College, Kerala.',
    images: ['https://www.carmelpoly.in/images/history-twitter.jpg'], // ✅ Replace with actual image
    site: '@carmelpoly',
    creator: '@carmelpoly',
  },
};

export default function Page() {
  return <HistoryPage />;
}
