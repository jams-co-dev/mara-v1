
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
            

            <section className="mt-12 mb-16">
              <div className="w-screen ml-[calc(50%-50vw)] relative flex flex-col md:justify-center md:items-center overflow-hidden min-h-[50vh] md:min-h-[70vh]">
                <div className="w-full px-4 md:px-0 flex justify-center items-center">
                  <Image
                    src="/images/AboutUs_final_2.png"
                    alt="Mara Post Team"
                    width={1280}
                    height={720}
                    className="w-full h-auto object-cover transform scale-125 md:scale-125 transition-transform duration-700"
                    data-ai-hint="team collaboration"
                    priority
                  />
                </div>
                <div className="relative md:absolute md:left-[22%] md:top-[50%] w-full md:w-[28%] md:max-w-none p-6 rounded-lg backdrop-blur-sm mt-4 md:mt-0 z-10">
                  <p className="text-xs text-white/90 mb-4">
                    <span className="font-bold text-primary"></span> We are transforming alchemists of atmospheres, exploring and creating new ways of telling stories. We see how images find their voice, and how light and shadow dance with colors and textures, finding perfect harmony. We are that magical essence that transforms reality as far as imagination can take you. We are Mara Post.
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
