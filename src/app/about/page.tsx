
import type { Metadata } from 'next';
import AboutClientPage from './about-client-page';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Meet the creative force behind Mara Post. We are alchemists of atmospheres, transforming imagination into reality.',
  openGraph: {
    title: 'About Us | Mara Post',
    description: 'Meet the creative force behind Mara Post.',
    images: [{
      url: 'https://picsum.photos/seed/about/1200/630',
      width: 1200,
      height: 630,
      alt: 'The Mara Post Team',
    }],
  },
};

export default function AboutPage() {
  return <AboutClientPage />;
}
