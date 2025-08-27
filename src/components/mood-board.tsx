
"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { PlayCircle } from 'lucide-react';

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
    <div className="w-full">
       <Dialog onOpenChange={(isOpen) => !isOpen && setSelectedVideo(null)}>
        <div className="flex flex-col">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-col md:flex-row">
              {row.items.map((item) => (
                 <DialogTrigger key={item.id} asChild>
                    <div 
                      className={cn('flex-1 relative group', item.widthClass)}
                      onClick={() => setSelectedVideo(item.videoId)}
                    >
                      <Card
                        className="overflow-hidden cursor-pointer rounded-none border-0 h-full"
                        tabIndex={0}
                        aria-label={`Play video: ${item.title}`}
                      >
                        <CardContent className="p-0 relative h-full aspect-video">
                          <Image
                            src={item.thumbnail}
                            alt={item.title}
                            fill
                            className="object-cover w-full h-full"
                            data-ai-hint={item.hint}
                          />
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <PlayCircle className="w-16 h-16 text-white/80" />
                          </div>
                          <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/50 to-transparent w-full">
                            <h3 className="text-white text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1">
                              {item.title}
                            </h3>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                 </DialogTrigger>
              ))}
            </div>
          ))}
        </div>
        {selectedVideo && (
            <DialogContent className="max-w-4xl h-auto p-0 border-0 bg-transparent">
                <div className="aspect-video">
                    <iframe
                        src={`https://player.vimeo.com/video/${selectedVideo}?autoplay=1&loop=1&autopause=0&byline=0&title=0&t=0s`}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        className="w-full h-full"
                        title="Vimeo Video Player"
                    ></iframe>
                </div>
            </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
