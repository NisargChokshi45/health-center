import type { ReactNode } from 'react';
import { siteContent } from '@/content/siteContent';

interface LogoProps {
  className?: string;
}

// Mark approximates the coral and blue arcs in the brand logo.
function LogoMark(): ReactNode {
  return (
    <svg viewBox="0 0 80 80" aria-hidden="true" className="h-9 w-9 shrink-0 sm:h-12 sm:w-12">
      <path
        d="M60.6 15.5 A32 32 0 1 0 60.6 64.5"
        fill="none"
        stroke="var(--app-coral)"
        strokeWidth="12"
      />
      <path
        d="M40 58 A18 18 0 0 0 58 40"
        fill="none"
        stroke="var(--app-blue)"
        strokeWidth="12"
      />
    </svg>
  );
}

export default function Logo({ className }: LogoProps): ReactNode {
  const { name, subname, trademark } = siteContent.brand;
  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className ?? ''}`}>
      <LogoMark />
      <div className="flex flex-col leading-none">
        <span className="text-xl font-semibold tracking-tight text-ink sm:text-3xl">
          {name}
          <sup className="ml-0.5 align-super text-[0.4em]">{trademark}</sup>
        </span>
        <span className="mt-1 flex items-center gap-2 text-xs font-bold tracking-[0.35em] text-ink sm:text-base sm:tracking-[0.45em]">
          {subname}
          <span className="flex gap-1" aria-hidden="true">
            <span className="h-1.5 w-7 bg-brand-blue" />
            <span className="h-1.5 w-7 bg-brand-lilac" />
            <span className="h-1.5 w-7 bg-brand-coral" />
          </span>
        </span>
      </div>
    </div>
  );
}
