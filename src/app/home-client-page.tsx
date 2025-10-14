
'use client';

import { MoodBoard } from '@/components/mood-board';
import { VideoPopup } from '@/components/video-popup';
import { allVideos, VideoData } from '@/lib/video-data';
import { useState, useCallback, useMemo } from 'react';

export interface MoodBoardRow {
  items: VideoData[];
}

const generateMoodBoardRows = (videos: VideoData[]): MoodBoardRow[] => {
  const rows: MoodBoardRow[] = [];
  const pattern = [2, 1, 3];
  let videoIndex = 0;
  let patternIndex = 0;

  while (videoIndex < videos.length) {
    const numItems = pattern[patternIndex % pattern.length];
    const rowItems = videos.slice(videoIndex, videoIndex + numItems);
    if (rowItems.length > 0) {
      rows.push({ items: rowItems });
    }
    videoIndex += numItems;
    patternIndex++;
  }

  return rows;
};


export default function HomeClientPage() {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);

  const moodBoardRows = useMemo(() => generateMoodBoardRows(allVideos), []);

  const handleVideoSelect = useCallback((video: VideoData) => {
    setSelectedVideo(video);
  }, []);

  const handleClosePopup = useCallback(() => {
    setSelectedVideo(null);
  }, []);

  return (
    <main>
      <h1 className="sr-only">Mara Post - Homepage Mood Board</h1>
      <MoodBoard 
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
