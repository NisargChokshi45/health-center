import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/components/features/contact/ContactForm.schema';

export async function POST(request: Request): Promise<NextResponse> {
  const body: unknown = await request.json().catch(() => null);
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  // TODO: forward the enquiry to email / CRM once the destination is decided.
  return NextResponse.json({ ok: true });
}
