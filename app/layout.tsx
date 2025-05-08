'use client';

import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer"; 
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import LoadingScreen from '@/components/LoadingScreen';
import BackToTopButton from "@/components/BacktoTop";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 2000); 
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <html lang="en">
      <body className="font-sans antialiased flex flex-col min-h-screen">
        {loading && <LoadingScreen />}
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer /> 
        <BackToTopButton />
      </body>
    </html>
  );
}
