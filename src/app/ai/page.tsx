
import type { Metadata } from 'next';
import AiClientPage from '@/app/ai/ai-client-page';

export const metadata: Metadata = {
  title: 'AI',
  description: 'Exploring the frontiers of Artificial Intelligence at Mara Post.',
  openGraph: {
    title: 'AI | Mara Post',
    description: 'Exploring the frontiers of Artificial Intelligence at Mara Post.',
  },
};

export default function AiPage() {
  return <AiClientPage />;
}
