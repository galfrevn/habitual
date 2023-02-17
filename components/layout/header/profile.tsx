import { useSession } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from 'components/ui/avatar';

export function Profile() {
  const { data } = useSession();

  return (
    <div className='px-4'>
      <Avatar>
        <AvatarImage
          src={data?.user?.image as string}
          alt={data?.user?.name + 'profile picture'}
        />
        <AvatarFallback>VG</AvatarFallback>
      </Avatar>
    </div>
  );
}
