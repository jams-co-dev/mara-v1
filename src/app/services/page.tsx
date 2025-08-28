
'use client';

import { useState } from 'react';
import { PenTool, Palette, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PageWrapper } from '@/components/page-wrapper';

const services = [
  {
    icon: PenTool,
    title: "EDIT",
    names: [
        "JAVIER PINILLA",
        "JORGE BELTRAN",
        "CARLOS LEON",
        "DANIEL VARGAS"
    ],
    color: "bg-rose-300/70",
    textColor: "text-rose-900"
  },
  {
    icon: Palette,
    title: "COLOR",
    description: "Strategic campaigns across social media, search engines, and more to grow your audience and drive sales. We make your message heard.",
    color: "bg-amber-300/70",
    textColor: "text-amber-900"
  },
  {
    icon: Sparkles,
    title: "VFX",
    description: "Stunning product, lifestyle, and corporate photography that captures the essence of your brand and tells a compelling story.",
    color: "bg-sky-300/70",
    textColor: "text-sky-900"
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  return (
    <PageWrapper>
      {/* Mobile and Tablet View: TODO */}
      <div className="md:hidden">
        {/* This view needs to be adapted for the new content */}
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
                          "text-2xl font-headline font-bold uppercase tracking-widest [writing-mode:vertical-rl] transform rotate-180",
                          service.textColor
                      )}
                  >
                      {service.title}
                  </h3>
              </div>
              <div
                className={cn(
                  "absolute inset-0 flex items-center justify-start transition-opacity duration-500 p-8",
                  activeService === index ? 'opacity-100' : 'opacity-0'
                )}
              >
                  <div className="flex h-full w-full">
                    <div className="w-1/4 flex items-center justify-center">
                        <h3 
                            className={cn(
                                "text-2xl font-headline font-bold uppercase tracking-widest [writing-mode:vertical-rl] transform rotate-180",
                                service.textColor
                            )}
                        >
                            {service.title}
                        </h3>
                    </div>
                    <div 
                        className="w-3/4 flex items-center justify-center"
                        onMouseLeave={() => setHoveredName(null)}
                    >
                      {service.names && (
                          <div className="flex flex-col text-left">
                            {service.names.map(name => (
                                <span 
                                    key={name}
                                    className={cn(
                                        "text-4xl font-headline font-bold uppercase cursor-pointer transition-opacity duration-300",
                                        service.textColor,
                                        hoveredName === null ? 'opacity-70' : (hoveredName === name ? 'opacity-100' : 'opacity-50')
                                    )}
                                    onMouseEnter={() => setHoveredName(name)}
                                >
                                    {name}
                                </span>
                            ))}
                          </div>
                      )}
                      </div>
                  </div>
              </div>
            </div>
          ))}
      </div>
    </PageWrapper>
  );
}
