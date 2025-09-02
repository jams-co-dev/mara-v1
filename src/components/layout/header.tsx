
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.784.297-1.459.717-2.126 1.384S.927 3.356.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.297.784.717 1.459 1.384 2.126.667.666 1.342 1.087 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.784-.297 1.459-.718 2.126-1.384.666-.667 1.087-1.342 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.297-.784-.718-1.459-1.384-2.126C21.314.926 20.641.505 19.857.21c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.42-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.859 0-3.211.016-3.586.061-4.859.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.38.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l-.045.03zm0 5.438c-3.552 0-6.4 2.849-6.4 6.4s2.848 6.4 6.4 6.4 6.4-2.849 6.4-6.4-2.848-6.4-6.4-6.4zm0 10.667c-2.349 0-4.267-1.918-4.267-4.267s1.918-4.267 4.267-4.267 4.267 1.918 4.267 4.267-1.918 4.267-4.267 4.267zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
);

const VimeoIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <rect width="24" height="24" rx="4"/>
      <path transform="translate(1.5, 1) scale(0.9)" d="M9.8,16.1c-1.4,1.8-3.1,2.7-5.1,2.7C2.2,18.8,1,17.4,1,15.2c0-2.4,1.8-5.3,5.1-8.7c3.1-3.2,5-4.8,5.8-4.8 c0.6,0,1,0.5,1,1.4c0,1-0.7,2.5-2,4.6c-1.4,2.1-2.1,3.2-2.1,3.2s1.4-0.2,3.4-0.5c3.5-0.6,4.8,0.7,4.1,3.8 C15.7,17.7,13.4,18.8,12,18.8c-0.8,0-1.5-0.2-2.2-0.6V16.1z" fill="#fff"/>
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
        <path transform="translate(1.5, 3) scale(0.85)" d="M14.33 10.36h3.96v1.73h-3.96v-1.73zM9.91 14.85h2.9c.14-1.8 1.1-2.81 2.89-2.81.9 0 1.45.38 1.45.98 0 .73-.78 1-1.28 1.18-.9.34-1.91.6-1.91 1.88h3.91v.96c0 2.26-1.63 3.32-3.8 3.32-2.3 0-3.96-1.28-3.96-3.83 0-1.75.98-2.65 2.76-3.14l1.9-.53zm.18-3.34h3.58V8.9H10.1v2.61zm-4.57 0h3.58V8.9H5.52v2.61z" fill="#fff"/>
        <path transform="translate(1.5, 3) scale(0.85)" d="M12.8 10.05h-1.3V8.8h1.3c.6 0 .98-.3.98-.82 0-.54-.38-.82-.98-.82H8.38v4.66h4.58c.6 0 .98-.28.98-.82 0-.54-.38-.82-.98-.82zM17.48 7.15c0-.62-.48-1-1.25-1H14v2.03h2.22c.78 0 1.26-.38 1.26-1.03z" fill="#fff"/>
    </svg>
);


const navLinks = [
  { href: "/our-work", label: "OUR WORK" },
  { href: "/services", label: "SERVICES" },
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
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

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
             <div className="hidden md:flex items-center space-x-2">
                {socialLinks.map((social) => (
                   <a 
                    key={social.href} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
             </div>
             <ThemeSwitcher />
            <div className="md:hidden">
              <Button onClick={toggleMobileMenu} variant="ghost" size="icon" aria-label="Toggle menu">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed top-20 left-0 right-0 z-40 bg-background shadow-md md:hidden transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "transform translate-y-0" : "transform -translate-y-[150%]"
        )}
      >
        <nav className="flex flex-col items-center space-y-4 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary w-full text-center py-2",
                pathname === link.href ? "text-primary bg-accent/50 rounded-md" : "text-foreground"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center space-x-4 pt-4">
            {socialLinks.map((social) => (
                <a 
                  key={social.href} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-8 w-8" />
                </a>
              ))}
          </div>
        </nav>
      </div>
    </>
  );
}
