
'use client';

import { useState } from 'react';
import { MoodBoard } from '@/components/mood-board';
import { PageWrapper } from '@/components/page-wrapper';
import { allVideos, type VideoData } from '@/lib/video-data';
import { VideoPopup } from '@/components/mood-board';

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

  return (
    <PageWrapper>
      <MoodBoard rows={moodBoardRows} onVideoSelect={setSelectedVideo} />
      <VideoPopup selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} />
    </PageWrapper>
  );
}
