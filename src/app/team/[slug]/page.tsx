
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
    name: "MATEO",
    slug: "mateo",
    role: "Filmmaker & Editor",
    imageUrl: "https://placehold.co/200x200.png",
    hint: "professional camera operator",
    bio: "Filmmaker passionate about exploring new narratives and crafting visual aesthetics that connect with and impact audiences. Postproduction is the ideal space to shape each story—from editing to designing rhythm and atmosphere—seeking to ensure that every visual decision enhances the emotion and intention behind the image. The motivation lies in transforming raw material into unique audiovisual experiences that leave a lasting impression.",
    headerImage: "https://placehold.co/1920x1080.png",
    headerHint: "film set with camera",
    headerVideoId: "1071175157"
  },
  {
    name: "JOEL",
    slug: "joel",
    role: "Editor",
    imageUrl: "https://placehold.co/200x200.png",
    hint: "man",
    bio: "Editing gives pulse to the images. In music videos, rhythm, tempo, and energy find a space to expand visually. Every cut, every transition, and every pause builds a dialogue between image and sound. The narrative not only follows the song but elevates it, creating inevitable moments where the music seems to dictate the movement of each image. Color is a language of sensations. Every frame breathes and conveys an emotional state beyond what is visible. Contrast, light, and atmosphere act as a bridge between what is seen and what is felt. The aim is to create visual worlds that immerse the viewer, where color not only accompanies the story but transforms it. ",
    headerImage: "https://placehold.co/1920x1080.png",
    headerVideoId: "947152373",
    headerHint: "video production set"
  },
  {
    name: "HAROLD",
    slug: "harold",
    role: "Editor",
    imageUrl: "https://placehold.co/200x200.png",
    hint: "man",
    bio: "As a graphic designer focused on illustration, my work is born from a love of color, shape, and movement. My process is deeply influenced by urban art, its energy and authenticity, which drives me to explore new ways of visual communication. I've taken graphics to the next level, integrating animation as a natural extension of design, creating pieces that are not only seen, but also felt. My goal is to bring ideas to life, build visual universes that connect emotion and aesthetics, and generate a new form of visual magic through movement and graphic expression.",
    headerImage: "https://placehold.co/1920x1080.png",
    headerVideoId: "947163605",
    headerHint: "marketing data charts"
  },
   {
    name: "DIEGO",
    slug: "diego",
    role: "Colorist",
    imageUrl: "https://placehold.co/200x200.png",
    hint: "man working on color grading",
    bio: "Colorista con formación en Cine y Televisión con énfasis en Fotografía Cinematográfica. Con más de dos años de experiencia en la industria publicitaria, se dedica a la corrección y creación de color en piezas audiovisuales, trabajando de la mano con directores de fotografía y equipos creativos para lograr resultados consistentes, atractivos y fieles a la visión de cada proyecto",
    headerImage: "https://placehold.co/1920x1080.png",
    headerVideoId: "1125340167",
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
    bio: "Professional in Film and Television with experience in coordinating, planning, and executing activities for audiovisual content production. Skilled in product photography, modeling, and commercial photography. Capable of ensuring quality standards in audio and video editing, supervising audiovisual production and filming, developing storyboards and scripts, and directing processes for video creation. Known for innovation, results-oriented mindset, leadership, organization, and planning skills.",
    headerImage: "https://placehold.co/1920x1080.png",
    headerVideoId: "950075762",
    headerHint: "color grading suite"
  },
  {
    name: "DANIEL VARGAS",
    slug: "daniel-vargas",
    role: "Editor",
    imageUrl: "https://placehold.co/200x200.png",
    hint: "creative professional",
    bio: "As video editor I have worked in many advertising projects for broadcasting. With each commercial I have developed and tuned some kind of sensibility to build short stories with few cuts. I think that image is an excellent medium to reach emotions in others and to deliver ideas, ways to change people’s perception about the world. Each idea that comes to me has its own conditions, limitations and targets. But always the ultimate goal is to give it a impactful narration and comprehensive structure. After 9 years of experience in the postproduction audiovisual industry I believe that the key is a solid and thorough comprehension of the idea that gave birth to the campaign. Nevertheless I know that a talented team is also a excellent starting point to achieve an effective and artful moving image.",
    headerImage: "https://placehold.co/1920x1080.png",
    headerVideoId: "107110557",
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
    headerVideoId: "1120884927",
    headerHint: "visual effects breakdown"
  },
  {
    name: "JUAN CONTRERAS",
    slug: "juan-contreras",
    role: "VFX Artist",
    imageUrl: "https://placehold.co/200x200.png",
    hint: "man with graphics tablet",
    bio: "I’m passionate about challenging the limits of what’s possible. For me, visual effects are more than a craft — they’re a way to turn imagination into reality. Through VFX, I transform concepts that seem impossible into vivid, cinematic experiences that blur the line between the real and the surreal. Constantly exploring new techniques and technologies, I aim to create visuals that not only look extraordinary but also evoke emotion and meaning. My work is driven by curiosity, precision, and the belief that every frame can expand the boundaries of what we believe is real.",
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
                    <CardTitle as="h1" className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-primary">
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
                go back to creative talent
              </Link>
            </Button>
          </div>
        </div>
    </>
  );
}
