import { MoodBoard } from '@/components/mood-board';

const moodBoardItems = [
  { id: '1', title: 'Corporate Flow', videoId: '824804225', thumbnail: 'https://placehold.co/600x400.png', hint: 'corporate video' },
  { id: '2', title: 'Product Launch', videoId: '824804225', thumbnail: 'https://placehold.co/600x400.png', hint: 'product commercial' },
  { id: '3', title: 'Fashion Film', videoId: '824804225', thumbnail: 'https://placehold.co/600x400.png', hint: 'fashion film' },
  { id: '4', title: 'Gourmet Ads', videoId: '824804225', thumbnail: 'https://placehold.co/600x400.png', hint: 'food advertisement' },
  { id: '5', title: 'Travel Diary', videoId: '824804225', thumbnail: 'https://placehold.co/600x400.png', hint: 'travel vlog' },
  { id: '6', title: 'Tech Showcase', videoId: '824804225', thumbnail: 'https://placehold.co/600x400.png', hint: 'tech review' },
];


export default function Home() {
  return (
    <div>
      <section className="text-center my-12 md:my-16 px-4">
        <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-primary">
          Crafting Digital Experiences
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We are a full-service digital advertising agency specializing in stunning visuals and compelling storytelling.
        </p>
      </section>

      <MoodBoard items={moodBoardItems} />
    </div>
  );
}
