
'use client';

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PageWrapper } from "@/components/page-wrapper";
import { PlayCircle } from "lucide-react";

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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href="#" className="group block">
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-0 relative">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover aspect-video"
                    data-ai-hint={project.hint}
                  />
                   <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <PlayCircle className="w-16 h-16 text-white/80" />
                    </div>
                </CardContent>
                <CardHeader>
                  <CardTitle as="h3" className="font-headline text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription as="p" className="text-sm">{project.category}</CardDescription>
                  <CardDescription as="p" className="text-sm text-muted-foreground mt-2">{project.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
