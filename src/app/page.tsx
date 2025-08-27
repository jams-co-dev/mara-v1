
import { MoodBoard } from '@/components/mood-board';
import { PageWrapper } from '@/components/page-wrapper';

const moodBoardRows = [
  {
    items: [
      { id: '1', title: 'REEL GENERAL', videoId: '816718555' },
      { id: '3', title: 'TRANSVISIBILITY', videoId: '947152373' },
      { id: '4', title: 'POLET BAILEYS', videoId: '947159183' },
    ]
  },
  {
    items: [
      { id: '2', title: 'ESTO ES KOAJ', videoId: '947163605' },
      { id: '5', title: 'WOM NAVIDAD', videoId: '947154619' },
    ]
  },
  {
    items: [
      { id: '6', title: 'WOM 4 MILLONES', videoId: '947134517' },
    ]
  },
  {
    items: [
      { id: '7', title: 'CORONA EXTRA LIME', videoId: '835939795' },
      { id: '8', title: 'WOM ANTIMANIFIESTO', videoId: '799986844' },
      { id: '9', title: 'KFC / ICON', videoId: '586553312' },
    ]
  },
  {
    items: [
      { id: '10', title: 'JOHNNIE WALKER / KEEP WALKING', videoId: '651763917' },
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
