import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import AppointmentProvider from '@/components/features/appointment/AppointmentProvider';
import BookAppointmentButton from '@/components/features/appointment/BookAppointmentButton';
import Footer from '@/components/features/home/Footer';
import Header from '@/components/features/home/Header';
import ImagePlaceholder from '@/components/features/home/ImagePlaceholder';
import { CheckIcon } from '@/components/features/home/icons';
import { getServiceBySlug, services } from '@/content/services';

interface ServiceRouteProps {
  params: Promise<{ slug: string }>;
}

export function generateServiceParams(): Array<{ slug: string }> {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateServiceMetadata({ params }: ServiceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return { title: 'Service not found | Ultimate Health' };
  return { title: `${service.title} | Ultimate Health`, description: service.summary };
}

export default async function ServiceDetailPage({ params }: ServiceRouteProps): Promise<ReactNode> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <AppointmentProvider>
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <Link href="/#services" className="text-sm font-semibold text-link hover:underline">
          ← All services
        </Link>

        <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">{service.title}</h1>
        <p className="mt-4 text-lg text-muted">{service.summary}</p>

        <ImagePlaceholder
          label={service.title}
          src={service.image}
          tone="blue"
          className="mt-10 aspect-[16/9] rounded-2xl object-cover"
        />

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="mt-4 leading-relaxed text-muted">{service.overview}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">How we help</h2>
          <ul className="mt-4 grid gap-3">
            {service.approach.map((step) => (
              <li key={step} className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-link" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12">
          <BookAppointmentButton
            label="Book Appointment"
            className="rounded-md bg-brand-coral px-6 py-3 font-semibold text-on-coral hover:opacity-90"
          />
        </div>
      </main>
      <Footer />
    </AppointmentProvider>
  );
}
