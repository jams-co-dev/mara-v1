
import { MoodBoard } from '@/components/mood-board';
import { PageWrapper } from '@/components/page-wrapper';

const moodBoardRows = [
  {
    items: [
      { id: '1', title: 'Corporate Flow', videoId: '824804225', thumbnail: 'https://placehold.co/1600x800.png', hint: 'corporate video' },
    ]
  },
  {
    items: [
      { id: '2', title: 'Product Launch', videoId: '824804225', thumbnail: 'https://placehold.co/800x600.png', hint: 'product commercial' },
      { id: '3', title: 'Fashion Film', videoId: '824804225', thumbnail: 'https://placehold.co/800x600.png', hint: 'fashion film' },
    ]
  },
  {
    items: [
      { id: '4', title: 'Gourmet Ads', videoId: '824804225', thumbnail: 'https://placehold.co/600x400.png', hint: 'food advertisement' },
      { id: '5', title: 'Travel Diary', videoId: '824804225', thumbnail: 'https://placehold.co/600x400.png', hint: 'travel vlog' },
      { id: '6', title: 'Tech Showcase', videoId: '824804225', thumbnail: 'https://placehold.co/600x400.png', hint: 'tech review' },
    ]
  },
  {
    items: [
      { id: '7', title: 'Automotive', videoId: '824804225', thumbnail: 'https://placehold.co/1280x720.png', hint: 'car driving', widthClass: 'w-full md:w-8/12' },
      { id: '8', title: 'Behind the Scenes', videoId: '824804225', thumbnail: 'https://placehold.co/720x720.png', hint: 'camera crew', widthClass: 'w-full md:w-4/12' },
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
