import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/components/features/contact/ContactForm.schema';
import { sendEnquiry } from '@/services/enquiry.service';

export async function POST(request: Request): Promise<NextResponse> {
  const body: unknown = await request.json().catch(() => null);
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  try {
    await sendEnquiry(parsed.data);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Failed to send enquiry email', error);
    return NextResponse.json({ error: 'Could not send enquiry' }, { status: 500 });
  }
}
