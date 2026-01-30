
'use client';

import Image from 'next/image';

export default function AiClientPage() {

  return (
    <div className="bg-background text-primary-foreground">
      <div className="flex flex-col min-h-[calc(100vh_-_5rem)]">
        <main className="flex-grow pt-24 pb-24">
          <div className="container mx-auto px-4">
            <section className="text-center">
              <h1 className="text-2xl md:text-3xl font-sans font-bold tracking-tight text-primary-foreground">
                AI
              </h1>
            </section>
            

            <section className="relative w-full flex items-center justify-center overflow-visible mt-12 md:mt-16 mb-32">
              {/* Aspect Ratio Container for Locked Composition */}
              <div className="relative w-full max-w-[90vw] md:max-w-7xl aspect-[4/3] md:aspect-[16/9] flex items-center justify-center">
                
                {/* Text Layer - Centered in the aspect container */}
                <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full">
                  <h1 className="text-[12vw] md:text-[min(9vw,12rem)] font-bold font-sans text-[#ce283e] leading-[0.8] text-center tracking-tight mix-blend-normal">
                    <span className="block">Artificial</span>
                    <span className="block ml-[20%] md:ml-[25%]">Intelligence</span>
                  </h1>
                </div>

                {/* Video Background */}
                <div className="absolute inset-0 z-0">
                  <video
                    className="w-full h-full object-cover rounded-xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="https://marapost.co/reel_ia%20(1080p).mp4" type="video/mp4" />
                  </video>
                  {/* Overlay to ensure text readability */}
                  <div className="absolute inset-0 bg-black/40 rounded-xl" />
                </div>

                {/* About Us Text - Absolute Bottom Left Card */}
                <div className="absolute bottom-[5%] md:-bottom-[5%] left-0 md:left-[23%] z-30 w-full md:w-[35%] p-6 rounded-xl">
                   <p className="text-xs md:text-sm text-white/90 mb-4 font-sans leading-relaxed">
                      Embracing the future of creativity, our AI division explores the intersection of human imagination and machine intelligence. We leverage cutting-edge algorithms to enhance workflows, generate new visual languages, and push the boundaries of what is possible in post-production.
                   </p>
                   <p className="text-xs md:text-sm text-white/90 tracking-wide font-sans">
                      INNOVATION • EFFICIENCY • FUTURE
                   </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
