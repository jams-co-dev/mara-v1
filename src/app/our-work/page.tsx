
'use client';

import { useState } from 'react';
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageWrapper } from "@/components/page-wrapper";
import { PlayCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { allVideos } from '@/lib/video-data';

export default function OurWorkPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openVideo = (videoId: string) => setSelectedVideo(videoId);
  const closeVideo = () => setSelectedVideo(null);

  const selectedProject = allVideos.find(p => p.videoId === selectedVideo);

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
          {allVideos.map((project) => (
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
                src={`https://player.vimeo.com/video/${selectedVideo}?autoplay=1&muted=1&title=0&byline=0&portrait=0`}
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
