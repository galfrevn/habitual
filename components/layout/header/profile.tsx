import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from 'components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from 'components/ui/dropdown';

import { Outfit } from '@next/font/google';
import { CreditCard, Settings, User } from 'lucide-react';
import { useState } from 'react';

const outfit = Outfit({
  variable: '--display-font',
});

export function Profile() {
  const { data } = useSession();

  return (
    <div className='flex flex-1 items-center justify-end px-4'>
      <nav className='flex items-center space-x-1'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage
                src={data?.user?.image as string}
                alt={data?.user?.name + 'profile picture'}
              />
              <AvatarFallback>VG</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align='end'
            className={`${outfit.variable} font-display w-56`}
          >
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href='/profile' className='flex items-center'>
                  <User className='mr-2 h-4 w-4' />
                  <span className='font-normal'>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href='/billing' className='flex items-center'>
                  <CreditCard className='mr-2 h-4 w-4' />
                  <span className='font-normal'>Billing</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href='/settings' className='flex items-center'>
                  <Settings className='mr-2 h-4 w-4' />
                  <span className='font-normal'>Settings</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </div>
  );
}
