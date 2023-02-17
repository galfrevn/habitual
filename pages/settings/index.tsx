import { LogoutButton } from 'components/auth/button';
import { SettingsIntro } from 'components/home/settings/intro';
import { getServerSideSession } from 'lib/server/server-session';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

export default function Settings({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className='px-4 mt-4'>
      <SettingsIntro />
      {/* Temporal */}
      <LogoutButton label='Log out' />
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSideSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
