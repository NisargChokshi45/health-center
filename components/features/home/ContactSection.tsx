import type { ReactNode } from 'react';
import ContactForm from '@/components/features/contact/ContactForm';
import { siteContent } from '@/content/siteContent';

function ContactDetail({ label, value }: { label: string; value: string }): ReactNode {
  if (!value) return null;
  return (
    <div>
      <dt className="text-sm font-semibold text-brand-blue">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

export default function ContactSection(): ReactNode {
  const { heading, body, phone, email, address } = siteContent.contact;

  return (
    <section id="contact" className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-2">
      <div>
        {heading && <h2 className="text-3xl font-semibold">{heading}</h2>}
        {body && <p className="mt-4 text-muted">{body}</p>}
        <dl className="mt-8 grid gap-3 text-ink">
          <ContactDetail label="Phone" value={phone} />
          <ContactDetail label="Email" value={email} />
          <ContactDetail label="Address" value={address} />
        </dl>
      </div>
      <ContactForm />
    </section>
  );
}
