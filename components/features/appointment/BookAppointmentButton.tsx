'use client';

import type { ReactNode } from 'react';
import { useAppointment } from '@/hooks/useAppointment';

interface BookAppointmentButtonProps {
  label: string;
  className: string;
}

export default function BookAppointmentButton({ label, className }: BookAppointmentButtonProps): ReactNode {
  const { openAppointment } = useAppointment();

  return (
    <button type="button" onClick={openAppointment} className={className}>
      {label}
    </button>
  );
}
