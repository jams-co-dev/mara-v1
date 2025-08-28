
'use client';

import { useState } from 'react';
import { PenTool, Palette, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageWrapper } from '@/components/page-wrapper';

const services = [
  {
    icon: PenTool,
    title: "EDIT",
    description: "From concept to final cut, we produce high-quality commercials, corporate videos, and branded content that captivate and engage.",
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

  return (
    <PageWrapper>
      {/* Mobile and Tablet View: Stacked Cards */}
      <div className="md:hidden">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-primary">
                    Our Services
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    What we can do for you.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-8">
                {services.map((service, index) => (
                    <Card key={index} className={cn("text-center overflow-hidden", service.color)}>
                        <CardHeader className="pt-8">
                            <service.icon className={cn("w-12 h-12 mx-auto mb-4", service.textColor)} />
                            <CardTitle as="h3" className={cn("font-headline text-2xl", service.textColor)}>{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-8">
                            <p className="text-muted-foreground max-w-md mx-auto">{service.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
      </div>
      
      {/* Desktop View: Interactive Panels */}
      <div className="hidden md:flex flex-col md:flex-row w-full h-[calc(100vh_-_5rem)] -mt-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "relative h-full text-white cursor-pointer transition-all duration-500 ease-in-out overflow-hidden",
                "flex items-center justify-center",
                activeService === index ? 'flex-grow w-full md:w-[60%]' : 'flex-shrink w-full md:w-[calc(40%_/_2)]',
                service.color
              )}
              onClick={() => setActiveService(index)}
            >
              <div
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  activeService === index ? 'opacity-100' : 'opacity-0'
                )}
              >
                <Card className="h-full w-full bg-transparent border-0 rounded-none text-foreground flex flex-col justify-center">
                  <CardContent className="p-8 text-center">
                      <service.icon className={cn("w-16 h-16 mx-auto mb-6", service.textColor)} />
                      <h2 className={cn("text-3xl font-headline font-bold mb-4", service.textColor)}>{service.title}</h2>
                      <p className="text-lg text-muted-foreground max-w-md mx-auto">{service.description}</p>
                  </CardContent>
                </Card>
              </div>
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
            </div>
          ))}
      </div>
    </PageWrapper>
  );
}
