import type { ContactFormValues } from '@/components/features/contact/ContactForm.schema';
import { getMailTransporter } from '@/lib/email/transport';

export async function sendEnquiry(values: ContactFormValues): Promise<void> {
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.SMTP_FROM ?? process.env.SMTP_USER;

  if (!to || !from) {
    throw new Error('CONTACT_TO_EMAIL and SMTP_FROM (or SMTP_USER) must be set');
  }

  await getMailTransporter().sendMail({
    from,
    to,
    replyTo: values.email,
    subject: `New website enquiry from ${values.name}`,
    text: [
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Email: ${values.email}`,
      '',
      values.message,
    ].join('\n'),
  });
}
