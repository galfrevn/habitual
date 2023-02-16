import moment from 'moment';
import { CalendarDays } from 'lucide-react';

export const TodayCalendar = ({ name }: { name: string }) => {
  return (
    <div className='flex justify-between items-center text-sm text-neutral-500 '>
      <span>Hi {name}</span>
      <div className='flex items-center gap-1.5'>
        <CalendarDays className='h-4 w-4' />
        <p>{moment().format('MMMM Do YY')}</p>
      </div>
    </div>
  );
};
