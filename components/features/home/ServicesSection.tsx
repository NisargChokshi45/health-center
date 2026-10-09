import type { ReactNode } from 'react';
import { siteContent } from '@/content/siteContent';

const accentClasses = ['border-t-brand-blue', 'border-t-brand-lilac', 'border-t-brand-coral'] as const;

export default function ServicesSection(): ReactNode {
  const { heading, items } = siteContent.services;

  if (items.length === 0) return null;

  return (
    <section id="services" className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {heading && <h2 className="text-3xl font-semibold">{heading}</h2>}
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((service, index) => (
            <li
              key={service.title}
              className={`rounded-lg border border-line border-t-4 bg-page p-6 ${accentClasses[index % accentClasses.length]}`}
            >
              <a href={service.href} className="text-xl font-semibold hover:text-brand-blue">
                {service.title}
              </a>
              <p className="mt-3 text-muted">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
