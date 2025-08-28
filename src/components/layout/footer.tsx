
"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { useState, useEffect } from "react";

const VimeoIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.5 6.2c-.3-1.4-1-2.6-2-3.6-1-1-2.3-1.6-3.8-1.7-3.3-.2-8.2.1-12 .7C2 2.6.6 4.9.5 5.8c-.1.9.4 3.7 1.5 8.2 1.1 4.5 1.7 6.8 1.9 6.9.2.1 1.7-1.7 3.3-3.9 1.6-2.2 2.9-4 3-4.1.1-.1-1.3 2.2-3 4.8-.8 1.3-1.5 2.5-1.5 2.7 0 .2 2.1-2.4 4.7-5.9 2.6-3.5 4.6-6.4 4.6-6.6 0-.2-1.9 1.4-4.2 3.6-2.3 2.2-4.1 4-4.1 4s.4-1.7 1-3.6c.6-1.9 1.1-3.5 1.1-3.6 0-.1-1.3 1.9-3 4.3-1.7 2.4-3.1 4.4-3.1 4.5 0 .1.3-1.2.8-2.7s.9-2.8 1-2.9c.1-.1.9 1.5 2.1 3.7 1.2 2.2 2.2 4 2.2 4.1.1.1 2.3-2.4 5-5.3 2.7-2.9 4.9-5.2 4.9-5.3 0-.1-1.1.7-2.4 1.5s-2.4 1.5-2.4 1.5.8-2.6 1.8-5.3c1-2.7 1.5-4.1 1.5-4.1s-.2 0-.5.1c-.3.1-.6.2-.6.2.8-1.5 2-2.7 3.5-3.6.8-.5 2.2-.8 4.1-.9 1.9-.1 3.1.2 3.6.8.5.6.8 1.5.8 2.8-.1 1.3-.4 2.4-1 3.3-.6.9-1.4 1.6-2.4 2.2-1 .6-1.8.9-2.5 1-.7.1-1.2-.2-1.6-.7s-.5-1-.5-1.5c0-.6.1-1.1.4-1.5.3-.4.8-.6 1.4-.6.6 0 1.2.3 1.7.9.5.6.8 1.4.8 2.5 0 .8-.2 1.5-.5 2.1-.3.6-.8 1.1-1.4 1.5-.6.4-1.3.6-2.1.6-.8 0-1.5-.2-2.1-.5-.6-.3-1.1-.8-1.5-1.4-.4-.6-.6-1.3-.6-2.1 0-1.1.4-2 1.2-2.7.8-.7 1.8-1.1 3-1.1 1.2 0 2.2.4 3 1.1s1.2 1.7 1.2 2.9c0 .7-.1 1.3-.4 1.8-.3.5-.7.9-1.2 1.2s-1 .5-1.6.5c-.6 0-1.1-.1-1.5-.4-.4-.3-.7-.7-.8-1.1s-.2-.9-.2-1.3c0-1.1.5-1.9 1.4-2.5.5-.3 1.1-.5 1.7-.5.6 0 1.1.2 1.5.5.4.3.7.7.8 1.2.1.5.2 1 .2 1.5z"/>
    </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M22 7h-7v-2h7v2zm-7 4h5.5c-1.16 2.454-3.261 4.414-5.5 5.5v-5.5zm-15 4h6.5c-.441 1.099-1.012 2.255-1.731 3h-4.769v-3zm0-1h6c.404-1 .874-2.079 1.348-3h-7.348v3zm10-3h-7v-2h7v2zm8.384-6h-14.757c.606-1.021 1.347-2.062 2.15-3h10.439c.691.939 1.309 1.961 1.83 3h.338zm-3.384 10v.011c0 2.185-1.802 3.989-3.993 3.989h-5.007v-3.065c1.946-.223 3.497-1.579 3.864-3.435h-3.864v-3h7c.022 2.723-1.698 5.428-4.228 6.551 1.144.254 2.228.163 2.228-1.551v-.5h4z"/>
    </svg>
);

const socialLinks = [
    { href: "https://instagram.com/marapost.co", icon: Instagram, name: "Instagram" },
    { href: "https://vimeo.com/marapost", icon: VimeoIcon, name: "Vimeo" },
    { href: "https://linkedin.com/company/mara-post", icon: LinkedInIcon, name: "LinkedIn" },
    { href: "https://www.behance.net/marapost", icon: BehanceIcon, name: "Behance" },
];

export function Footer() {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-card border-t-2 border-primary">
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
                className="dark:invert"
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
                aria-label={social.name}
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
