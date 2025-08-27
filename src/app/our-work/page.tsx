
'use client';

import { useState } from 'react';
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PageWrapper } from "@/components/page-wrapper";
import { PlayCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const projects = [
  {
    id: "1",
    title: "POLET BAILEYS",
    category: "Video Production",
    thumbnail: "https://i.vimeocdn.com/video/1853602639-7c9d7dcc9fff57f99a4729de5fc66800613ea863f5768bb6af1bfacb246f0a04-d_640x360",
    hint: "promotional video",
    videoId: "947159183"
  },
  {
    id: "2",
    title: "WOM NAVIDAD",
    category: "Commercial",
    thumbnail: "https://i.vimeocdn.com/video/1853597262-2cd983c710d8fda554a2c544c767695437aaa3659437af1170a3428017aecd72-d_640x360",
    hint: "christmas ad",
    videoId: "947154619"
  },
  {
    id: "3",
    title: "WOM 4 MILLONES",
    category: "Campaign",
    thumbnail: "https://i.vimeocdn.com/video/1853566022-6608dc718a37b9c0e06121590f54d0c4a522d063efbdb85c9426c16e156f3d69-d_640x360",
    hint: "celebration campaign",
    videoId: "947134517"
  },
  {
    id: "4",
    title: "CORONA EXTRA LIME",
    category: "Beverage Ad",
    thumbnail: "https://i.vimeocdn.com/video/1683615591-89dd70261c60c78f0e376eee181abdb4ba0aa2c81b5d5ff8004d5f71046ab6d0-d_640x360",
    hint: "beer commercial",
    videoId: "835939795"
  },
  {
    id: "5",
    title: "WOM ANTIMANIFIESTO",
    category: "Brand Film",
    thumbnail: "https://i.vimeocdn.com/video/1613221300-3f07c8bdec1d8ddfd6ecdaa60169e02721966c643509cf2e730282588ae47371-d_640x360",
    hint: "brand manifesto",
    videoId: "799986844"
  },
  {
    id: "6",
    title: "KFC / ICON",
    category: "Fast Food Ad",
    thumbnail: "https://i.vimeocdn.com/video/1235483575-b36546fb00c5b0bd1cf4817c1c883e24da85c489f71f761026929559021ae58f-d_640x360",
    hint: "fast food commercial",
    videoId: "586553312"
  }
];

export default function OurWorkPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openVideo = (videoId: string) => setSelectedVideo(videoId);
  const closeVideo = () => setSelectedVideo(null);

  const selectedProject = projects.find(p => p.videoId === selectedVideo);

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
            <div key={project.id} className="group block cursor-pointer" onClick={() => openVideo(project.videoId)}>
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-0 relative">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    width={640}
                    height={360}
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
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedVideo} onOpenChange={(isOpen) => !isOpen && closeVideo()}>
        <DialogContent className="p-0 border-0 max-w-4xl bg-transparent">
          <DialogHeader className="sr-only">
             <DialogTitle>{selectedProject?.title}</DialogTitle>
          </DialogHeader>
          <div className="aspect-video relative">
            {selectedVideo && (
              <iframe
                src={`https://player.vimeo.com/video/${selectedVideo}?autoplay=1&title=0&byline=0&portrait=0`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                className="w-full h-full absolute top-0 left-0"
                title={selectedProject?.title}
              ></iframe>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </PageWrapper>
  );
}
