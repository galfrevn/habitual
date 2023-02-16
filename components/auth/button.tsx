import { Fragment } from 'react';
import { BuiltInProviderType } from 'next-auth/providers';
import { LiteralUnion, signIn, signOut } from 'next-auth/react';

import Image from 'next/image';
import { LogOut } from 'lucide-react';

export interface AuthenticationButtonProps {
  authenticationProviderLabel: string;
  authenticationProviderBgColor: `#${string}`;
  authenticationProviderTextColor: `#${string}`;
  authenticationProviderName: LiteralUnion<BuiltInProviderType, string>;
}

export const AuthenticationButton = (props: AuthenticationButtonProps) => {
  const {
    authenticationProviderLabel,
    authenticationProviderName,
    authenticationProviderBgColor,
    authenticationProviderTextColor,
  } = props;

  const authenticationProviderLogo =
    '/icons/' + authenticationProviderName + '.png';

  const handleAuthenticateUser = () => signIn(authenticationProviderName);

  return (
    <Fragment>
      <button
        onClick={handleAuthenticateUser}
        className='flex items-center justify-center w-full rounded-md p-3'
        style={{ backgroundColor: authenticationProviderBgColor }}
      >
        <Image
          src={authenticationProviderLogo}
          alt={authenticationProviderLabel + 'logo'}
          width={20}
          height={20}
          priority
        />
        <span
          className='ml-2 text-sm font-semibold'
          style={{ color: authenticationProviderTextColor }}
        >
          Continue with {authenticationProviderLabel}
        </span>
      </button>
    </Fragment>
  );
};

export const LogoutButton = ({ label }: { label: string }) => {
  const handleLogout = () => signOut();

  return (
    <button
      onClick={handleLogout}
      className='flex items-center justify-center w-full rounded-md bg-black p-3'
    >
      <LogOut className='w-4 text-white' />
      <span className='ml-2 text-sm font-semibold text-white'>{label}</span>
    </button>
  );
};
