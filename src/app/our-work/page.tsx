
import type { Metadata } from 'next';
import OurWorkClientPage from './our-work-client-page';

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Explore a selection of recent projects by Mara Post. We take pride in our creations, from commercials to brand films.',
  openGraph: {
    title: 'Our Work | Mara Post',
    description: 'Explore a selection of recent projects by Mara Post.',
  },
};

export default function OurWorkPage() {
  return <OurWorkClientPage />;
}
