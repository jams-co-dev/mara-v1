
'use client';

import { MoodBoard } from '@/components/mood-board';
import { PageWrapper } from '@/components/page-wrapper';
import { VideoPopup } from '@/components/video-popup';
import { allVideos, VideoData } from '@/lib/video-data';
import { useState, useCallback } from 'react';

const moodBoardRows = [
  {
    items: [allVideos[7], allVideos[8], allVideos[0]]
  },
  {
    items: [allVideos[9], allVideos[1]]
  },
  {
    items: [allVideos[2]]
  },
  {
    items: [allVideos[3], allVideos[4], allVideos[5]]
  },
  {
    items: [allVideos[6]]
  }
];

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);

  const handleSelectVideo = useCallback((video: VideoData) => {
    setSelectedVideo(video);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedVideo(null);
  }, []);

  return (
    <PageWrapper>
      <MoodBoard 
        rows={moodBoardRows}
        onVideoSelect={handleSelectVideo}
      />
      <VideoPopup
        video={selectedVideo}
        onClose={handleClose}
      />
    </PageWrapper>
  );
}
