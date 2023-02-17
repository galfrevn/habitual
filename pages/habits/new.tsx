import { TabsContent } from '@radix-ui/react-tabs';
import { HabitsSingleContainer } from 'components/home/habits/containers';
import { CreateHabit } from 'components/home/habits/create';
import { Tabs, TabsList, TabsTrigger } from 'components/ui/tabs';

import { getServerSideSession } from 'lib/server/server-session';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

export default function CreateHabitPage({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className='px-4 mt-4'>
      <HabitsSingleContainer>
        <CreateHabit />
      </HabitsSingleContainer>

      <Tabs defaultValue='details' className='w-full mt-4'>
        <TabsList>
          <TabsTrigger value='details'>Details</TabsTrigger>
          <TabsTrigger value='customization'>Customization</TabsTrigger>
          <TabsTrigger value='confirmation'>Confirmation</TabsTrigger>
        </TabsList>
        <TabsContent value='details'>
          <p className='text-sm text-neutral-500 dark:text-neutral-400'>
            Make changes to your account here. Click save when you&apos;re done.
          </p>
        </TabsContent>
        <TabsContent value='customization'>
          <p className='text-sm text-neutral-500 dark:text-neutral-400'>
            This is the customization page
          </p>
        </TabsContent>
      </Tabs>
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
