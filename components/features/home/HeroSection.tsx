import type { ReactNode } from 'react';
import BookAppointmentButton from '@/components/features/appointment/BookAppointmentButton';
import ImagePlaceholder from '@/components/features/home/ImagePlaceholder';
import { siteContent } from '@/content/siteContent';

export default function HeroSection(): ReactNode {
  const { eyebrow, headline, body, primaryCta, secondaryCta } = siteContent.hero;

  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-2">
      <div>
        <p className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-link"><span className="h-1.5 w-1.5 rounded-full bg-brand-coral" aria-hidden="true" />{eyebrow}</p>
        <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">{headline}</h1>
        <p className="mt-6 max-w-xl text-lg text-muted">{body}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <BookAppointmentButton
            label={primaryCta.label}
            className="rounded-md bg-brand-coral px-6 py-3 font-semibold text-on-coral hover:opacity-90"
          />
          <a
            href={secondaryCta.href}
            className="rounded-md border border-line bg-surface px-6 py-3 font-semibold text-ink hover:border-brand-blue"
          >
            {secondaryCta.label}
          </a>
        </div>
      </div>
      <ImagePlaceholder
        label="Modern medical facility"
        src={siteContent.hero.imageSrc}
        tone="blue"
        className="aspect-[4/3] rounded-3xl object-cover shadow-2xl shadow-brand-blue/20"
      />
    </section>
  );
}
