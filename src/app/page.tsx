
import { MoodBoard } from '@/components/mood-board';
import { PageWrapper } from '@/components/page-wrapper';

const moodBoardRows = [
  {
    items: [
      { id: '1', title: 'REEL GENERAL', videoId: '816718555', thumbnail: 'https://i.vimeocdn.com/video/2023275820-b9723c673b56887fac2001089223a9f13282e0428a1703797642fa5f706811f1-d_1920x1080.jpg', hint: 'general reel' },
    ]
  },
  {
    items: [
      { id: '2', title: 'ESTO ES KOAJ', videoId: '947163605', thumbnail: 'https://i.vimeocdn.com/video/1853607914-81871a9938508a7ce256e96b9f1e5d87a9bed724022a00c5841eb4124f24e552-d_1280x720.jpg', hint: 'fashion promo' },
      { id: '3', title: 'TRANSVISIBILITY', videoId: '947152373', thumbnail: 'https://i.vimeocdn.com/video/1853596476-ad38aabe0ee7da7d7ff299aa08d9e2396e1a24dd5d1edb7e81aaf0fc3e7dd273-d_1280x720.jpg', hint: 'documentary style' },
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
