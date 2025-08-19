import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "Founder & Creative Director",
    imageUrl: "https://placehold.co/200x200.png",
    hint: "professional woman"
  },
  {
    name: "John Smith",
    role: "Lead Videographer",
    imageUrl: "https://placehold.co/200x200.png",
    hint: "man with camera"
  },
  {
    name: "Emily White",
    role: "Marketing Strategist",
    imageUrl: "https://placehold.co/200x200.png",
    hint: "woman at whiteboard"
  },
   {
    name: "Michael Brown",
    role: "Senior Editor",
    imageUrl: "https://placehold.co/200x200.png",
    hint: "man editing video"
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

      <section className="text-center">
        <h2 className="text-3xl font-headline text-primary mb-12">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Avatar className="w-32 h-32 mb-4 border-4 border-accent/50">
                <AvatarImage src={member.imageUrl} alt={member.name} data-ai-hint={member.hint} />
                <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-headline font-semibold">{member.name}</h3>
              <p className="text-primary">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
