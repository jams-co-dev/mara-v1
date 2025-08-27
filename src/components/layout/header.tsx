
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Instagram, Facebook } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";

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


const navLinks = [
  { href: "/our-work", label: "OUR WORK" },
  { href: "/services", label: "SERVICES" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
  { name: "Facebook", href: "https://facebook.com", icon: Facebook },
  { name: "X", href: "https://x.com", icon: TwitterIcon },
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
             <div className="hidden md:flex items-center space-x-1">
                {socialLinks.map((social) => (
                  <Button key={social.href} variant="ghost" size="icon" asChild>
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
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
                <Button key={social.href} variant="ghost" size="icon" asChild>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                    <social.icon className="h-6 w-6" />
                  </a>
                </Button>
              ))}
          </div>
        </nav>
      </div>
    </>
  );
}
