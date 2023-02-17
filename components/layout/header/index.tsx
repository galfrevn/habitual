import { ThemeSwitcher } from 'components/home/theme-switcher';
import { Navigation } from 'components/layout/header/navigation';
import { Profile } from 'components/layout/header/profile';
import { useRouter } from 'next/router';

const bannedRoutes = ['/auth'];

export function Header() {
  const { pathname } = useRouter();
  if (bannedRoutes.includes(pathname)) return null;

  return (
    <header className='sticky top-0 z-40 w-full border-b border-b-neutral-200 bg-white dark:border-b-neutral-700 dark:bg-neutral-900/80'>
      <div className='container flex h-16 items-center'>
        <Navigation />
        <ThemeSwitcher />
        <Profile />
      </div>
    </header>
  );
}
