import Link from 'next/link';
import * as React from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
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
            <ul className='grid gap-3 p-6 md:w-[500px] md:grid-cols-[.75fr_1fr]'>
              <li className='row-span-3'>
                <NavigationMenuLink asChild>
                  <Link
                    className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-sky-400 to-blue-500 p-6 no-underline hover:scale-[0.98] outline-none focus:shadow-md'
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
              <ListItem href='/finances' title='Finances tracker'>
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href='/settings' title='Settings'>
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
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
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-100 focus:bg-neutral-100 dark:hover:bg-neutral-800/50 dark:focus:bg-neutral-800/50',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='text-sm leading-snug text-neutral-500 line-clamp-2 dark:text-neutral-400'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
