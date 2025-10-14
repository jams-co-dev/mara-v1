
"use client";

import React from 'react';
import { X } from 'lucide-react';
import { VideoData } from '@/lib/video-data';
import { AnimatePresence, motion } from 'framer-motion';

interface VideoPopupProps {
    video: VideoData | null;
    onClose: () => void;
}

export function VideoPopup({ video, onClose }: VideoPopupProps) {
  return (
      <AnimatePresence>
        {video && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-x-1 inset-y-1 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={onClose}
          >
            <div
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            >
              <div className="absolute top-0 left-0 right-0 z-20 p-4 bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
                <h3 className="text-white font-bold text-lg">
                  {video.title}
                </h3>
              </div>
              <iframe
                  src={`https://player.vimeo.com/video/${video.videoId}?autoplay=1&muted=0&title=0&byline=0&portrait=0`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  className="w-full h-full"
                  title={video.title}
              ></iframe>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 text-white/70 hover:text-white transition-colors bg-black/30 rounded-full p-1"
                aria-label="Close video"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
  );
}
