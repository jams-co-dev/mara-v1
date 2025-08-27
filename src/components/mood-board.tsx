
"use client";

import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { VideoData } from '@/lib/video-data';
import { cn } from '@/lib/utils';

interface MoodBoardRow {
  items: VideoData[];
}

interface MoodBoardProps {
  rows: MoodBoardRow[];
}

const BackgroundVideoItem = memo(function BackgroundVideoItem({ item, onVideoSelect }: { item: VideoData; onVideoSelect: (video: VideoData) => void; }) {
  return (
    <div className='flex-1 relative h-full group'>
        <iframe
          src={`https://player.vimeo.com/video/${item.videoId}?background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          className="w-full h-full absolute top-0 left-0 object-cover pointer-events-none"
          title={item.title}
        ></iframe>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
        <div
          className="absolute inset-0 z-10 cursor-pointer"
          onClick={() => onVideoSelect(item)}
          aria-label={`Open video ${item.title}`}
        />
        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/60 to-transparent w-full pointer-events-none">
          <h3 className="text-white text-sm font-semibold">
            {item.title}
          </h3>
        </div>
    </div>
  );
});


export function MoodBoard({ rows }: MoodBoardProps) {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);

  return (
    <div className="w-full relative">
      <div className="flex flex-col">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col md:flex-row aspect-video md:aspect-auto md:h-[50vh]">
            {row.items.map((item) => (
              <BackgroundVideoItem key={item.id} item={item} onVideoSelect={setSelectedVideo} />
            ))}
          </div>
        ))}
      </div>

      
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 right-0 z-20 p-4 bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
                 <h3 className="text-white font-bold text-lg">
                   {selectedVideo.title}
                 </h3>
              </div>
              <iframe
                  src={`https://player.vimeo.com/video/${selectedVideo.videoId}?autoplay=1&muted=0&title=0&byline=0&portrait=0`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  className="w-full h-full"
                  title={selectedVideo.title}
              ></iframe>
             <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-20 text-white/70 hover:text-white transition-colors"
                aria-label="Close video"
              >
                <X className="w-6 h-6" />
             </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
