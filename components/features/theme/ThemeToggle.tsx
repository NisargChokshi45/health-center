'use client';

import type { ReactNode } from 'react';
import { useTheme } from '@/hooks/useTheme';

export default function ThemeToggle(): ReactNode {
  const { theme, toggleTheme } = useTheme();
  const nextTheme = theme === 'light' ? 'dark' : 'light';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} theme`}
      className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:border-brand-blue"
    >
      <span className="sm:hidden">{theme === 'light' ? 'Dark' : 'Light'}</span>
      <span className="hidden sm:inline">{theme === 'light' ? 'Dark mode' : 'Light mode'}</span>
    </button>
  );
}
