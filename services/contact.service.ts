import type { ContactFormValues } from '@/components/features/contact/ContactForm.schema';

export async function submitContact(values: ContactFormValues): Promise<void> {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    throw new Error(`Contact request failed with status ${response.status}`);
  }
}
