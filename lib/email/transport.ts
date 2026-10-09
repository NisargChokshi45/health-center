import nodemailer, { type Transporter } from 'nodemailer';

let transporter: Transporter | null = null;

// Single shared SMTP transport, created on first use from environment variables.
export function getMailTransporter(): Transporter {
  if (transporter) return transporter;

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? '587');
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error('SMTP_HOST, SMTP_USER and SMTP_PASS must be set to send enquiries');
  }

  transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
  return transporter;
}
