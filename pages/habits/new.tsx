import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { getServerSideSession } from 'lib/server/server-session';

import { Icons } from 'components/ui/icons';
import { Label } from 'components/ui/label';
import { Input } from 'components/ui/input';
import { Textarea } from 'components/ui/textarea';
import { CreateHabit } from 'components/home/habits/create';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/ui/tabs';

import { useCreateHabit } from 'hooks/habits/use-create-habit';
import { HabitsSingleContainer } from 'components/home/habits/containers';
import { Button } from 'components/ui/button';

export default function CreateHabitPage({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { updateHabitField, returnHabitField, createHabit } = useCreateHabit();

  return (
    <div className='px-4 mt-4 pb-10'>
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
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='title'>
              Title <span className='text-red-600'>*</span>
            </Label>
            <Input
              id='title'
              value={returnHabitField('title')}
              placeholder='Take a cold shower'
              onChange={({ target }) => updateHabitField('title', target.value)}
            />
          </div>

          <div className='grid w-full max-w-sm items-center gap-1.5 mt-5'>
            <Label htmlFor='description'>Description</Label>
            <Textarea
              id='description'
              placeholder='I will take a cold shower every day at 7 am'
              value={returnHabitField('description')}
              onChange={({ target }) =>
                updateHabitField('description', target.value)
              }
            />
            <p className='text-sm text-slate-500'>
              Tell us about your new habit!
            </p>
          </div>

          <div className='grid w-full max-w-sm items-center gap-1.5 mt-5'>
            <Label htmlFor='hour'>
              Habit hour <span className='text-red-600'>*</span>
            </Label>
            <Input
              id='hour'
              placeholder='07:00am'
              value={returnHabitField('hour')}
              onChange={({ target }) => updateHabitField('hour', target.value)}
            />
          </div>
        </TabsContent>

        <TabsContent value='customization'>
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='color'>
              Habit color <span className='text-red-600'>*</span>
            </Label>
            <Input
              id='color'
              type='color'
              value={returnHabitField('color')}
              onChange={({ target }) => {
                updateHabitField('color', target.value);
              }}
            />
          </div>

          <div className='grid w-full max-w-sm items-center gap-1.5 mt-5'>
            <Label htmlFor='icon'>
              Habit icon <span className='text-red-600'>*</span>
            </Label>
            <Input
              id='icon'
              type='icon'
              placeholder='Shower (this input is not finished)'
              value={returnHabitField('icon')}
              onChange={({ target }) => {
                updateHabitField('icon', target.value);
              }}
            />
          </div>
        </TabsContent>

        <TabsContent value='confirmation'>
          <div className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-sky-400 to-blue-500 p-6 no-underline outline-none focus:shadow-md'>
            {/* <Calendar className='h-6 w-6 text-white' /> */}
            <Icons icon={returnHabitField('icon')} />

            <div
              className='w-4 h-4'
              style={{ backgroundColor: returnHabitField('color') }}
            />
            <div className='mt-4 mb-2 text-lg font-medium text-white'>
              {returnHabitField('title')}
            </div>
            <p className='text-sm leading-tight text-white/90'>
              {returnHabitField('description')}
            </p>
          </div>

          <Button className='w-full mt-5' onClick={createHabit}>
            Create habit
          </Button>
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
