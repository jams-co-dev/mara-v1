
'use client';

import Image from 'next/image';

export default function AboutClientPage() {

  return (
    <div className="bg-background text-primary-foreground">
      <div className="flex flex-col min-h-[calc(100vh_-_5rem)]">
        <main className="flex-grow pt-24 pb-24">
          <div className="container mx-auto px-4">
            <section className="text-center">
              <h1 className="text-2xl md:text-3xl font-sans font-bold tracking-tight text-primary-foreground">
                About Us
              </h1>
            </section>
            

            <section className="relative w-full flex items-center justify-center overflow-visible mt-0 md:-mt-4 mb-32">
              {/* Aspect Ratio Container for Locked Composition */}
              <div className="relative w-full max-w-[90vw] md:max-w-7xl aspect-[4/3] md:aspect-[16/9] flex items-center justify-center">
                
                {/* Text Layer - Centered in the aspect container */}
                <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full">
                  <h1 className="text-[14vw] md:text-[min(11vw,12rem)] font-bold font-sans text-[#ce283e] leading-[0.8] text-center tracking-tight mix-blend-normal">
                    <span className="block">Limitless</span>
                    <span className="block ml-[20%] md:ml-[25%]">Creativity</span>
                  </h1>
                </div>

                {/* Images Layer - Anchored to the Aspect Container */}
                
                {/* JOEL_FX.png - Left Side (Swapped) */}
                <div className="absolute left-[-2%] md:left-[15%] top-[55%] -translate-y-1/2 w-[30%] md:w-[22%] h-auto z-20 pointer-events-none">
                   <Image
                      src="/images/JOEL_FX.png"
                      alt="Creative Dog"
                      width={800}
                      height={800}
                      className="object-contain w-full h-auto drop-shadow-2xl"
                      priority
                   />
                </div>

                {/* GIN_FX.png - Bottom Right (Swapped) */}
                <div className="absolute bottom-[10%] md:-bottom-[10%] right-0 md:right-[12%] w-[40%] md:w-[30%] h-auto z-20 pointer-events-none">
                    <Image
                      src="/images/GIN_FX.png"
                      alt="Creative Griffin"
                      width={800}
                      height={800}
                      className="object-contain w-full h-auto drop-shadow-2xl"
                      priority
                   />
                </div>

                {/* OBJETO_JAVI_FX.png - Top Right (Swapped) */}
                <div className="absolute top-[20%] md:top-[30%] right-[5%] md:right-[8%] w-[20%] md:w-[15%] h-auto z-20 pointer-events-none">
                     <Image
                      src="https://marapost.co/cdn-cgi/image/fit=scale-down,width=auto,format=auto,quality=80,sharpen=1/OBJETO_JAVI_FX.png"
                      alt="Creative Heart"
                      width={500}
                      height={500}
                      className="object-contain w-full h-auto drop-shadow-2xl"
                      priority
                   />
                </div>
                {/* About Us Text - Absolute Bottom Left Card */}
                <div className="absolute bottom-[5%] md:-bottom-[5%] left-0 md:left-[23%] z-30 w-full md:w-[35%] p-6 rounded-xl">
                   <p className="text-xs md:text-sm text-white/90 mb-4 font-sans leading-relaxed">
                      We are transforming alchemists of atmospheres, exploring and creating new ways of telling stories. We see how images find their voice, and how light and shadow dance with colors and textures, finding perfect harmony. We are that magical essence that transforms reality as far as imagination can take you. We are Mara Post.
                   </p>
                   <p className="text-xs md:text-sm text-white/90 tracking-wide font-sans">
                      Founded on the principles of innovation, collaboration, and excellence, we aim to be a true partner in our clients success.
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
