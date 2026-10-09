import type { ReactNode } from 'react';
import { CheckIcon } from '@/components/features/home/icons';
import { siteContent } from '@/content/siteContent';

export default function CtaSection(): ReactNode {
  const { heading, body, features, primaryCta } = siteContent.cta;
  const { phoneHref } = siteContent.contact;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="flex flex-col gap-8 rounded-lg bg-brand-blue p-8 text-on-blue sm:p-12 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold">{heading}</h2>
          <p className="mt-4 opacity-90">{body}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 font-medium">
                <CheckIcon className="h-5 w-5 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <a
          href={phoneHref}
          className="shrink-0 rounded-md bg-page px-6 py-3 text-center font-semibold text-ink hover:opacity-90"
        >
          {primaryCta.label}
        </a>
      </div>
    </section>
  );
}
