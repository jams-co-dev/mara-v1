
'use client';

import { MoodBoard } from '@/components/mood-board';
import { VideoPopup } from '@/components/video-popup';
import { allVideos, VideoData } from '@/lib/video-data';
import { useState, useCallback } from 'react';

const moodBoardRows = [
  {
    items: [allVideos[0], allVideos[1], allVideos[2]]
  },
  {
    items: [allVideos[3], allVideos[4]]
  },
  {
    items: [allVideos[5]]
  },
  {
    items: [allVideos[6], allVideos[7], allVideos[8]]
  },
  {
    items: [allVideos[9], allVideos[0]]
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
    <>
      <MoodBoard 
        key={moodboardKey}
        rows={moodBoardRows} 
        onVideoSelect={handleVideoSelect} 
      />
      <VideoPopup 
        video={selectedVideo}
        onClose={handleClosePopup}
      />
    </>
  );
}
