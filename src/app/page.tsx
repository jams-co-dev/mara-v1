import { MoodBoard } from '@/components/mood-board';

const moodBoardItems = [
  { id: '1', videoId: 'dQw4w9WgXcQ', thumbnail: 'https://placehold.co/600x400.png', hint: 'corporate video' },
  { id: '2', videoId: '3JZ_D3ELwOQ', thumbnail: 'https://placehold.co/600x400.png', hint: 'product commercial' },
  { id: '3', videoId: 'u31fedHaHTE', thumbnail: 'https://placehold.co/600x400.png', hint: 'fashion film' },
  { id: '4', videoId: 'LXb3EKWsInQ', thumbnail: 'https://placehold.co/600x400.png', hint: 'food advertisement' },
  { id: '5', videoId: '6JnGBs88sL0', thumbnail: 'https://placehold.co/600x400.png', hint: 'travel vlog' },
  { id: '6', videoId: 'hY7m5jjJ9e4', thumbnail: 'https://placehold.co/600x400.png', hint: 'tech review' },
];


export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-16">
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
