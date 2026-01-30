'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PenTool, Palette, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PageWrapper } from '@/components/page-wrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    icon: PenTool,
    title: "EDIT",
    names: [
        { name: "Javier Pinilla", slug: "javier-pinilla" },
        { name: "Carlos León", slug: "carlos-leon" },
        { name: "Daniel Vargas", slug: "daniel-vargas" },
        { name: "Mateo Herrera", slug: "mateo" },
        { name: "Arturo Perez", slug: "arturo-p" },
    ],
    color: "bg-[#141414]",
    textColor: "text-[#f2f0da]",
    imageUrl: "https://marapost.co/cdn-cgi/image/fit=scale-down,width=auto,format=auto,quality=80,sharpen=1/EDIT_final.png",
    imageHint: "editing equipment",
    imageWidth: "object-[80%_center]",
  },
  {
    icon: Palette,
    title: "COLOR",
    names: [
        { name: "Arturo Perez", slug: "arturo-perez" },
        { name: "Juan Diego Barragan", slug: "diego" },
    ],
    color: "bg-[#ce283e]",
    textColor: "text-[#f2f0da]",
    imageUrl: "https://marapost.co/cdn-cgi/image/fit=scale-down,width=auto,format=auto,quality=80,sharpen=1/Color_final.png",
    imageHint: "color palette",
    imageWidth: "object-[85%_center]",
  },
  {
    icon: Sparkles,
    title: "VFX",
    names: [
        { name: "Cristian Pico", slug: "cristian-pico" },
        { name: "Harold Rodríguez", slug: "harold" },
        { name: "Juan Contreras", slug: "juan-contreras" },
    ],
    color: "bg-[#ffffff]",
    textColor: "text-black",
    imageUrl: "https://marapost.co/cdn-cgi/image/fit=scale-down,width=auto,format=auto,quality=80,sharpen=1/VFX_final.png",
    imageHint: "visual effects",
    imageWidth: "object-[100%_center]",
  },
  {
    icon: Sparkles,
    title: "IA",
    names: [
    ],
    color: "bg-gray-900",
    textColor: "text-gray-200",
    imageUrl: "https://picsum.photos/seed/ai/800/1200",
    imageHint: "artificial intelligence",
    imageWidth: "object-[100%_center]",
    videoUrl: "https://marapost.co/reel_ia%20(1080p).mp4",
  },
];

export default function ServicesClientPage() {
  const [activeService, setActiveService] = useState(0);
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  return (
    <PageWrapper>
      <main>
        {/* Mobile and Tablet View: Accordion */}
        <div className="md:hidden px-4 py-8">
            <h1 className="text-3xl font-sans text-primary mb-8 text-center">Creative Talent</h1>
            <Accordion type="single" collapsible className="w-full">
              {services.map((service) => (
                <AccordionItem key={service.title} value={service.title}>
                  <AccordionTrigger className="text-xl font-sans hover:no-underline text-primary">
                    {service.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col items-start space-y-4 pt-2">
                        {service.names.map((member) => (
                            <Link
                                key={member.slug}
                                href={`/team/${member.slug}`}
                                className="font-body text-muted-foreground hover:text-primary transition-colors"
                            >
                                {member.name}
                            </Link>
                        ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
        </div>
        
        {/* Desktop View: Interactive Panels */}
        <div className="hidden md:flex flex-col md:flex-row w-full h-[calc(100vh_-_5rem)]">
          <h1 className="sr-only">Creative Talent Services: Edit, Color, and VFX</h1>
            {services.map((service, index) => (
              <div
                key={index}
                className={cn(
                  "relative h-full text-white cursor-pointer transition-all duration-500 ease-in-out flex items-center",
                  activeService === index 
                    ? 'flex-grow w-full md:w-[90%] z-40 overflow-visible shadow-2xl' 
                    : 'flex-shrink w-full md:w-[calc(10%_/_2)] z-0 overflow-hidden',
                  service.color
                )}
                onClick={() => setActiveService(index)}
              >
                <div
                    className={cn(
                        "absolute inset-0 flex items-center justify-center transition-opacity duration-500",
                        activeService !== index ? 'opacity-100' : 'opacity-0'
                    )}
                >
                    <h2 
                        className={cn(
                            "text-2xl font-sans font-bold uppercase tracking-widest [writing-mode:vertical-rl] transform rotate-180",
                            service.textColor
                        )}
                    >
                        {service.title}
                    </h2>
                </div>
                <div
                  className={cn(
                    "absolute inset-0 flex items-center justify-start transition-opacity duration-500",
                    activeService === index ? 'opacity-100' : 'opacity-0'
                  )}
                >
                    <div className="flex h-full w-full items-center justify-between">
                      <div className="flex h-full items-center p-8">
                          <h2
                              className={cn(
                                  "text-2xl font-sans font-bold uppercase tracking-widest [writing-mode:vertical-rl] transform rotate-180 mr-16",
                                  service.textColor
                              )}
                          >
                              {service.title}
                          </h2>
                          <div 
                              className="flex-grow flex items-center justify-start"
                              onMouseLeave={() => setHoveredName(null)}
                          >
                            {service.names && (
                                <div className="flex flex-col text-left">
                                  {service.names.map(member => (
                                      <Link key={member.slug} href={`/team/${member.slug}`}>
                                          <span 
                                              className={cn(
                                                  "text-4xl font-sans font-bold cursor-pointer transition-opacity duration-300 block",
                                                  service.textColor,
                                                  hoveredName === null ? 'opacity-70' : (hoveredName === member.name ? 'opacity-100' : 'opacity-50')
                                              )}
                                              onMouseEnter={() => setHoveredName(member.name)}
                                          >
                                              {member.name}
                                          </span>
                                      </Link>
                                  ))}
                                </div>
                            )}
                          </div>
                      </div>
                      <div className={cn(
                          "absolute right-0 h-full transition-all duration-700 ease-in-out z-50 pointer-events-none",
                          service.videoUrl ? "w-[95%]" : "w-[65%]",
                          activeService === index ? "opacity-100 scale-100" : "opacity-0 scale-95"
                      )}>
                          {service.videoUrl ? (
                            <video
                                src={service.videoUrl}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={`w-full h-full object-cover ${service.imageWidth}`}
                            />
                          ) : (
                            <Image
                                src={service.imageUrl || ''}
                                alt={service.title}
                                fill
                                className={`object-cover ${service.imageWidth}`}
                                data-ai-hint={service.imageHint}
                            />
                          )}
                      </div>
                    </div>
                </div>
              </div>
            ))}
        </div>
      </main>
    </PageWrapper>
  );
}
