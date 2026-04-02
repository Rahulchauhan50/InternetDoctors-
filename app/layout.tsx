import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: {
    template: '%s | Internet Doctors',
    default: 'Website Design, Web Development, Mobile Apps, Digital Marketing and ERP Solutions | Internet Doctors',
  },
  description: 'Internet Doctors provides website design, web development, mobile app development, digital marketing, ERP solutions and lead generation services for growing businesses.',
  openGraph: {
    type: 'website',
    siteName: 'Internet Doctors',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 font-body selection:bg-secondary/30 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
