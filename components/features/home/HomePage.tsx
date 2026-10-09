import type { ReactNode } from 'react';
import AppointmentProvider from '@/components/features/appointment/AppointmentProvider';
import ContactSection from '@/components/features/home/ContactSection';
import CtaSection from '@/components/features/home/CtaSection';
import FeatureHighlight from '@/components/features/home/FeatureHighlight';
import Footer from '@/components/features/home/Footer';
import Header from '@/components/features/home/Header';
import HeroSection from '@/components/features/home/HeroSection';
import ServicesSection from '@/components/features/home/ServicesSection';
import StatsBar from '@/components/features/home/StatsBar';
import TeamSection from '@/components/features/home/TeamSection';
import TestimonialsSection from '@/components/features/home/TestimonialsSection';

export default function HomePage(): ReactNode {
  return (
    <AppointmentProvider>
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <FeatureHighlight />
        <ServicesSection />
        <TeamSection />
        <TestimonialsSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </AppointmentProvider>
  );
}
