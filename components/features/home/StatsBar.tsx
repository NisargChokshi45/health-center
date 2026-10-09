import type { ReactNode } from 'react';
import { siteContent } from '@/content/siteContent';

export default function StatsBar(): ReactNode {
  return (
    <section aria-label="Key figures" className="border-y border-line bg-surface">
      <dl className="mx-auto grid max-w-6xl gap-8 px-4 py-12 text-center sm:grid-cols-3 sm:px-6">
        {siteContent.stats.map((stat) => (
          // flex-col-reverse keeps the label below the value visually while the DOM stays dt-then-dd.
          <div key={stat.label} className="flex flex-col-reverse">
            <dt className="mt-2 text-muted">{stat.label}</dt>
            <dd className="text-4xl font-bold text-link sm:text-5xl">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
