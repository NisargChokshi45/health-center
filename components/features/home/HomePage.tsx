import type { ReactNode } from 'react';
import Header from '@/components/features/home/Header';
import HeroSection from '@/components/features/home/HeroSection';
import ServicesSection from '@/components/features/home/ServicesSection';
import ContactSection from '@/components/features/home/ContactSection';
import Footer from '@/components/features/home/Footer';

export default function HomePage(): ReactNode {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
