"use client";

import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
  

const socialLinks = [
  { href: "https://instagram.com", icon: Instagram },
  { href: "https://facebook.com", icon: Facebook },
  { href: "https://x.com", icon: TwitterIcon },
];

export function Footer() {
  return (
    <footer className="bg-card border-t mt-16">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-headline font-bold text-primary">
              Visionary Digital
            </Link>
            <p className="text-sm text-muted-foreground mt-1">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          </div>
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a 
                key={social.href} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.href}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
