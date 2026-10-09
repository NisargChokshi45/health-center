import type { ReactNode } from 'react';
import Logo from '@/components/features/brand/Logo';

export default function Footer(): ReactNode {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-6">
        <Logo className="scale-75" />
        <p>© {new Date().getFullYear()} Ultimate Health. All rights reserved.</p>
      </div>
    </footer>
  );
}
