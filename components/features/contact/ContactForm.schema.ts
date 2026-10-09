import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name'),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d\s()-]{7,20}$/, 'Enter a valid phone number'),
  email: z.string().trim().email('Enter a valid email address'),
  message: z
    .string()
    .trim()
    .min(10, 'Message should be at least 10 characters')
    .max(1000, 'Message should be at most 1000 characters'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
