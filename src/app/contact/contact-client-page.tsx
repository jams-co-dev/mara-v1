
"use client";

import { Mail, Phone, MapPin, User } from "lucide-react";
import { PageWrapper } from "@/components/page-wrapper";

const contactPeople = [
    {
        name: "Cristina Duque",
        role: "post-production coordinator",
        phone: "+57 319 3323839",
        email: "cristina@marapost.co"
    },
    {
        name: "Javier Pinilla",
        role: "post-production director",
        phone: "+57 318 2648834",
        email: "javier@marapost.co"
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {contactPeople.map((person) => (
                        <div key={person.name} className="flex flex-col items-center text-center font-sans">
                            <div className="flex items-center gap-3 mb-2">
                                <User className="w-6 h-6 text-[#55ffb3] fill-[#55ffb3]" />
                                <h2 className="text-2xl font-sans font-bold text-accent">{person.name}</h2>
                            </div>
                            <p className="text-muted-foreground mb-4">{person.role}</p>
                            <div className="flex flex-col items-center gap-2">
                                <a href={`mailto:${person.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                                    <Mail className="w-4 h-4 fill-current" />
                                    <span>{person.email}</span>
                                </a>
                                <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                                    <Phone className="w-4 h-4 fill-current" />
                                    <span>{person.phone}</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#55ffb3]/30 to-transparent my-12" />
                <div className="text-center">
                    <div className="flex items-center justify-center gap-2">
                       <MapPin className="w-5 h-5 text-background fill-[#55ffb3]" />
                        <p className="text-lg text-muted-foreground">Calle 89 # 20 - 45 Bogotá, Colombia.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}
