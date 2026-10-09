import type { ReactNode } from 'react';
import BookAppointmentButton from '@/components/features/appointment/BookAppointmentButton';
import { siteContent } from '@/content/siteContent';

function DetailBlock({ title, children }: { title: string; children: ReactNode }): ReactNode {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-link">{title}</h3>
      <div className="mt-2 grid gap-1 text-ink">{children}</div>
    </div>
  );
}

// "+91 95378 22822" -> "tel:+919537822822"
function telHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, '')}`;
}

export default function ContactSection(): ReactNode {
  const { heading, body, phones, email, addresses, hours } = siteContent.contact;

  return (
    <section id="contact" className="bg-surface py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold sm:text-4xl">{heading}</h2>
          <p className="mt-4 text-muted">{body}</p>

          <div className="mt-10 grid gap-8">
            <DetailBlock title="Phone">
              {phones.map((phone) => (
                <a key={phone} href={telHref(phone)} className="hover:text-link">
                  {phone}
                </a>
              ))}
            </DetailBlock>
            <DetailBlock title="Email">
              <a href={`mailto:${email}`} className="hover:text-link">
                {email}
              </a>
            </DetailBlock>
            <DetailBlock title="Locations">
              {addresses.map((address) => (
                <p key={address}>{address}</p>
              ))}
            </DetailBlock>
          </div>
        </div>

        <div className="rounded-lg border border-line bg-page p-6 sm:p-8">
          <h3 className="text-xl font-semibold">Opening Hours</h3>
          <dl className="mt-4 grid gap-3">
            {hours.map((slot) => (
              <div key={slot.days} className="flex items-center justify-between gap-4 border-b border-line pb-3">
                <dt className="text-muted">{slot.days}</dt>
                <dd className="text-right font-medium">{slot.time}</dd>
              </div>
            ))}
          </dl>
          <BookAppointmentButton
            label="Book Appointment"
            className="mt-8 w-full rounded-md bg-brand-coral px-6 py-3 font-semibold text-on-coral hover:opacity-90"
          />
        </div>
      </div>
    </section>
  );
}
