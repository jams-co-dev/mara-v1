
import Image from "next/image";
import { notFound } from 'next/navigation';
import { Card, CardContent } from "@/components/ui/card";

// In a real app, you'd fetch this from a CMS or database
const teamMembers = [
  {
    name: "Jane Doe",
    slug: "jane-doe",
    role: "Founder & Creative Director",
    imageUrl: "https://placehold.co/200x200.png",
    hint: "professional woman",
    bio: "Jane es la fuerza visionaria detrás de Visionary Digital. Con más de 15 años de experiencia en la industria creativa, su pasión es construir narrativas de marca que cautiven e inspiren. Su liderazgo impulsa al equipo a superar los límites de la creatividad y la estrategia. Es una oradora solicitada en conferencias de la industria y ha ganado múltiples premios por su trabajo innovador en publicidad digital. En su tiempo libre, disfruta de la fotografía analógica y es voluntaria en un refugio de animales local.",
    headerImage: "https://placehold.co/1920x1080.png",
    headerHint: "modern office"
  },
  {
    name: "John Smith",
    slug: "john-smith",
    role: "Lead Videographer",
    imageUrl: "https://placehold.co/200x200.png",
    hint: "man with camera",
    bio: "John tiene un ojo cinematográfico incomparable. Es un experto en capturar la esencia de una historia a través de la lente, transformando conceptos en obras de arte visuales. Domina desde comerciales de alto octanaje hasta documentales emotivos. Su trabajo ha sido presentado en festivales de cine internacionales y ha colaborado con algunas de las marcas más reconocidas a nivel mundial. Cuando no está detrás de la cámara, está explorando nuevas rutas de senderismo o experimentando con técnicas de cocina gourmet.",
    headerImage: "https://placehold.co/1920x1080.png",
    headerHint: "video production set"
  },
  {
    name: "Emily White",
    slug: "emily-white",
    role: "Marketing Strategist",
    imageUrl: "https://placehold.co/200x200.png",
    hint: "woman at whiteboard",
    bio: "Emily es la mente analítica del equipo. Combina la creatividad con datos para diseñar campañas de marketing digital que no solo generan engagement, sino que también impulsan resultados medibles. Su especialidad es conectar marcas con sus audiencias ideales. Posee certificaciones en todas las principales plataformas de publicidad digital y es una experta en SEO y marketing de contenidos. Fuera del trabajo, es una ávida jugadora de ajedrez y organiza torneos locales.",
    headerImage: "https://placehold.co/1920x1080.png",
    headerHint: "marketing data charts"
  },
   {
    name: "Michael Brown",
    slug: "michael-brown",
    role: "Senior Editor",
    imageUrl: "https://placehold.co/200x200.png",
    hint: "man editing video",
    bio: "Michael es donde la magia de la postproducción cobra vida. Con una meticulosa atención al detalle, ensambla el metraje, el sonido y los efectos para crear un producto final pulido y potente que deja una impresión duradera. Es un maestro del color grading y el diseño de sonido, y su trabajo ha sido fundamental para el éxito de muchas de nuestras campañas premiadas. En su tiempo libre, compone música electrónica y es un apasionado del cine clásico.",
    headerImage: "https://placehold.co/1920x1080.png",
    headerHint: "editing suite monitors"
  }
];

function getTeamMember(slug: string) {
  return teamMembers.find((member) => member.slug === slug);
}

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
  const member = getTeamMember(params.slug);

  if (!member) {
    notFound();
  }

  return (
    <div>
      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src={member.headerImage}
          alt={`Header image for ${member.name}`}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
          data-ai-hint={member.headerHint}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-24 md:-mt-32">
          <Card className="overflow-hidden shadow-2xl">
            <CardContent className="p-6 md:p-12">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-primary">
                  {member.name}
                </h1>
                <p className="mt-2 text-xl md:text-2xl font-semibold text-accent">
                  {member.role}
                </p>
              </div>
              <div className="prose prose-lg max-w-4xl mx-auto mt-8 text-muted-foreground">
                <p>{member.bio}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
