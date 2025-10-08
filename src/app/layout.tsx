
import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import localFont from 'next/font/local';

// Font definitions moved here to resolve path issues
const ptSans = localFont({
  src: [
    {
      path: '../fonts/PTSans-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/PTSans-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/PTSans-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/PTSans-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-pt-sans',
  display: 'swap',
});

const belleza = localFont({
  src: [
    {
      path: '../fonts/Belleza-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-belleza',
  display: 'swap',
});


export const metadata: Metadata = {
  title: 'Mara Post',
  description: 'Mara Post LIMITLESS CREATIVITY',
  icons: null,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="data:;base64,=" />
        <link rel="preconnect" href="https://player.vimeo.com" />
      </head>
      <body className={cn(
        "font-body antialiased",
        ptSans.variable,
        belleza.variable
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
