import type { ReactNode } from 'react';
import { siteContent } from '@/content/siteContent';

interface LogoProps {
  className?: string;
}

// The full brand logo, linked from the live site. Its text is charcoal, so it sits on a grey tile to stay readable in dark mode.
export default function Logo({ className }: LogoProps): ReactNode {
  const { logoAlt, logoSrc } = siteContent.brand;

  return (
    <span className={`inline-block rounded-lg bg-[#e6e6e6] px-2 py-1 ${className ?? ''}`}>
      <img src={logoSrc} alt={logoAlt} className="h-10 w-auto sm:h-12" />
    </span>
  );
}
