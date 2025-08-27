
"use client";

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import type { VideoData } from '@/lib/video-data';

interface MoodBoardRow {
  items: VideoData[];
}

interface MoodBoardProps {
  rows: MoodBoardRow[];
  onVideoSelect: (video: VideoData) => void;
}

const VideoItem = memo(function VideoItem({ item, onVideoSelect }: { item: VideoData; onVideoSelect: (video: VideoData) => void; }) {
  return (
    <div className='flex-1 relative'>
      <motion.div layoutId={`card-${item.id}`} className="h-full">
        <Card
          className="overflow-hidden rounded-none border-0 h-full cursor-pointer group"
          onClick={() => onVideoSelect(item)}
        >
          <CardContent className="p-0 relative h-full aspect-video">
            <iframe
              src={`https://player.vimeo.com/video/${item.videoId}?background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0`}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              className="w-full h-full absolute top-0 left-0 object-cover pointer-events-none"
              title={item.title}
            ></iframe>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
            <div
              className="absolute inset-0 z-10"
              onClick={() => onVideoSelect(item)}
              aria-label={`Open video ${item.title}`}
            />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/60 to-transparent w-full pointer-events-none">
              <motion.h3
                layoutId={`title-${item.id}`}
                className="text-white text-sm font-semibold"
              >
                {item.title}
              </motion.h3>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
});

export const MoodBoard = memo(function MoodBoard({ rows, onVideoSelect }: MoodBoardProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col md:flex-row">
            {row.items.map((item) => (
              <VideoItem key={item.id} item={item} onVideoSelect={onVideoSelect} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
});
