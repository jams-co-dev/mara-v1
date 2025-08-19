"use client";

import { useState } from 'react';
import Image from 'next/image';
import { PlayCircle } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';

interface MoodBoardItem {
  id: string;
  videoId: string;
  thumbnail: string;
  hint: string;
}

interface MoodBoardProps {
  items: MoodBoardItem[];
}

export function MoodBoard({ items }: MoodBoardProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Card 
            key={item.id} 
            className="overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-xl hover:scale-105"
            onClick={() => setSelectedVideo(item.videoId)}
            onKeyDown={(e) => e.key === 'Enter' && setSelectedVideo(item.videoId)}
            tabIndex={0}
            aria-label={`Play video: ${item.hint}`}
          >
            <CardContent className="p-0 relative">
              <Image
                src={item.thumbnail}
                alt={item.hint}
                width={600}
                height={400}
                className="w-full h-auto object-cover aspect-video"
                data-ai-hint={item.hint}
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <PlayCircle className="w-16 h-16 text-white/80" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedVideo} onOpenChange={(isOpen) => !isOpen && setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl w-full p-0 border-0 bg-transparent">
          <div className="aspect-video">
            {selectedVideo && (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
