
'use client';

import { Card, CardContent } from "@/components/ui/card";
import { PageWrapper } from '@/components/page-wrapper';

export default function AboutPage() {

  return (
    <PageWrapper>
      <main className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-primary">
              About Us
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              The creative force behind Mara Post.
            </p>
          </section>

          <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-headline text-primary mb-4 text-center md:text-left">LIMITLESS C R E A T I V I T Y </h2>
              <p className="text-lg text-muted-foreground mb-4">
              We are transforming alchemists of atmospheres, exploring and creating new ways of telling stories. We see how images find their voice, and how light and shadow dance with colors and textures, finding perfect harmony. We are that magical essence that transforms reality as far as imagination can take you. We are Mara Post.
              </p>
              <p className="text-lg text-muted-foreground">
                  Founded on the principles of innovation, collaboration, and excellence, we strive to be more than just a service provider; we aim to be a true partner in our clients' success.
              </p>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}
