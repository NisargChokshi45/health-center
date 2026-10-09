import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ultimate Health | Physiotherapy · Fitness · Rehab',
  description: 'Ultimate Health — physiotherapy, fitness and rehabilitation.',
};

// Runs before first paint so a saved theme never flashes the wrong palette.
const themeInitScript = `(function(){try{var t=localStorage.getItem('uh-theme');if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t;}}catch(e){}})();`;

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): ReactNode {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
