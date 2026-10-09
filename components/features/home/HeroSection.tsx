import type { ReactNode } from 'react';
import { siteContent } from '@/content/siteContent';

export default function HeroSection(): ReactNode {
  const { tagline } = siteContent.brand;
  const { headline, body, primaryCta } = siteContent.hero;

  return (
    <section id="top" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-sm font-bold tracking-[0.25em] text-brand-blue">{tagline}</p>
      {headline && <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">{headline}</h1>}
      {body && <p className="mt-6 max-w-2xl text-lg text-muted">{body}</p>}
      {primaryCta.label && (
        <a
          href={primaryCta.href}
          className="mt-8 inline-block rounded-md bg-brand-coral px-6 py-3 font-semibold text-on-accent hover:opacity-90"
        >
          {primaryCta.label}
        </a>
      )}
    </section>
  );
}
