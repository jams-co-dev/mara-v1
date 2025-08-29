
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { VideoData } from '@/lib/video-data';
import { cn } from '@/lib/utils';
import { MoodBoardRow } from '@/app/page';

interface MoodBoardProps {
  rows: MoodBoardRow[];
  onVideoSelect: (video: VideoData) => void;
}

function getLayoutClasses(itemCount: number) {
    switch (itemCount) {
        case 1:
            return 'basis-full';
        case 2:
            return 'basis-1/2';
        case 3:
            return 'basis-1/3';
        default:
            return 'basis-full';
    }
}

function BackgroundVideoItem({ item, onVideoSelect, className }: { item: VideoData; onVideoSelect: (video: VideoData) => void; className?: string; }) {
    return (
        <motion.div
            onClick={() => onVideoSelect(item)}
            className={cn("relative h-full group overflow-hidden cursor-pointer", className)}
        >
            <iframe
                src={`https://player.vimeo.com/video/${item.videoId}?background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0`}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                className="absolute top-1/2 left-1/2 w-auto h-auto min-w-[177.77vh] min-h-[100vw] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-in-out group-hover:scale-105"
                title={item.title}
            ></iframe>
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/60 to-transparent w-full pointer-events-none">
                <h3 className="text-white text-sm font-semibold">
                    {item.title}
                </h3>
            </div>
        </motion.div>
    );
}


export function MoodBoard({ rows, onVideoSelect, ...props }: MoodBoardProps) {
  return (
    <div className="w-full relative" {...props}>
      <div className="flex flex-col">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col md:flex-row aspect-video md:h-[50vh] w-full">
            {row.items.map((item) => (
              <BackgroundVideoItem 
                key={item.id} 
                item={item} 
                onVideoSelect={onVideoSelect} 
                className={getLayoutClasses(row.items.length)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
