
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

function getLayoutClasses(layout: MoodBoardRow['layout'], index: number) {
    if (layout === '50/50') {
        return 'basis-1/2';
    }
    if (layout === '60/40') {
        return index === 0 ? 'basis-3/5' : 'basis-2/5';
    }
    if (layout === '40/60') {
        return index === 0 ? 'basis-2/5' : 'basis-3/5';
    }
    return '';
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
                className="absolute w-full h-full object-cover"
                title={item.title}
            ></iframe>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/60 to-transparent w-full pointer-events-none">
                <h3 className="text-white text-sm font-semibold">
                    {item.title}
                </h3>
            </div>
        </motion.div>
    );
}


export function MoodBoard({ rows, onVideoSelect, ...props }: MoodBoardProps & { key?: number }) {
  return (
    <div className="w-full relative" {...props}>
      <div className="flex flex-col">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col md:flex-row aspect-video md:h-[50vh] w-full">
            {row.items.map((item, itemIndex) => (
              <BackgroundVideoItem 
                key={item.id} 
                item={item} 
                onVideoSelect={onVideoSelect} 
                className={getLayoutClasses(row.layout, itemIndex)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
