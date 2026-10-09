import type { ReactNode } from 'react';
import { ShieldIcon } from '@/components/features/home/icons';
import { siteContent } from '@/content/siteContent';

export default function FeatureHighlight(): ReactNode {
  const { title, body } = siteContent.feature;

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="flex flex-col items-start gap-6 rounded-2xl border border-line bg-surface p-8 sm:flex-row sm:items-center sm:p-12">
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-blue/15 text-link">
          <ShieldIcon className="h-8 w-8" />
        </span>
        <div>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="mt-2 text-muted">{body}</p>
        </div>
      </div>
    </section>
  );
}
