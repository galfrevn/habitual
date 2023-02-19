import axios from 'axios';
import moment from 'moment';
import { motion } from 'framer-motion';

import { useQuery } from '@tanstack/react-query';
import { Habit, HabitCompletition } from '@prisma/client';
import { monthNames, panelColors } from 'lib/calentar';

import Calendar from 'react-github-contribution-calendar';
import { Icons } from 'components/ui/icons';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from 'components/ui/collapsible';

const HabitsSkeleton = () => (
  <div className='grid gap-4 mt-4'>
    <div className='w-48 h-5 bg-neutral-500/40 rounded-lg' />
    <div className='w-full h-[126px] bg-neutral-500/20 rounded-lg' />
    <div className='w-full h-[126px] bg-neutral-500/30 rounded-lg' />
    <div className='w-full h-[126px] bg-neutral-500/10 rounded-lg' />
  </div>
);

interface HabitsWithCompletitions extends Habit {
  completitions: HabitCompletition[];
}

export function UserHabits() {
  const listUserHabitsFn = async () => await axios.get('/api/habits/list');
  const { data, isLoading, error } = useQuery({
    queryKey: ['habits'],
    queryFn: listUserHabitsFn,
  });

  if (isLoading) return <HabitsSkeleton />;
  if (error) return <div>Error</div>;

  if (data?.data.data.length === 0) return null;

  return (
    <div className='grid gap-4 mt-4'>
      <h2 className='font-semibold'>Follow your habits</h2>
      {data?.data.data.map((habit: HabitsWithCompletitions) => (
        <Collapsible key={habit.id} >
          <CollapsibleTrigger className='w-full'>
            <motion.div
              key={habit.id}
              whileHover={{ scale: 0.98 }}
              className='flex flex-col select-none bg-gradient-to-r from-emerald-500 to-green-300 gap-4 justify-start px-4 py-6 items-start rounded-md no-underline outline-none focus:shadow-md transition-all duration-100'
            >
              <div className='h-6 w-6 text-white rounded-md'>
                <Icons icon={habit.icon} />
              </div>
              <div className='flex flex-col w-full items-start'>
                <span className='text-left text-lg text-white font-medium leading-none '>
                  {habit.title}
                </span>
                <span className='text-sm text-white opacity-70'>
                  Every day at {habit.hour}
                </span>
              </div>
            </motion.div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className='mt-4 bg-neutral-100 dark:bg-neutral-800 p-4 rounded-md'>
              <p className='text-sm leading-tight mb-4 text-neutral-600 dark:text-neutral-300'>
                {habit.description}
              </p>
              <HabitsCalendar {...habit} />
              <p className='text-sm leading-tight mt-4 text-neutral-600 dark:text-neutral-300'>
                Tracking since {moment(habit.started).fromNow()}
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
}

interface HabitsCalendarProps {
  completitions: HabitCompletition[];
  started: Habit['started'];
}

const HabitsCalendar = ({ completitions }: HabitsCalendarProps) => {
  const generateValues = completitions.reduce((accumm, { date }) => {
    const key = moment(date).format('YYYY-MM-DD');
    return { ...accumm, [key]: 4 };
  }, {});

  console.log(generateValues)

  const until = new Date().toISOString();

  return (
    <div>
      <Calendar
        until={until}
        monthNames={monthNames}
        values={generateValues}
        panelColors={panelColors}
        monthLabelAttributes={{}}
        weekLabelAttributes={{}}
        panelAttributes={{}}
      />
    </div>
  );
};
