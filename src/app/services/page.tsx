import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Video, Megaphone, Camera, PenTool, BarChart3, Users } from 'lucide-react';

const services = [
  {
    icon: Video,
    title: "Video Production",
    description: "From concept to final cut, we produce high-quality commercials, corporate videos, and branded content."
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategic campaigns across social media, search engines, and more to grow your audience and drive sales."
  },
  {
    icon: Camera,
    title: "Commercial Photography",
    description: "Stunning product, lifestyle, and corporate photography that captures the essence of your brand."
  },
  {
    icon: PenTool,
    title: "Branding & Identity",
    description: "We craft memorable brand identities, including logos, style guides, and messaging that resonates."
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Data-driven insights to measure campaign performance and optimize for success."
  },
  {
    icon: Users,
    title: "Social Media Management",
    description: "Engaging content creation and community management to build a loyal following."
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-primary">
          Our Services
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We offer a comprehensive suite of services to elevate your brand's digital presence.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="text-center transition-all duration-300 hover:shadow-xl hover:border-primary">
            <CardHeader className="items-center p-8">
              <div className="p-4 bg-accent/20 rounded-full mb-4">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
              <CardDescription className="mt-2 text-base">{service.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
