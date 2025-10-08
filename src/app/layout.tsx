
import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import { ptSans, belleza } from '@/lib/fonts';

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
