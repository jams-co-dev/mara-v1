
"use client";

import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export function VideoPopup() {
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const popup = popupRef.current;
        if (!popup) return;

        const closeButton = popup.querySelector('.video-popup-close');
        const popupIframe = popup.querySelector('iframe');
        
        const handleClose = () => {
            if (popupIframe) {
                // Stop the video by clearing the src, which is important
                popupIframe.src = '';
            }
            popup.style.display = 'none';
        }

        // Close when clicking the close button
        closeButton?.addEventListener('click', handleClose);
        
        // Close when clicking on the background overlay
        const handleContainerClick = (event: MouseEvent) => {
            if (event.target === popup) {
                handleClose();
            }
        }
        popup.addEventListener('click', handleContainerClick);

        // Close when pressing the Escape key
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            closeButton?.removeEventListener('click', handleClose);
            popup.removeEventListener('click', handleContainerClick);
            window.removeEventListener('keydown', handleKeyDown);
        };

    }, []);

  return (
      <div
        id="video-popup-container"
        ref={popupRef}
        className="fixed inset-0 z-50 items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        style={{ display: 'none' }}
      >
        <div
          className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-0 right-0 z-20 p-4 bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
            <h3 id="popup-video-title" className="text-white font-bold text-lg">
            </h3>
          </div>
          <iframe
              id="popup-video-iframe"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              className="w-full h-full"
          ></iframe>
          <button
            className="video-popup-close absolute top-4 right-4 z-20 text-white/70 hover:text-white transition-colors"
            aria-label="Close video"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>
  );
}
