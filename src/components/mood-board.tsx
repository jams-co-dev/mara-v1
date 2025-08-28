
"use client";

import React, { useEffect, useRef } from 'react';
import type { VideoData } from '@/lib/video-data';

interface MoodBoardRow {
  items: VideoData[];
}

interface MoodBoardProps {
  rows: MoodBoardRow[];
}

function BackgroundVideoItem({ item }: { item: VideoData; }) {
  return (
    <div className='flex-1 relative h-full w-full group'>
        <iframe
          src={`https://player.vimeo.com/video/${item.videoId}?background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          className="w-full h-full absolute top-0 left-0 object-cover pointer-events-none"
          title={item.title}
        ></iframe>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
        <div
          className="absolute inset-0 z-10 cursor-pointer video-select-trigger"
          data-video-id={item.videoId}
          data-video-title={item.title}
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

export function MoodBoard({ rows }: MoodBoardProps) {
    const moodBoardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const moodBoard = moodBoardRef.current;
        if (!moodBoard) return;

        const handleVideoSelect = (event: Event) => {
            const target = event.currentTarget as HTMLElement;
            const videoId = target.getAttribute('data-video-id');
            const videoTitle = target.getAttribute('data-video-title');
            
            if (videoId) {
                const popup = document.getElementById('video-popup-container');
                const popupIframe = document.getElementById('popup-video-iframe') as HTMLIFrameElement | null;
                const popupTitle = document.getElementById('popup-video-title');

                if (popup && popupIframe && popupTitle) {
                    popupIframe.src = `https://player.vimeo.com/video/${videoId}?autoplay=1&muted=0&title=0&byline=0&portrait=0`;
                    popupTitle.textContent = videoTitle;
                    popup.style.display = 'flex';
                }
            }
        };

        const triggers = moodBoard.querySelectorAll('.video-select-trigger');
        triggers.forEach(trigger => {
            trigger.addEventListener('click', handleVideoSelect);
        });

        return () => {
            triggers.forEach(trigger => {
                trigger.removeEventListener('click', handleVideoSelect);
            });
        };

    }, [rows]);


  return (
    <div className="w-full relative" ref={moodBoardRef}>
      <div className="flex flex-col">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col md:flex-row aspect-video md:aspect-auto md:h-[50vh]">
            {row.items.map((item) => (
              <BackgroundVideoItem key={item.id} item={item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
