import moment from 'moment';

import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';

export const TodayCalendar = ({ name }: { name: string }) => {
  return (
    <div className='flex justify-between items-center text-sm text-neutral-500 '>
      <motion.span
        key='name'
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi {name}
      </motion.span>
      <motion.div
        key='calendar'
        className='flex items-center gap-1.5'
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
      >
        <CalendarDays className='h-4 w-4' />
        <p>{moment().format('MMMM Do YY')}</p>
      </motion.div>
    </div>
  );
};
