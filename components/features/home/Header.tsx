import type { ReactNode } from 'react';
import BookAppointmentButton from '@/components/features/appointment/BookAppointmentButton';
import Logo from '@/components/features/brand/Logo';
import ThemeToggle from '@/components/features/theme/ThemeToggle';
import { siteContent } from '@/content/siteContent';

const linkClass = 'text-sm font-medium text-ink hover:text-link';

export default function Header(): ReactNode {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-page/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="/" aria-label={`${siteContent.brand.name} ${siteContent.brand.subname} home`}>
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-4 xl:flex">
          {siteContent.nav.map((item) => (
            <a key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <BookAppointmentButton
            label={siteContent.hero.primaryCta.label}
            className="hidden rounded-md bg-brand-coral px-4 py-2 text-sm font-semibold text-on-coral hover:opacity-90 sm:inline-block"
          />
          <details className="group relative xl:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-line bg-surface px-3 py-1.5 text-sm font-medium text-ink hover:border-brand-blue [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute right-0 mt-2 grid w-56 gap-3 rounded-lg border border-line bg-page p-4"
            >
              {siteContent.nav.map((item) => (
                <a key={item.href} href={item.href} className={linkClass}>
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
