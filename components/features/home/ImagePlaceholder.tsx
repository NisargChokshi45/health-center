import type { ReactNode } from 'react';

type PlaceholderTone = 'blue' | 'lilac' | 'coral';

const toneClasses: Record<PlaceholderTone, string> = {
  blue: 'from-brand-blue to-brand-lilac',
  lilac: 'from-brand-lilac to-brand-coral',
  coral: 'from-brand-coral to-brand-blue',
};

interface ImagePlaceholderProps {
  label: string;
  tone?: PlaceholderTone;
  className?: string;
}

// Stands in for a photo until the real image is added. Swap for next/image when assets are available.
export default function ImagePlaceholder({ label, tone = 'blue', className = '' }: ImagePlaceholderProps): ReactNode {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center bg-linear-to-br opacity-90 ${toneClasses[tone]} ${className}`}
    >
      <span className="rounded-full bg-page/85 px-4 py-2 text-center text-sm font-medium text-ink">{label}</span>
    </div>
  );
}
