
'use client';

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Jane Doe",
    slug: "jane-doe",
    role: "Founder & Creative Director",
    imageUrl: "https://placehold.co/200x200.png",
    hint: "professional woman",
    bio: "Jane es la fuerza visionaria detrás de Visionary Digital. Con más de 15 años de experiencia en la industria creativa, su pasión es construir narrativas de marca que cautiven e inspiren. Su liderazgo impulsa al equipo a superar los límites de la creatividad y la estrategia.",
    headerImage: "https://placehold.co/1920x1080.png",
    headerHint: "modern office"
  },
  {
    name: "John Smith",
    slug: "john-smith",
    role: "Lead Videographer",
    imageUrl: "https://placehold.co/200x200.png",
    hint: "man with camera",
    bio: "John tiene un ojo cinematográfico incomparable. Es un experto en capturar la esencia de una historia a través de la lente, transformando conceptos en obras de arte visuales. Domina desde comerciales de alto octanaje hasta documentales emotivos.",
    headerImage: "https://placehold.co/1920x1080.png",
    headerHint: "video production set"
  },
  {
    name: "Emily White",
    slug: "emily-white",
    role: "Marketing Strategist",
    imageUrl: "https://placehold.co/200x200.png",
    hint: "woman at whiteboard",
    bio: "Emily es la mente analítica del equipo. Combina la creatividad con datos para diseñar campañas de marketing digital que no solo generan engagement, sino que también impulsan resultados medibles. Su especialidad es conectar marcas con sus audiencias ideales.",
    headerImage: "https://placehold.co/1920x1080.png",
    headerHint: "marketing data charts"
  },
   {
    name: "Michael Brown",
    slug: "michael-brown",
    role: "Senior Editor",
    imageUrl: "https://placehold.co/200x200.png",
    hint: "man editing video",
    bio: "Michael es donde la magia de la postproducción cobra vida. Con una meticulosa atención al detalle, ensambla el metraje, el sonido y los efectos para crear un producto final pulido y potente que deja una impresión duradera.",
    headerImage: "https://placehold.co/1920x1080.png",
    headerHint: "editing suite monitors"
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
        <h2 className="text-3xl font-headline text-primary mb-12 text-center">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Link key={member.slug} href={`/team/${member.slug}`}>
              <Card className="group overflow-hidden text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardContent className="p-6 flex flex-col items-center">
                  <Avatar className="w-32 h-32 border-4 border-transparent group-hover:border-accent transition-colors duration-300 mb-4">
                    <AvatarImage src={member.imageUrl} alt={member.name} data-ai-hint={member.hint} />
                    <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="font-headline text-2xl text-primary">{member.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{member.role}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
