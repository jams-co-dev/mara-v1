
import Image from "next/image";
import { notFound } from 'next/navigation';
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PageWrapper } from "@/components/page-wrapper";

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
    headerVideoId: "816721195",
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
    headerVideoId: "816721195",
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
    headerVideoId: "816721195",
    headerHint: "editing suite monitors"
  },
  {
    name: "JAVIER PINILLA",
    slug: "javier-pinilla",
    role: "Editor",
    imageUrl: "https://placehold.co/200x200.png",
    hint: "man editing film",
    bio: "As Director of Postproduction, I have based my career on the excellence I bring to each commercial. I am passionate about what I do, specializing in connecting and expressing through images what I see and feel. I enjoy understanding and interpreting each idea that comes to us from agencies and producers in order to give it a comprehensive and powerful structure according to the campaign concept. I have 16 years of experience in the advertising audiovisual industry where I have managed to create a solid company and a talented team, always seeking to ensure that our workflow achieves the effectiveness and impact necessary for each of the pieces.",
    headerImage: "https://placehold.co/1920x1080.png",
    headerVideoId: "803603427",
    headerHint: "video editing timeline"
  },
  {
    name: "JORGE BELTRAN",
    slug: "jorge-beltran",
    role: "Editor",
    imageUrl: "https://placehold.co/200x200.png",
    hint: "focused editor",
    bio: "My goal is to contribute with my skills and knowledge to create high-quality content and meet the needs of the audience, but it sounds cliché. What is true, however, is that we create content that makes people dream and inspires others, and because I keep dreaming, I am here.",
    headerImage: "https://placehold.co/1920x1080.png",
    headerVideoId: "800012862",
    headerHint: "sound mixing board"
  },
  {
    name: "CARLOS LEON",
    slug: "carlos-leon",
    role: "Editor",
    imageUrl: "https://placehold.co/200x200.png",
    hint: "man at computer",
    bio: "I consider myself a highly creative person, with a great ability to imagine and carry out innovative ideas. I firmly believe that imagination is a key tool in the field of post-production, as it allows us to create special effects, edit images and sounds, and generate fresh and original ideas for the projects we work on. From the moment I started working in this industry, I discovered the importance of letting my imagination run wild and being able to visualize the final result even before starting to work on it.",
    headerImage: "https://placehold.co/1920x1080.png",
    headerVideoId: "803618978",
    headerHint: "color grading suite"
  },
  {
    name: "DANIEL VARGAS",
    slug: "daniel-vargas",
    role: "Editor",
    imageUrl: "https://placehold.co/200x200.png",
    hint: "creative professional",
    bio: "I have always been passionate about storytelling in all its forms, but I specialize in its visual variant. I believe that the image, both in motion and still, is the most versatile and influential medium of expression in a time when attention and recall have become scarce and valuable resources.",
    headerImage: "https://placehold.co/1920x1080.png",
    headerVideoId: "803616178",
    headerHint: "motion graphics display"
  },
  {
    name: "ARTURO PEREZ",
    slug: "arturo-perez",
    role: "Colorist",
    imageUrl: "https://placehold.co/200x200.png",
    hint: "man in front of screens",
    bio: "As a colorist, my work is a unique blend of art and science. My goal is to create a visually stunning atmosphere in each frame to bring a story to life, through the use of color and light. My meticulous attention to every detail allows me to create a unique and cohesive color palette that transports the viewer to another world. In every project, I seek to challenge myself and surpass my creative abilities to produce something that captures and holds the audience’s attention, generating an emotional experience that makes them feel part of the story.",
    headerImage: "https://placehold.co/1920x1080.png",
    headerVideoId: "816724345",
    headerHint: "color grading vectorscopes"
  },
  {
    name: "CRISTIAN PICO",
    slug: "cristian-pico",
    role: "VFX Artist",
    imageUrl: "https://placehold.co/200x200.png",
    hint: "man working on vfx",
    bio: "As a VFX composer, I feel a burning passion for my work. I love diving into the creative process, from conceptualization to final execution. Each project is an opportunity to challenge myself and explore new techniques and approaches. It excites me to see how my skills and knowledge can transform a simple image into a visually stunning masterpiece. The satisfaction I feel when I see my work on the big screen is incomparable and inspires me to keep improving and pushing my limits on every project.",
    headerImage: "https://placehold.co/1920x1080.png",
    headerVideoId: "816721195",
    headerHint: "visual effects breakdown"
  },
  {
    name: "JUAN CONTRERAS",
    slug: "juan-contreras",
    role: "VFX Artist",
    imageUrl: "https://placehold.co/200x200.png",
    hint: "man with graphics tablet",
    bio: "I am passionate about breaking the limits of what is considered possible or realistic. That’s why I found in visual effects the perfect tool to capture those ideas that seem impossible to materialize. VFX gives me the freedom to experiment with new techniques and tools to create worlds and situations that seem unreal, taking the exploration between the real and the imaginary to another level.",
    headerImage: "https://placehold.co/1920x1080.png",
    headerVideoId: "816723625",
    headerHint: "3d modeling software"
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
    <>
      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden bg-black">
        {(member as any).headerVideoId ? (
          <iframe
            src={`https://player.vimeo.com/video/${(member as any).headerVideoId}?background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0`}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            className="absolute w-full h-full object-cover"
            title={`${member.name} header video`}
          ></iframe>
        ) : (
          <Image
            src={member.headerImage}
            alt={`Header image for ${member.name}`}
            fill
            className="absolute inset-0 object-cover"
            data-ai-hint={member.headerHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </section>
      
      <div className="pb-24 pt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative -mt-24 md:-mt-32">
              <Card className="overflow-hidden shadow-2xl">
                <CardContent className="p-6 md:p-12">
                  <div className="text-center">
                    <CardTitle as="h1" className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-primary">
                      {member.name}
                    </CardTitle>
                    <CardDescription as="p" className="mt-2 text-xl md:text-2xl font-semibold text-accent">
                      {member.role}
                    </CardDescription>
                  </div>
                  <div className="prose prose-lg max-w-4xl mx-auto mt-8 text-muted-foreground">
                    <p>{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <Button asChild variant="outline" className="shadow-lg bg-background/80 backdrop-blur-sm">
              <Link href="/services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                go back to services
              </Link>
            </Button>
          </div>
        </div>
    </>
  );
}
