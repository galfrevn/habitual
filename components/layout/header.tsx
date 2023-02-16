import { useSession } from 'next-auth/react';
import { Navigation } from 'components/home/navigation';
import { Avatar, AvatarFallback, AvatarImage } from 'components/ui/avatar';

export function Header() {
  const { data } = useSession();

  return (
    <header className='sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900'>
      <div className='container flex h-16 items-center'>
        <Navigation />
        <div className='flex flex-1 items-center justify-end px-4'>
          <nav className='flex items-center space-x-1'>
            <Avatar>
              <AvatarImage
                src={data?.user?.image as string}
                alt={data?.user?.name + 'profile picture'}
              />
              <AvatarFallback>VG</AvatarFallback>
            </Avatar>
          </nav>
        </div>
      </div>
    </header>
  );
}
