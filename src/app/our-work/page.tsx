import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageWrapper } from "@/components/page-wrapper";

const projects = [
  {
    title: "Project Alpha",
    category: "Corporate Branding",
    description: "A complete rebranding for a major tech firm, focusing on a modern and clean aesthetic.",
    imageUrl: "https://placehold.co/600x400.png",
    hint: "office teamwork"
  },
  {
    title: "Project Beta",
    category: "Product Launch",
    description: "Dynamic video commercial for a new consumer gadget, highlighting its innovative features.",
    imageUrl: "https://placehold.co/600x400.png",
    hint: "modern smartphone"
  },
  {
    title: "Project Gamma",
    category: "Social Media Campaign",
    description: "Viral marketing campaign across multiple platforms for a lifestyle brand.",
    imageUrl: "https://placehold.co/600x400.png",
    hint: "fashion model"
  },
  {
    title: "Project Delta",
    category: "E-commerce Photography",
    description: "High-quality product shots for an online fashion retailer's new collection.",
    imageUrl: "https://placehold.co/600x400.png",
    hint: "clothing rack"
  },
  {
    title: "Project Epsilon",
    category: "Food & Beverage Ad",
    description: "A mouth-watering video ad for a new line of gourmet snacks.",
    imageUrl: "https://placehold.co/600x400.png",
    hint: "gourmet food"
  },
  {
    title: "Project Zeta",
    category: "Automotive Commercial",
    description: "A high-octane commercial showcasing the speed and luxury of a new sports car.",
    imageUrl: "https://placehold.co/600x400.png",
    hint: "sports car"
  }
];

export default function OurWorkPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-primary">
            Our Work
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We take pride in our creations. Explore a selection of our recent projects.
          </p>
        </section>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-0">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover aspect-video"
                  data-ai-hint={project.hint}
                />
              </CardContent>
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">{project.category}</Badge>
                <CardTitle as="h3" className="font-headline text-2xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
