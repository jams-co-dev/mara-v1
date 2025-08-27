
"use client";

import React, { memo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import type { VideoData } from '@/lib/video-data';

// Individual video item, memoized to prevent re-renders
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

// The popup component for the selected video
function VideoPopup({ selectedVideo, onClose }: { selectedVideo: VideoData | null; onClose: () => void; }) {
    return (
        <AnimatePresence>
        {selectedVideo && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              onClick={onClose}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
              <motion.div
                layoutId={`card-${selectedVideo.id}`}
                className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the video
              >
                  <div className="absolute top-0 left-0 right-0 z-20 p-4 bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
                     <motion.h3 layoutId={`title-${selectedVideo.id}`} className="text-white font-bold text-lg">
                       {selectedVideo.title}
                     </motion.h3>
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
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 text-white/70 hover:text-white transition-colors"
                    aria-label="Close video"
                  >
                    <X className="w-6 h-6" />
                 </button>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    );
}

interface MoodBoardRow {
  items: VideoData[];
}

interface MoodBoardProps {
  rows: MoodBoardRow[];
  onVideoSelect: (video: VideoData) => void;
  selectedVideo: VideoData | null;
  onClose: () => void;
}

export function MoodBoard({ rows, onVideoSelect, selectedVideo, onClose }: MoodBoardProps) {
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
      <VideoPopup selectedVideo={selectedVideo} onClose={onClose} />
    </div>
  );
}

export { VideoPopup }; // Exporting for potential use in other parts of the app, like our-work page.
