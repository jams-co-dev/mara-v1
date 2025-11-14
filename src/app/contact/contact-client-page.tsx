
"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageWrapper } from "@/components/page-wrapper";
import { Separator } from "@/components/ui/separator";

const contactPeople = [
    {
        name: "Javier Pinilla",
        role: "CEO / Post-production supervisor",
        phone: "+57 318 2648834",
        email: "javier@marapost.co"
    },
    {
        name: "Cristina Duque",
        role: "Manager",
        phone: "+57 319 3323839",
        email: "cristina@marapost.co"
    }
]

export default function ContactClientPage() {

  return (
    <PageWrapper>
      <main className="flex flex-col min-h-[calc(100vh_-_5rem)]">
        <div className="flex-grow flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
            <section className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-accent">
                Get in Touch
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Have a project in mind? We'd love to hear from you.
              </p>
            </section>

            <div className="max-w-4xl mx-auto">
                <Card>
                    <CardContent className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {contactPeople.map((person) => (
                                <div key={person.name} className="flex flex-col items-center text-center md:items-start md:text-left">
                                    <h2 className="text-2xl font-sans text-accent">{person.name}</h2>
                                    <p className="text-muted-foreground mb-4">{person.role}</p>
                                    <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                                        <Phone className="w-4 h-4" />
                                        <span>{person.phone}</span>
                                    </a>
                                    <a href={`mailto:${person.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                                        <Mail className="w-4 h-4" />
                                        <span>{person.email}</span>
                                    </a>
                                </div>
                            ))}
                        </div>
                        <Separator className="my-8" />
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-2 text-muted-foreground">
                               <MapPin className="w-5 h-5" />
                               <p className="text-lg">Calle 89 # 20 - 45 Bogotá, Colombia.</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}
