
'use client';

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PageWrapper } from "@/components/page-wrapper";
import { PlayCircle } from "lucide-react";

const projects = [
  {
    id: "1",
    title: "POLET BAILEYS",
    category: "Video Production",
    thumbnail: "https://placehold.co/800x600.png",
    hint: "promotional video",
    videoId: "947159183"
  },
  {
    id: "2",
    title: "WOM NAVIDAD",
    category: "Commercial",
    thumbnail: "https://placehold.co/800x600.png",
    hint: "christmas ad",
    videoId: "947154619"
  },
  {
    id: "3",
    title: "WOM 4 MILLONES",
    category: "Campaign",
    thumbnail: "https://placehold.co/800x600.png",
    hint: "celebration campaign",
    videoId: "947134517"
  },
  {
    id: "4",
    title: "CORONA EXTRA LIME",
    category: "Beverage Ad",
    thumbnail: "https://placehold.co/800x600.png",
    hint: "beer commercial",
    videoId: "835939795"
  },
  {
    id: "5",
    title: "WOM ANTIMANIFIESTO",
    category: "Brand Film",
    thumbnail: "https://placehold.co/800x600.png",
    hint: "brand manifesto",
    videoId: "799986844"
  },
  {
    id: "6",
    title: "KFC / ICON",
    category: "Fast Food Ad",
    thumbnail: "https://placehold.co/800x600.png",
    hint: "fast food commercial",
    videoId: "586553312"
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
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
