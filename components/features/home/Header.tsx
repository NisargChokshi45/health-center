import type { ReactNode } from 'react';
import Logo from '@/components/features/brand/Logo';
import ThemeToggle from '@/components/features/theme/ThemeToggle';
import { siteContent } from '@/content/siteContent';

export default function Header(): ReactNode {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-page/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" aria-label={`${siteContent.brand.name} ${siteContent.brand.subname} home`}>
          <Logo />
        </a>
        <nav aria-label="Primary" className="flex items-center gap-4 sm:gap-6">
          {siteContent.nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-ink hover:text-brand-blue">
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
