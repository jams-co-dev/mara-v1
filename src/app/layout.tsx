import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PageWrapper } from '@/components/page-wrapper';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Visionary Digital',
  description: 'Digital Advertising and Marketing Agency',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Belleza&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main className="pt-20">
          <PageWrapper>
            {children}
          </PageWrapper>
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
