import { ReactNode } from 'react';

export function AccountsSingleContainer({ children }: { children: ReactNode }) {
  return <div className='mt-4 grid gap-4 md:grid-cols-2 '>{children}</div>;
}
