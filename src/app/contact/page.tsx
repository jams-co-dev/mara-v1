
import type { Metadata } from 'next';
import ContactClientPage from './contact-client-page';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Mara Post. Have a project in mind? We would love to hear from you. Find our contact details and location.',
  openGraph: {
    title: 'Contact Us | Mara Post',
    description: 'Get in touch with the Mara Post team.',
  },
};

export default function ContactPage() {
  return <ContactClientPage />;
}
