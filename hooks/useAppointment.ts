'use client';

import { createContext, useContext } from 'react';

export interface AppointmentContextValue {
  openAppointment: () => void;
}

export const AppointmentContext = createContext<AppointmentContextValue | null>(null);

export function useAppointment(): AppointmentContextValue {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error('useAppointment must be used inside AppointmentProvider');
  }
  return context;
}
