import React from 'react';
import { Navigation } from 'components/layout/header/navigation';
import { Profile } from 'components/layout/header/profile';

export function Header() {
  return (
    <header className='sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white dark:border-b-neutral-700 dark:bg-neutral-900/80'>
      <div className='container flex h-16 items-center'>
        <Navigation />
        <Profile />
      </div>
    </header>
  );
}
