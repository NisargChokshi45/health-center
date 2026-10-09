'use client';

import type { ReactNode } from 'react';
import type { FieldError } from 'react-hook-form';
import { useContactForm } from '@/hooks/useContactForm';
import { APPOINTMENT_SERVICES } from '@/content/siteContent';

const inputClass =
  'w-full rounded-md border border-line bg-page px-3 py-2 text-ink placeholder:text-muted focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/40';

function FieldErrorText({ error }: { error?: FieldError }): ReactNode {
  if (!error) return null;
  return <p className="mt-1 text-sm text-brand-coral">{error.message}</p>;
}

export default function ContactForm(): ReactNode {
  const { form, status, onSubmit } = useContactForm();
  const { register, formState } = form;
  const { errors, isSubmitting } = formState;

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      <div>
        <label htmlFor="appointment-name" className="mb-1 block text-sm font-medium">
          Full name
        </label>
        <input id="appointment-name" type="text" autoComplete="name" className={inputClass} {...register('name')} />
        <FieldErrorText error={errors.name} />
      </div>

      <div>
        <label htmlFor="appointment-phone" className="mb-1 block text-sm font-medium">
          Mobile number
        </label>
        <input id="appointment-phone" type="tel" autoComplete="tel" className={inputClass} {...register('phone')} />
        <FieldErrorText error={errors.phone} />
      </div>

      <div>
        <label htmlFor="appointment-email" className="mb-1 block text-sm font-medium">
          Email address
        </label>
        <input id="appointment-email" type="email" autoComplete="email" className={inputClass} {...register('email')} />
        <FieldErrorText error={errors.email} />
      </div>

      <div>
        <label htmlFor="appointment-service" className="mb-1 block text-sm font-medium">
          Select service
        </label>
        <select id="appointment-service" className={inputClass} {...register('service')}>
          <option value="">Choose a service</option>
          {APPOINTMENT_SERVICES.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        <FieldErrorText error={errors.service} />
      </div>

      <div>
        <label htmlFor="appointment-message" className="mb-1 block text-sm font-medium">
          Message
        </label>
        <textarea id="appointment-message" rows={3} className={inputClass} {...register('message')} />
        <FieldErrorText error={errors.message} />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-md bg-brand-blue px-5 py-3 font-semibold text-on-blue transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? 'Sending…' : 'Request Appointment'}
      </button>

      {status === 'success' && (
        <p role="status" className="text-sm text-link">
          Thanks. Our team will call you shortly to confirm your appointment.
        </p>
      )}
      {status === 'error' && (
        <p role="alert" className="text-sm text-brand-coral">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
