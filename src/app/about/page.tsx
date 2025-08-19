
'use client';

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "Founder & Creative Director",
    imageUrl: "https://placehold.co/200x200.png",
    hint: "professional woman",
    bio: "Jane es la fuerza visionaria detrás de Visionary Digital. Con más de 15 años de experiencia en la industria creativa, su pasión es construir narrativas de marca que cautiven e inspiren. Su liderazgo impulsa al equipo a superar los límites de la creatividad y la estrategia."
  },
  {
    name: "John Smith",
    role: "Lead Videographer",
    imageUrl: "https://placehold.co/200x200.png",
    hint: "man with camera",
    bio: "John tiene un ojo cinematográfico incomparable. Es un experto en capturar la esencia de una historia a través de la lente, transformando conceptos en obras de arte visuales. Domina desde comerciales de alto octanaje hasta documentales emotivos."
  },
  {
    name: "Emily White",
    role: "Marketing Strategist",
    imageUrl: "https://placehold.co/200x200.png",
    hint: "woman at whiteboard",
    bio: "Emily es la mente analítica del equipo. Combina la creatividad con datos para diseñar campañas de marketing digital que no solo generan engagement, sino que también impulsan resultados medibles. Su especialidad es conectar marcas con sus audiencias ideales."
  },
   {
    name: "Michael Brown",
    role: "Senior Editor",
    imageUrl: "https://placehold.co/200x200.png",
    hint: "man editing video",
    bio: "Michael es donde la magia de la postproducción cobra vida. Con una meticulosa atención al detalle, ensambla el metraje, el sonido y los efectos para crear un producto final pulido y potente que deja una impresión duradera."
  }
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-primary">
          About Us
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          The creative force behind Visionary Digital.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <div>
            <h2 className="text-3xl font-headline text-primary mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-4">
                At Visionary Digital, our mission is to blend artistry with strategy to create digital content that not only looks beautiful but also achieves business goals. We believe in the power of storytelling to connect brands with their audiences in meaningful ways.
            </p>
            <p className="text-lg text-muted-foreground">
                Founded on the principles of innovation, collaboration, and excellence, we strive to be more than just a service provider; we aim to be a true partner in our clients' success.
            </p>
        </div>
        <Card className="overflow-hidden rounded-lg shadow-lg">
            <CardContent className="p-0">
                <Image 
                    src="https://placehold.co/800x600.png"
                    alt="Our team at work"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    data-ai-hint="creative team meeting"
                />
            </CardContent>
        </Card>
      </div>

      <section>
        <h2 className="text-3xl font-headline text-primary mb-8 text-center">
          Meet the Team
        </h2>
        <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {teamMembers.map((member, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-16 h-16 border-2 border-accent/50">
                        <AvatarImage src={member.imageUrl} alt={member.name} data-ai-hint={member.hint} />
                        <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <h3 className="text-xl font-headline font-semibold">{member.name}</h3>
                        <p className="text-primary">{member.role}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground pl-20 pr-4 py-2">
                        {member.bio}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
        </div>
      </section>
    </div>
  );
}
