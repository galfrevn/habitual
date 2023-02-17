import { ReactNode } from 'react';

export function HabitsSingleContainer({ children }: { children: ReactNode }) {
  return <div className='mt-4 grid gap-4 md:grid-cols-2 '>{children}</div>;
}

export function HabitsSemiContainer({ children }: { children: ReactNode }) {
  return <div className='grid grid-cols-1 gap-4 '>{children}</div>;
}
