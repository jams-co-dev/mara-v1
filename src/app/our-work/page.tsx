
import { MoodBoard } from '@/components/mood-board';
import { PageWrapper } from "@/components/page-wrapper";

const projects = [
  {
    id: "1",
    title: "Project Alpha",
    category: "Corporate Branding",
    description: "A complete rebranding for a major tech firm, focusing on a modern and clean aesthetic.",
    thumbnail: "https://placehold.co/1600x900.png",
    hint: "office teamwork",
    videoId: "824804225"
  },
  {
    id: "2",
    title: "Project Beta",
    category: "Product Launch",
    description: "Dynamic video commercial for a new consumer gadget, highlighting its innovative features.",
    thumbnail: "https://placehold.co/800x600.png",
    hint: "modern smartphone",
    videoId: "824804225"
  },
  {
    id: "3",
    title: "Project Gamma",
    category: "Social Media Campaign",
    description: "Viral marketing campaign across multiple platforms for a lifestyle brand.",
    thumbnail: "https://placehold.co/800x600.png",
    hint: "fashion model",
    videoId: "824804225"
  },
  {
    id: "4",
    title: "Project Delta",
    category: "E-commerce Photography",
    description: "High-quality product shots for an online fashion retailer's new collection.",
    thumbnail: "https://placehold.co/1600x900.png",
    hint: "clothing rack",
    videoId: "824804225"
  },
  {
    id: "5",
    title: "Project Epsilon",
    category: "Food & Beverage Ad",
    description: "A mouth-watering video ad for a new line of gourmet snacks.",
    thumbnail: "https://placehold.co/800x600.png",
    hint: "gourmet food",
    videoId: "824804225"
  },
  {
    id: "6",
    title: "Project Zeta",
    category: "Automotive Commercial",
    description: "A high-octane commercial showcasing the speed and luxury of a new sports car.",
    thumbnail: "https://placehold.co/800x600.png",
    hint: "sports car",
    videoId: "824804225"
  }
];

const workRows = [];
for (let i = 0; i < projects.length; i) {
  // Add a row with one item
  if (projects[i]) {
    workRows.push({ items: [projects[i]] });
    i++;
  }
  // Add a row with two items
  if (projects[i] && projects[i+1]) {
    workRows.push({ items: [projects[i], projects[i+1]] });
    i += 2;
  } else if (projects[i]) { // if there's an odd one left
    workRows.push({ items: [projects[i]] });
    i++;
  }
}


export default function OurWorkPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-primary">
            Our Work
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We take pride in our creations. Explore a selection of our recent projects.
          </p>
        </section>
        
        <MoodBoard rows={workRows} />
      </div>
    </PageWrapper>
  );
}
