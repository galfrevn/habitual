import Link from 'next/link';

import { motion } from 'framer-motion';
import { Edit } from 'lucide-react';

export function EditHabit() {
  return (
    <Link href='/habits/edit'>
      <motion.div
        key='edit-habit'
        whileHover={{ scale: 0.98 }}
        className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-700 to-violet-600 p-6 no-underline outline-none focus:shadow-md hover:scale-[.98] transition-all duration-100'
      >
        <Edit className='h-6 w-6 text-white' />
        <h2
          key='edit-habit-h2'
          className='mt-4 mb-2 text-lg font-medium text-white'
        >
          Edit a habit
        </h2>
        <p
          key='edit-habit-text'
          className='text-sm leading-tight text-white/90'
        >
          Revise your routine. Edit existing habits and stay on track towards
          your goals!
        </p>
      </motion.div>
    </Link>
  );
}
