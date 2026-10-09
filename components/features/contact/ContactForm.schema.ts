import { z } from 'zod';
import { APPOINTMENT_SERVICES } from '@/content/siteContent';

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name'),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d\s()-]{7,20}$/, 'Enter a valid mobile number'),
  email: z.string().trim().email('Enter a valid email address'),
  service: z
    .string()
    .refine((value) => APPOINTMENT_SERVICES.some((service) => service === value), 'Please select a service'),
  message: z.string().trim().max(1000, 'Message should be at most 1000 characters'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
