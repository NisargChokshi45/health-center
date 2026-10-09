'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  contactFormSchema,
  type ContactFormValues,
} from '@/components/features/contact/ContactForm.schema';
import { submitContact } from '@/services/contact.service';

export type ContactSubmitStatus = 'idle' | 'success' | 'error';

export function useContactForm(): {
  form: ReturnType<typeof useForm<ContactFormValues>>;
  status: ContactSubmitStatus;
  onSubmit: () => Promise<void>;
} {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: '', phone: '', email: '', message: '' },
  });
  const [status, setStatus] = useState<ContactSubmitStatus>('idle');

  const onSubmit = form.handleSubmit(async (values) => {
    setStatus('idle');
    try {
      await submitContact(values);
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  });

  return { form, status, onSubmit };
}
