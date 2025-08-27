
"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";
import { useState, useEffect } from "react";

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
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
          <div className="text-sm text-muted-foreground order-3 md:order-1 md:col-span-1">
            {currentYear && <p>&copy; {currentYear} All Rights Reserved.</p>}
          </div>

          <div className="flex justify-center order-1 md:order-2 md:col-span-1">
            <Link href="/" className="block">
               <Image 
                src="/images/logo.png"
                alt="MARA Logo"
                width={120}
                height={27}
              />
            </Link>
          </div>

          <div className="flex items-center justify-center md:justify-end space-x-4 order-2 md:order-3 md:col-span-1">
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
