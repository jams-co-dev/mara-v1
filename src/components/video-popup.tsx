
"use client";

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { VideoData } from '@/lib/video-data';

interface VideoPopupProps {
    selectedVideo: VideoData | null;
    onClose: () => void;
}

export function VideoPopup({ selectedVideo, onClose }: VideoPopupProps) {
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
