import type { ReactNode } from 'react';
import ContactForm from '@/components/features/contact/ContactForm';
import { siteContent } from '@/content/siteContent';

export default function ContactSection(): ReactNode {
  const { heading, body, phone, email, address } = siteContent.contact;

  return (
    <section id="contact" className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 sm:py-20">
      <div>
        <h2 className="text-3xl font-semibold">{heading}</h2>
        <p className="mt-4 text-muted">{body}</p>
        <dl className="mt-8 grid gap-3 text-ink">
          <div>
            <dt className="text-sm font-semibold text-brand-blue">Phone</dt>
            <dd>{phone}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-brand-blue">Email</dt>
            <dd>{email}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-brand-blue">Address</dt>
            <dd>{address}</dd>
          </div>
        </dl>
      </div>
      <ContactForm />
    </section>
  );
}
