import Link from 'next/link';
import type { ReactNode } from 'react';
import ImagePlaceholder from '@/components/features/home/ImagePlaceholder';
import SectionHeading from '@/components/features/home/SectionHeading';
import { ArrowRightIcon } from '@/components/features/home/icons';
import { services } from '@/content/services';
import { siteContent } from '@/content/siteContent';

const tones = ['blue', 'lilac', 'coral', 'blue'] as const;

export default function ServicesSection(): ReactNode {
  const { eyebrow, heading, intro, exploreLabel, viewAllLabel, viewAllHref } = siteContent.services;

  if (services.length === 0) return null;

  return (
    <section id="services" className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={eyebrow} heading={heading} intro={intro} />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <li key={service.slug} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-page transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-blue/10">
              <ImagePlaceholder label={service.title} tone={tones[index % tones.length]} className="h-40" />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 flex-1 text-muted">{service.summary}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-link hover:underline"
                >
                  {exploreLabel}
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <Link
            href={viewAllHref}
            className="inline-block rounded-md border border-line bg-page px-6 py-3 font-semibold text-ink hover:border-brand-blue"
          >
            {viewAllLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
