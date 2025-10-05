
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.197 0-3.57.012-4.815.07-2.738.124-3.999 1.39-4.122 4.122-.058 1.245-.069 1.615-.069 4.815s.011 3.57.069 4.815c.123 2.731 1.384 3.999 4.122 4.122 1.245.058 1.618.069 4.815.069s3.57-.011 4.815-.069c2.732-.123 3.999-1.391 4.122-4.122.058-1.245.069-1.615.069-4.815s-.011-3.57-.069-4.815c-.123-2.732-1.39-3.999-4.122-4.122C15.57 3.615 15.197 3.604 12 3.604zm0 4.238c-2.404 0-4.35 1.946-4.35 4.35s1.946 4.35 4.35 4.35 4.35-1.946 4.35-4.35-1.946-4.35-4.35-4.35zm0 7.25c-1.598 0-2.9-1.302-2.9-2.9s1.302-2.9 2.9-2.9 2.9 1.302 2.9 2.9-1.302 2.9-2.9 2.9zm5.338-8.204a1.08 1.08 0 1 0 0-2.16 1.08 1.08 0 0 0 0 2.16z" />
    </svg>
);

const VimeoIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9.8,16.1c-1.4,1.8-3.1,2.7-5.1,2.7C2.2,18.8,1,17.4,1,15.2c0-2.4,1.8-5.3,5.1-8.7c3.1-3.2,5-4.8,5.8-4.8 c0.6,0,1,0.5,1,1.4c0,1-0.7,2.5-2,4.6c-1.4,2.1-2.1,3.2-2.1,3.2s1.4-0.2,3.4-0.5c3.5-0.6,4.8,0.7,4.1,3.8 C15.7,17.7,13.4,18.8,12,18.8c-0.8,0-1.5-0.2-2.2-0.6V16.1z"/>
    </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
);

const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M14.33 10.36h3.96v1.73h-3.96v-1.73zM9.91 14.85h2.9c.14-1.8 1.1-2.81 2.89-2.81.9 0 1.45.38 1.45.98 0 .73-.78 1-1.28 1.18-.9.34-1.91.6-1.91 1.88h3.91v.96c0 2.26-1.63 3.32-3.8 3.32-2.3 0-3.96-1.28-3.96-3.83 0-1.75.98-2.65 2.76-3.14l1.9-.53zm.18-3.34h3.58V8.9H10.1v2.61zm-4.57 0h3.58V8.9H5.52v2.61zM0 0h24v24H0z" fill="none"/>
        <path d="M12.8 10.05h-1.3V8.8h1.3c.6 0 .98-.3.98-.82 0-.54-.38-.82-.98-.82H8.38v4.66h4.58c.6 0 .98-.28.98-.82 0-.54-.38-.82-.98-.82zM17.48 7.15c0-.62-.48-1-1.25-1H14v2.03h2.22c.78 0 1.26-.38 1.26-1.03z"/>
        <path d="M14.33 10.36h3.96v1.73h-3.96zM9.91 14.85h2.9c.14-1.8 1.1-2.81 2.89-2.81.9 0 1.45.38 1.45.98 0 .73-.78 1-1.28 1.18-.9.34-1.91.6-1.91 1.88h3.91v.96c0 2.26-1.63 3.32-3.8 3.32-2.3 0-3.96-1.28-3.96-3.83 0-1.75.98-2.65 2.76-3.14l1.9-.53z"/>
    </svg>
);

const navLinks = [
  { href: "/services", label: "CREATIVE TALENT" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

const socialLinks = [
    { name: "Instagram", href: "https://instagram.com/marapost.co", icon: InstagramIcon },
    { name: "Vimeo", href: "https://vimeo.com/marapost", icon: VimeoIcon },
    { name: "LinkedIn", href: "https://linkedin.com/company/mara-post", icon: LinkedInIcon },
    { name: "Behance", href: "https://www.behance.net/marapost", icon: BehanceIcon },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-20">
        <div className="container mx-auto flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
          {isMounted && (
            <>
              <div className="flex items-center bg-black/50 rounded-full px-3 py-1">
                <Link href="/" className="block">
                  <Image
                    src="/images/logo.png"
                    alt="MARA Logo"
                    width={120}
                    height={27}
                    priority
                    className="dark:invert"
                  />
                </Link>
              </div>

              <nav className="hidden md:flex items-center space-x-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-accent bg-black/50 rounded-full px-3 py-1",
                      pathname === link.href ? "text-accent" : "text-primary-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center space-x-2">
                <div className="hidden md:flex items-center space-x-2 bg-black/50 rounded-full px-2 py-1">
                  {socialLinks.map((social) => (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors p-1"
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
                <div className="md:hidden">
                  <Button onClick={toggleMobileMenu} variant="ghost" size="icon" aria-label="Toggle menu" className="bg-black/50 text-primary-foreground hover:bg-black/70 hover:text-white">
                    {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </header>

      {isMounted && isMobileMenuOpen && (
        <div
          className={cn(
            "fixed inset-0 z-40 bg-black/90 backdrop-blur-sm md:hidden"
          )}
          onClick={toggleMobileMenu}
        >
          <nav
            className="flex flex-col items-center justify-center h-full space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-2xl font-medium transition-colors hover:text-accent w-full text-center py-2 text-primary-foreground",
                  pathname === link.href ? "text-accent" : "text-primary-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-8 w-8" />
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
