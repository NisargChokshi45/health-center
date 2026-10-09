import type { ReactNode } from 'react';
import SectionHeading from '@/components/features/home/SectionHeading';
import { QuoteIcon } from '@/components/features/home/icons';
import { siteContent } from '@/content/siteContent';

function initialsOf(name: string): string {
  return name
    .split(' ')
    .map((part) => part.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function TestimonialsSection(): ReactNode {
  const { eyebrow, heading, intro, items } = siteContent.testimonials;

  if (items.length === 0) return null;

  return (
    <section id="stories" className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={eyebrow} heading={heading} intro={intro} />

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <li key={item.name} className="flex flex-col rounded-2xl border border-line bg-page p-8 transition duration-300 hover:-translate-y-1">
              <QuoteIcon className="h-8 w-8 text-brand-coral" />
              <blockquote className="mt-4 flex-1 text-muted">
                <p>{item.quote}</p>
              </blockquote>
              <div className="mt-6 flex items-center gap-4 border-t border-line pt-6">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-12 w-12 shrink-0 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-link">{item.condition}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
