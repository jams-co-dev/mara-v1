
import type { Metadata } from 'next';
import ServicesClientPage from './services-client-page';

export const metadata: Metadata = {
  title: 'Creative Talent',
  description: 'Discover the creative talent at Mara Post. Our team consists of expert editors, colorists, and VFX artists ready to bring your vision to life.',
  openGraph: {
    title: 'Creative Talent | Mara Post',
    description: 'Meet our team of expert editors, colorists, and VFX artists.',
  },
};

export default function ServicesPage() {
  return <ServicesClientPage />;
}
