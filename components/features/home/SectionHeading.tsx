import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  intro?: string;
}

export default function SectionHeading({ eyebrow, heading, intro }: SectionHeadingProps): ReactNode {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-link"><span className="h-1.5 w-1.5 rounded-full bg-brand-coral" aria-hidden="true" />{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{heading}</h2>
      {intro && <p className="mt-4 text-muted">{intro}</p>}
    </div>
  );
}
