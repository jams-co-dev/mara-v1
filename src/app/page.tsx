
import { MoodBoard } from '@/components/mood-board';
import { PageWrapper } from '@/components/page-wrapper';

const moodBoardRows = [
  {
    items: [
      { id: '1', title: 'REEL GENERAL', videoId: '816718555' },
      { id: '3', title: 'TRANSVISIBILITY', videoId: '947152373' },
    ]
  },
  {
    items: [
      { id: '2', title: 'ESTO ES KOAJ', videoId: '947163605' },
    ]
  }
];


export default function Home() {
  return (
    <PageWrapper>
      <MoodBoard rows={moodBoardRows} />
    </PageWrapper>
  );
}
