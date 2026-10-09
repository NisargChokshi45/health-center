import type { ReactNode } from 'react';

type PlaceholderTone = 'blue' | 'lilac' | 'coral';

const toneClasses: Record<PlaceholderTone, string> = {
  blue: 'from-brand-blue to-brand-lilac',
  lilac: 'from-brand-lilac to-brand-coral',
  coral: 'from-brand-coral to-brand-blue',
};

interface ImagePlaceholderProps {
  label: string;
  src?: string;
  tone?: PlaceholderTone;
  className?: string;
}

// Shows the linked site photo when `src` is set. Otherwise a brand-coloured block stands in until a photo is available.
export default function ImagePlaceholder({ label, src, tone = 'blue', className = '' }: ImagePlaceholderProps): ReactNode {
  if (src) {
    return <img src={src} alt={label} loading="lazy" className={`w-full object-cover ${className}`} />;
  }

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
