import Link from 'next/link';

import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export function CreateHabit() {
  return (
    <Link href='/habits/new'>
      <motion.div
        key='create-habit'
        whileHover={{ scale: 0.98 }}
        className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-r from-rose-700 to-pink-600 p-6 no-underline outline-none focus:shadow-md transition-all duration-100'
      >
        <Plus className='h-6 w-6 text-white' />
        <h2
          key='create-habit-h2'
          className='mt-4 mb-2 text-lg font-medium text-white'
        >
          Create a new habit
        </h2>
        <p
          key='create-habit-text'
          className='text-sm leading-tight text-white/90'
        >
          Creating new habits can be challenging, but with our one-click habit
          creation button, it&apos;s now easier than ever to establish a new
          daily routine that can help you reach your goals.
        </p>
      </motion.div>
    </Link>
  );
}
