import { TodayCalendar } from 'components/home/date';
import {
  HabitsSemiContainer,
  HabitsSingleContainer,
} from 'components/home/habits/containers';
import { CreateHabit } from 'components/home/habits/create';
import { EditHabit } from 'components/home/habits/edit';
import { ShareHabit } from 'components/home/habits/share';
import HabitTrackerAdd from 'components/home/habits/tracker/add';
import { UserHabits } from 'components/home/habits/user-habits';
import { Metrics } from 'components/home/metrics';

import { getServerSideSession } from 'lib/server/server-session';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

export default function Home({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className='px-4 mt-4'>
      <TodayCalendar name={session.user?.name as string} />

      <HabitTrackerAdd />
      <UserHabits />

      <h2 className='font-semibold mt-4'>Make your life healthier</h2>
      <HabitsSingleContainer>
        <CreateHabit />
        <HabitsSemiContainer>
          <EditHabit />
          <ShareHabit />
        </HabitsSemiContainer>
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
