
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { VideoData } from '@/lib/video-data';
import { cn } from '@/lib/utils';
import { MoodBoardRow } from '@/app/home-client-page';

interface MoodBoardProps {
  rows: MoodBoardRow[];
  onVideoSelect: (video: VideoData) => void;
  refreshKey: number;
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

interface BackgroundVideoItemProps {
    item: VideoData;
    onVideoSelect: (video: VideoData) => void;
    className?: string;
    refreshKey: number;
}

const BackgroundVideoItem = ({ item, onVideoSelect, className, refreshKey }: BackgroundVideoItemProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const iframeSrc = `https://player.vimeo.com/video/${item.videoId}?background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0`;

    useEffect(() => {
        setIsLoaded(false);
    }, [refreshKey]);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div
            className={cn("relative h-full group overflow-hidden cursor-pointer bg-black", className)}
        >
            <div 
                onClick={() => onVideoSelect(item)}
                className="absolute inset-0 z-20"
                aria-label={`Open video ${item.title}`}
            />

            <Image
                src={item.thumbnail}
                alt={`Thumbnail for ${item.title}`}
                layout="fill"
                objectFit="cover"
                priority
                className={cn(
                    "absolute inset-0 transition-opacity duration-500 ease-in-out z-10",
                    isLoaded ? "opacity-0" : "opacity-100"
                )}
            />
            
            <iframe
                key={`${item.id}-${refreshKey}`}
                src={iframeSrc}
                onLoad={handleLoad}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                className={cn(
                    "absolute top-1/2 left-1/2 w-auto h-auto min-w-[177.77vh] min-h-[100vw] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ease-in-out group-hover:scale-105 pointer-events-none",
                    isLoaded ? "opacity-100" : "opacity-0"
                )}
                title={item.title}
            ></iframe>

            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/60 to-transparent w-full pointer-events-none z-20">
                <h3 className="text-white text-sm font-semibold">
                    {item.title}
                </h3>
            </div>
        </div>
    );
};

export const MoodBoard = ({ rows, onVideoSelect, refreshKey }: MoodBoardProps) => {
  return (
    <div className="w-full relative">
      <div className="flex flex-col">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col md:flex-row aspect-video md:h-[50vh] w-full">
            {row.items.map((item) => (
              <BackgroundVideoItem 
                key={item.id}
                item={item} 
                onVideoSelect={onVideoSelect} 
                className={getLayoutClasses(row.items.length)}
                refreshKey={refreshKey}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
