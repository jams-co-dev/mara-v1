
"use client";

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import type { VideoData } from '@/lib/video-data';

interface MoodBoardRow {
  items: VideoData[];
}

interface MoodBoardProps {
  rows: MoodBoardRow[];
}

function VideoPopup({ selectedVideo, setSelectedVideo }: { selectedVideo: VideoData | null, setSelectedVideo: (video: VideoData | null) => void }) {
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
              onClick={() => setSelectedVideo(null)}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
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
                    onClick={() => setSelectedVideo(null)} 
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

export function MoodBoard({ rows }: MoodBoardProps) {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);

  return (
    <div className="w-full">
      <div className="flex flex-col">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col md:flex-row">
            {row.items.map((item) => (
              <div key={item.id} className={cn('flex-1 relative')}>
                <motion.div layoutId={`card-${item.id}`} className="h-full">
                  <Card 
                    className="overflow-hidden rounded-none border-0 h-full cursor-pointer group"
                    onClick={() => setSelectedVideo(item)}
                  >
                    <CardContent className="p-0 relative h-full aspect-video">
                       <iframe
                        src={`https://player.vimeo.com/video/${item.videoId}?background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0`}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        className="w-full h-full absolute top-0 left-0 object-cover"
                        title={item.title}
                      ></iframe>
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
                      <div 
                        className="absolute inset-0 z-10"
                        onClick={() => setSelectedVideo(item)}
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
            ))}
          </div>
        ))}
      </div>

      <VideoPopup selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} />
    </div>
  );
}

