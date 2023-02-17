import Link from 'next/link';
import * as React from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from 'components/ui/navbar';
import { cn } from 'lib/tailwind';

import { Banknote, Calendar, Settings } from 'lucide-react';

export function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Your dashboards</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-3'>
                <NavigationMenuLink asChild>
                  <Link
                    className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-sky-400 to-blue-500 p-6 no-underline outline-none focus:shadow-md'
                    href='/'
                  >
                    <Calendar className='h-6 w-6 text-white' />
                    <div className='mt-4 mb-2 text-lg font-medium text-white'>
                      Habit tracker
                    </div>
                    <p className='text-sm leading-tight text-white/90'>
                      Congratulations! Every day you&apos;re taking steps
                      towards a better you. Keep up the great work and remember
                      that small consistent actions lead to big results!
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className='row-span-3'>
                <NavigationMenuLink asChild>
                  <Link
                    className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-green-400 to-green-500 p-6 no-underline outline-none focus:shadow-md'
                    href='/finances'
                  >
                    <Banknote className='h-6 w-6 text-white' />
                    <div className='mt-4 mb-2 text-lg font-medium text-white'>
                      Finances tracker
                    </div>
                    <p className='text-sm leading-tight text-white/90'>
                      Congratulations! Every day you&apos;re taking steps
                      towards a better you. Keep up the great work and remember
                      that small consistent actions lead to big results!
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className='row-span-3'>
                <NavigationMenuLink asChild>
                  <Link
                    className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-neutral-800 via-nuetral-900 to-black p-6 no-underline outline-none focus:shadow-md'
                    href='/settings'
                  >
                    <Settings className='h-6 w-6 text-white' />
                    <div className='my-2 text-lg font-medium text-white'>
                      Settings
                    </div>
                    <p className='text-sm leading-tight text-white/90'>
                      Personalize your settings to fit your needs and
                      preferences.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='text-sm leading-snug text-slate-500 line-clamp-2 dark:text-slate-400'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
