
import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import localFont from 'next/font/local';

const stegpro = localFont({
  src: [
    {
      path: '../fonts/StegPro-Hairline.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/StegPro-HairlineItalic.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../fonts/StegPro-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/StegPro-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../fonts/StegPro-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/StegPro-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/StegPro-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/StegPro-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../fonts/StegPro-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/StegPro-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://marapost.co';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Mara Post | Limitless Creativity',
    template: '%s | Mara Post',
  },
  description: 'Mara Post: Alchemists of atmospheres, exploring and creating new ways of telling stories. We are that magical essence that transforms reality as far as imagination can take you.',
  openGraph: {
    title: 'Mara Post | Limitless Creativity',
    description: 'Creative post-production studio specializing in editing, color grading, and VFX.',
    url: SITE_URL,
    siteName: 'Mara Post',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mara Post Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mara Post | Limitless Creativity',
    description: 'Creative post-production studio specializing in editing, color grading, and VFX.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://player.vimeo.com" />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        stegpro.variable
      )}>
        <ThemeProvider
            attribute="class"
            defaultTheme="mara"
            enableSystem={false}
            disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
