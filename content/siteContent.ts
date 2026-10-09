// Site copy. Empty values render nothing, so no invented text reaches the page.
// Fill these from the live site once its pages are available.

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  href: string;
}

export const siteContent = {
  brand: {
    name: 'ULTIMATE',
    subname: 'HEALTH',
    trademark: '™',
    tagline: 'PHYSIOTHERAPY | FITNESS | REHAB',
    logoSrc: '',
  },
  nav: [
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ] satisfies NavItem[],
  hero: {
    headline: '',
    body: '',
    primaryCta: { label: '', href: '#contact' },
  },
  services: {
    heading: '',
    items: [] as ServiceItem[],
  },
  contact: {
    heading: '',
    body: '',
    phone: '',
    email: '',
    address: '',
  },
} as const;
