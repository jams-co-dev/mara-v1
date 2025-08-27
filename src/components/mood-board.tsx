
"use client";

import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface MoodBoardItem {
  id: string;
  videoId: string;
  thumbnail: string;
  hint: string;
  title: string;
  widthClass?: string;
}

interface MoodBoardRow {
  items: MoodBoardItem[];
}

interface MoodBoardProps {
  rows: MoodBoardRow[];
}

export function MoodBoard({ rows }: MoodBoardProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col md:flex-row">
            {row.items.map((item) => (
              <div key={item.id} className={cn('flex-1 relative group', item.widthClass)}>
                <Card
                  className="overflow-hidden cursor-pointer rounded-none border-0 h-full"
                  tabIndex={0}
                  aria-label={`Video: ${item.title}`}
                >
                  <CardContent className="p-0 relative h-full aspect-video">
                     <iframe
                        src={`https://player.vimeo.com/video/${item.videoId}?background=1&autoplay=1&loop=1&byline=0&title=0`}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        className="w-full h-full object-cover"
                        title={item.title}
                      ></iframe>
                    <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/50 to-transparent w-full">
                      <h3 className="text-white text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1">
                        {item.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
