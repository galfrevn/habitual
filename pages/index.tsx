import { TodayCalendar } from 'components/home/date';
import { HabitsSingleContainer } from 'components/home/habits/containers';
import { CreateHabit } from 'components/home/habits/create';
import { EditHabit } from 'components/home/habits/edit';
import { ShareHabit } from 'components/home/habits/share';
import { Metrics } from 'components/home/metrics';

import { getServerSideSession } from 'lib/server/server-session';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

export default function Home({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className='px-4 mt-4'>
      <TodayCalendar name={session.user?.name as string} />
      <HabitsSingleContainer>
        <CreateHabit />
        <EditHabit />
        <ShareHabit />
      </HabitsSingleContainer>
      <Metrics />
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
