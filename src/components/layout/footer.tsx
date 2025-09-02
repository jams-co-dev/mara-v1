
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.784.297-1.459.717-2.126 1.384S.927 3.356.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.297.784.717 1.459 1.384 2.126.667.666 1.342 1.087 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.784-.297 1.459-.718 2.126-1.384.666-.667 1.087-1.342 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.297-.784-.718-1.459-1.384-2.126C21.314.926 20.641.505 19.857.21c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.42-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.859 0-3.211.016-3.586.061-4.859.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.38.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l-.045.03zm0 5.438c-3.552 0-6.4 2.849-6.4 6.4s2.848 6.4 6.4 6.4 6.4-2.849 6.4-6.4-2.848-6.4-6.4-6.4zm0 10.667c-2.349 0-4.267-1.918-4.267-4.267s1.918-4.267 4.267-4.267 4.267 1.918 4.267 4.267-1.918 4.267-4.267 4.267zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
);

const VimeoIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M0 0h24v24H0z" fill="none"/>
      <rect width="24" height="24" rx="4"/>
      <path d="M9.8,16.1c-1.4,1.8-3.1,2.7-5.1,2.7C2.2,18.8,1,17.4,1,15.2c0-2.4,1.8-5.3,5.1-8.7c3.1-3.2,5-4.8,5.8-4.8 c0.6,0,1,0.5,1,1.4c0,1-0.7,2.5-2,4.6c-1.4,2.1-2.1,3.2-2.1,3.2s1.4-0.2,3.4-0.5c3.5-0.6,4.8,0.7,4.1,3.8 C15.7,17.7,13.4,18.8,12,18.8c-0.8,0-1.5-0.2-2.2-0.6V16.1z" fill="#fff"/>
    </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <rect width="24" height="24" rx="4"/>
        <path d="M6.94 9.06h3.27v9.88H6.94V9.06zm1.64-4.04c1.1 0 1.8.72 1.8 1.63 0 .9-.7 1.63-1.8 1.63s-1.8-.72-1.8-1.63c0-.9.7-1.63 1.8-1.63zM13.23 9.06h3.14v1.44h.04c.44-.83 1.5-1.7 3.1-1.7 3.32 0 3.93 2.18 3.93 5.02v5.8h-3.27v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.69v5.19h-3.27V9.06z" fill="#fff"/>
    </svg>
);

const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <rect width="24" height="24" rx="4"/>
        <path d="M14.33 10.36h3.96v1.73h-3.96v-1.73zM9.91 14.85h2.9c.14-1.8 1.1-2.81 2.89-2.81.9 0 1.45.38 1.45.98 0 .73-.78 1-1.28 1.18-.9.34-1.91.6-1.91 1.88h3.91v.96c0 2.26-1.63 3.32-3.8 3.32-2.3 0-3.96-1.28-3.96-3.83 0-1.75.98-2.65 2.76-3.14l1.9-.53zm.18-3.34h3.58V8.9H10.1v2.61zm-4.57 0h3.58V8.9H5.52v2.61z" fill="#fff"/>
        <path d="M12.8 10.05h-1.3V8.8h1.3c.6 0 .98-.3.98-.82 0-.54-.38-.82-.98-.82H8.38v4.66h4.58c.6 0 .98-.28.98-.82 0-.54-.38-.82-.98-.82zM17.48 7.15c0-.62-.48-1-1.25-1H14v2.03h2.22c.78 0 1.26-.38 1.26-1.03z" fill="#fff"/>
    </svg>
);

const socialLinks = [
    { href: "https://instagram.com/marapost.co", icon: InstagramIcon, name: "Instagram" },
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
                className="text-primary hover:text-accent transition-colors"
                aria-label={social.name}
              >
                <social.icon className="h-7 w-7" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
