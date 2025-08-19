
'use client';

import { useState } from 'react';
import { Video, Megaphone, Camera, PenTool, BarChart3, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { PageWrapper } from '@/components/page-wrapper';

const services = [
  {
    icon: Video,
    title: "Video Production",
    description: "From concept to final cut, we produce high-quality commercials, corporate videos, and branded content that captivate and engage.",
    color: "bg-teal-300/70",
    textColor: "text-teal-900"
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategic campaigns across social media, search engines, and more to grow your audience and drive sales. We make your message heard.",
    color: "bg-amber-300/70",
    textColor: "text-amber-900"
  },
  {
    icon: Camera,
    title: "Commercial Photography",
    description: "Stunning product, lifestyle, and corporate photography that captures the essence of your brand and tells a compelling story.",
    color: "bg-sky-300/70",
    textColor: "text-sky-900"
  },
  {
    icon: PenTool,
    title: "Branding & Identity",
    description: "We craft memorable brand identities, including logos, style guides, and messaging that resonates with your target audience.",
    color: "bg-rose-300/70",
    textColor: "text-rose-900"
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Data-driven insights to measure campaign performance and optimize for success. We turn data into actionable intelligence.",
    color: "bg-indigo-300/70",
    textColor: "text-indigo-900"
  },
  {
    icon: Users,
    title: "Social Media Management",
    description: "Engaging content creation and community management to build a loyal following and foster brand advocacy.",
    color: "bg-lime-300/70",
    textColor: "text-lime-900"
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);

  return (
    <PageWrapper>
      <div className="flex flex-col md:flex-row w-full h-[calc(100vh_-_5rem)] -mt-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "relative h-full text-white cursor-pointer transition-all duration-500 ease-in-out overflow-hidden",
                "flex items-center justify-center",
                activeService === index ? 'flex-grow w-full md:w-[60%]' : 'flex-shrink w-full md:w-[calc(40%_/_5)]',
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
