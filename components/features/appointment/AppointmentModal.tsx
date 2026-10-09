'use client';

import { useEffect, useRef, type MouseEvent, type ReactNode } from 'react';
import ContactForm from '@/components/features/contact/ContactForm';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps): ReactNode {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  // Clicks on the dialog element itself land on the backdrop, not on its padded content.
  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>): void {
    if (event.target === event.currentTarget) onClose();
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={handleBackdropClick}
      aria-labelledby="appointment-title"
      className="m-auto w-[min(92vw,32rem)] rounded-lg border border-line bg-page p-0 text-ink backdrop:bg-ink/50"
    >
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="appointment-title" className="text-2xl font-semibold">
              Schedule Your Appointment
            </h2>
            <p className="mt-2 text-muted">Our wellness team will call you to confirm your consultation.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close appointment form"
            className="rounded-full px-2 text-2xl leading-none text-muted hover:text-ink"
          >
            ×
          </button>
        </div>
        <div className="mt-6">
          <ContactForm />
        </div>
      </div>
    </dialog>
  );
}
