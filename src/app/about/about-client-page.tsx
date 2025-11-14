
'use client';

export default function AboutClientPage() {

  return (
    <div>
      <div className="flex flex-col min-h-[calc(100vh_-_5rem)] bg-black">
        <main className="relative flex items-center justify-center text-primary-foreground text-center flex-grow">
          <div className="relative z-10 p-4">
            <section className="mb-8">
              <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-white">
                About Us
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                The creative force behind Mara Post.
              </p>
            </section>

            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-sans text-accent mb-4">LIMITLESS C R E A T I V I T Y </h2>
                <p className="text-lg text-white/90 mb-4">
                We are transforming alchemists of atmospheres, exploring and creating new ways of telling stories. We see how images find their voice, and how light and shadow dance with colors and textures, finding perfect harmony. We are that magical essence that transforms reality as far as imagination can take you. We are Mara Post.
                </p>
                <p className="text-lg text-white/90">
                    Founded on the principles of innovation, collaboration, and excellence, we strive to be more than just a service provider; we aim to be a true partner in our clients' success.
                </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
