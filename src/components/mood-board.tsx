
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { VideoData } from '@/lib/video-data';

interface MoodBoardRow {
  items: VideoData[];
}

interface MoodBoardProps {
  rows: MoodBoardRow[];
  onVideoSelect: (video: VideoData) => void;
}

function VideoTile({ item, onVideoSelect }: { item: VideoData; onVideoSelect: (video: VideoData) => void; }) {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    // Use a timeout to ensure the placeholder is rendered first, then switch to the video.
    // This helps in creating a smoother loading experience.
    const timer = setTimeout(() => {
      setIsVideoVisible(true);
    }, 100); // A short delay before loading the iframe

    return () => clearTimeout(timer);
  }, [item.id]);

  return (
    <div className='flex-1 relative h-full w-full group overflow-hidden'>
      {/* Thumbnail shown initially and during re-renders */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isVideoVisible ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
      >
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </motion.div>

      {/* Iframe video fades in */}
      {isVideoVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full h-full"
        >
          <iframe
            src={`https://player.vimeo.com/video/${item.videoId}?background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0`}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            className="w-full h-full absolute top-0 left-0 object-cover pointer-events-none"
            title={item.title}
          ></iframe>
        </motion.div>
      )}

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
}

export function MoodBoard({ rows, onVideoSelect }: MoodBoardProps) {
  return (
    <div className="w-full relative">
      <div className="flex flex-col">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col md:flex-row aspect-video md:aspect-auto md:h-[50vh]">
            {row.items.map((item) => (
              <VideoTile key={item.id} item={item} onVideoSelect={onVideoSelect} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
