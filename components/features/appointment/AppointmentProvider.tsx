'use client';

import { useCallback, useMemo, useState, type ReactNode } from 'react';
import AppointmentModal from '@/components/features/appointment/AppointmentModal';
import { AppointmentContext, type AppointmentContextValue } from '@/hooks/useAppointment';

interface AppointmentProviderProps {
  children: ReactNode;
}

export default function AppointmentProvider({ children }: AppointmentProviderProps): ReactNode {
  const [isOpen, setIsOpen] = useState(false);

  const openAppointment = useCallback(() => setIsOpen(true), []);
  const closeAppointment = useCallback(() => setIsOpen(false), []);

  const value = useMemo<AppointmentContextValue>(() => ({ openAppointment }), [openAppointment]);

  return (
    <AppointmentContext.Provider value={value}>
      {children}
      <AppointmentModal isOpen={isOpen} onClose={closeAppointment} />
    </AppointmentContext.Provider>
  );
}
