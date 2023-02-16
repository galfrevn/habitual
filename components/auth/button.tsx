import { Fragment } from 'react';
import { BuiltInProviderType } from 'next-auth/providers';
import { LiteralUnion, signIn } from 'next-auth/react';

import Image from 'next/image';

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
