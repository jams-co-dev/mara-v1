"use client";

import { useState } from 'react';
import Image from 'next/image';
import { PlayCircle } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface MoodBoardItem {
  id: string;
  videoId: string;
  thumbnail: string;
  hint: string;
  title: string;
  widthClass?: string;
}

interface MoodBoardRow {
  items: MoodBoardItem[];
}

interface MoodBoardProps {
  rows: MoodBoardRow[];
}

export function MoodBoard({ rows }: MoodBoardProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <>
      <div className="w-full">
        <div className="flex flex-col gap-0">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-col md:flex-row gap-0">
              {row.items.map((item) => (
                <div key={item.id} className={cn('flex-1', item.widthClass)}>
                  <Card
                    className="overflow-hidden cursor-pointer group rounded-none border-0 h-full"
                    onClick={() => setSelectedVideo(item.videoId)}
                    onKeyDown={(e) => e.key === 'Enter' && setSelectedVideo(item.videoId)}
                    tabIndex={0}
                    aria-label={`Play video: ${item.hint}`}
                  >
                    <CardContent className="p-0 relative h-full">
                       <Image
                        src={item.thumbnail}
                        alt={item.hint}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover aspect-video transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={item.hint}
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <PlayCircle className="w-16 h-16 text-white/80" />
                      </div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <h3 className="text-white text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1">
                          {item.title}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedVideo} onOpenChange={(isOpen) => !isOpen && setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl w-full p-0 border-0 bg-transparent">
          <div className="aspect-video">
            {selectedVideo && (
              <iframe
                width="100%"
                height="100%"
                src={`https://player.vimeo.com/video/${selectedVideo}?autoplay=1`}
                title="Vimeo video player"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
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
