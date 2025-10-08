
'use client';

import { useState } from 'react';
import Link from 'next/link';
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
        { name: "JAVIER PINILLA", slug: "javier-pinilla" },
        { name: "JORGE BELTRAN", slug: "jorge-beltran" },
        { name: "CARLOS LEON", slug: "carlos-leon" },
        { name: "DANIEL VARGAS", slug: "daniel-vargas" },
        { name: "HAROLD", slug: "harold" },
        { name: "MATEO", slug: "mateo" },
    ],
    color: "bg-gray-900",
    textColor: "text-gray-200"
  },
  {
    icon: Palette,
    title: "COLOR",
    names: [
        { name: "ARTURO PEREZ", slug: "arturo-perez" },
        { name: "DIEGO", slug: "diego" },
        { name: "JOEL", slug: "joel" },
    ],
    color: "bg-sky-200/70",
    textColor: "text-sky-900"
  },
  {
    icon: Sparkles,
    title: "VFX",
    names: [
        { name: "CRISTIAN PICO", slug: "cristian-pico" },
        { name: "JUAN CONTRERAS", slug: "juan-contreras" },
    ],
    color: "bg-violet-200/70",
    textColor: "text-violet-900"
  },
];

export default function ServicesPage() {
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
            {services.map((service, index) => (
              <div
                key={index}
                className={cn(
                  "relative h-full text-white cursor-pointer transition-all duration-500 ease-in-out overflow-hidden",
                  "flex items-center",
                  activeService === index ? 'flex-grow w-full md:w-[90%]' : 'flex-shrink w-full md:w-[calc(10%_/_2)]',
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
                    <h3 
                        className={cn(
                            "text-2xl font-sans font-bold uppercase tracking-widest [writing-mode:vertical-rl] transform rotate-180",
                            service.textColor
                        )}
                    >
                        {service.title}
                    </h3>
                </div>
                <div
                  className={cn(
                    "absolute inset-0 flex items-start justify-start transition-opacity duration-500 p-8",
                    activeService === index ? 'opacity-100' : 'opacity-0'
                  )}
                >
                    <div className="flex h-full w-full items-start justify-start">
                      <div className="flex items-center h-full mr-16">
                          <h3 
                              className={cn(
                                  "text-2xl font-sans font-bold uppercase tracking-widest [writing-mode:vertical-rl] transform rotate-180",
                                  service.textColor
                              )}
                          >
                              {service.title}
                          </h3>
                      </div>
                      <div 
                          className="flex-grow flex items-start justify-start"
                          onMouseLeave={() => setHoveredName(null)}
                      >
                        {service.names && (
                            <div className="flex flex-col text-left mt-8">
                              {service.names.map(member => (
                                  <Link key={member.slug} href={`/team/${member.slug}`}>
                                      <span 
                                          className={cn(
                                              "text-4xl font-sans font-bold uppercase cursor-pointer transition-opacity duration-300 block",
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
                </div>
              </div>
            ))}
        </div>
      </main>
    </PageWrapper>
  );
}
