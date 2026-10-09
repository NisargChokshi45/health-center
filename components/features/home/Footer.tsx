import type { ReactNode } from 'react';
import Logo from '@/components/features/brand/Logo';
import { siteContent } from '@/content/siteContent';

function FooterColumn({ title, children }: { title: string; children: ReactNode }): ReactNode {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-wider text-link">{title}</h2>
      <div className="mt-4 grid gap-2 text-muted">{children}</div>
    </div>
  );
}

export default function Footer(): ReactNode {
  const { description, socials, quickLinks } = siteContent.footer;
  const { phones, email, addresses, hours } = siteContent.contact;

  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 text-muted">{description}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="inline-block rounded-full border border-line px-3 py-1 text-sm text-ink hover:border-brand-blue hover:text-link"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <FooterColumn title="Quick Links">
          {quickLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-link">
              {link.label}
            </a>
          ))}
        </FooterColumn>

        <FooterColumn title="Contact Us">
          {phones.map((phone) => (
            <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-link">
              {phone}
            </a>
          ))}
          <a href={`mailto:${email}`} className="break-all hover:text-link">
            {email}
          </a>
          {addresses.map((address) => (
            <p key={address}>{address}</p>
          ))}
        </FooterColumn>

        <FooterColumn title="Opening Hours">
          {hours.map((slot) => (
            <p key={slot.days}>
              <span className="font-medium text-ink">{slot.days}:</span> {slot.time}
            </p>
          ))}
        </FooterColumn>
      </div>

      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-muted sm:px-6">
          © {new Date().getFullYear()} Ultimate Health. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
