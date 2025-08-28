
'use client';

import { MoodBoard } from '@/components/mood-board';
import { VideoPopup } from '@/components/video-popup';
import { allVideos, VideoData } from '@/lib/video-data';
import { useState, useCallback } from 'react';

export interface MoodBoardRow {
  items: VideoData[];
  layout: '50/50' | '60/40' | '40/60';
}

const moodBoardRows: MoodBoardRow[] = [
  {
    items: [allVideos[0], allVideos[1]],
    layout: '50/50'
  },
  {
    items: [allVideos[2], allVideos[3]],
    layout: '50/50'
  },
  {
    items: [allVideos[4], allVideos[5]],
    layout: '50/50'
  },
  {
    items: [allVideos[6], allVideos[7]],
    layout: '50/50'
  },
  {
    items: [allVideos[8], allVideos[9]],
    layout: '50/50'
  }
];

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  const [moodboardKey, setMoodboardKey] = useState(0);

  const handleVideoSelect = useCallback((video: VideoData) => {
    setSelectedVideo(video);
  }, []);

  const handleClosePopup = useCallback(() => {
    setSelectedVideo(null);
    setMoodboardKey(prevKey => prevKey + 1);
  }, []);

  return (
    <main className="pt-20">
      <MoodBoard 
        key={moodboardKey}
        rows={moodBoardRows} 
        onVideoSelect={handleVideoSelect} 
      />
      <VideoPopup 
        video={selectedVideo}
        onClose={handleClosePopup}
      />
    </main>
  );
}
