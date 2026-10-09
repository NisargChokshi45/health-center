// PLACEHOLDER COPY. The live site (ultimatehealth.in) could not be read from the
// build environment, so every string below except the brand and tagline is a
// stand-in. Replace these values with the real copy; components read only from here.

export interface ServiceItem {
  title: string;
  description: string;
}

export const siteContent = {
  brand: {
    name: 'ULTIMATE',
    subname: 'HEALTH',
    trademark: '™',
    tagline: 'PHYSIOTHERAPY | FITNESS | REHAB',
  },
  nav: [
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    headline: '[Placeholder headline]',
    body: '[Placeholder intro paragraph. Replace with the homepage copy from ultimatehealth.in.]',
    primaryCta: { label: 'Book a consultation', href: '#contact' },
  },
  services: {
    heading: 'Our services',
    items: [
      {
        title: 'Physiotherapy',
        description: '[Placeholder description for physiotherapy.]',
      },
      {
        title: 'Fitness',
        description: '[Placeholder description for fitness.]',
      },
      {
        title: 'Rehab',
        description: '[Placeholder description for rehabilitation.]',
      },
    ] satisfies ServiceItem[],
  },
  contact: {
    heading: 'Get in touch',
    body: '[Placeholder contact intro.]',
    phone: '[Phone number]',
    email: '[Email address]',
    address: '[Clinic address]',
  },
} as const;
