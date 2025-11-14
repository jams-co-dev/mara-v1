
'use client';

import Image from 'next/image';

export default function AboutClientPage() {

  return (
    <div className="bg-black text-primary-foreground">
      <div className="flex flex-col min-h-[calc(100vh_-_5rem)]">
        <main className="flex-grow pt-16 pb-24">
          <div className="container mx-auto px-4">
            <section className="text-center">
              <h1 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-white">
                About Us
              </h1>
            </section>

            <section className="mt-12 mb-16">
              <div className="max-w-7xl mx-auto relative flex flex-col md:justify-center md:items-center">
                <div className="w-full">
                  <Image
                    src="/images/About_us_2.png"
                    alt="Mara Post Team"
                    width={1280}
                    height={720}
                    className="w-full h-auto rounded-lg"
                    data-ai-hint="team collaboration"
                  />
                </div>
                <div className="relative md:absolute md:left-0 md:top-1/2 w-full max-w-sm p-6 rounded-lg backdrop-blur-sm -ml-0 md:-ml-8 mt-4 md:mt-0">
                  <p className="text-xs text-white/90 mb-4">
                    We are transforming alchemists of atmospheres, exploring and creating new ways of telling stories. We see how images find their voice, and how light and shadow dance with colors and textures, finding perfect harmony. We are that magical essence that transforms reality as far as imagination can take you. We are Mara Post.
                  </p>
                  <p className="text-xs text-white/90">
                    Founded on the principles of innovation, collaboration, and excellence, we strive to be more than just a service provider; we aim to be a true partner in our clients' success.
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
