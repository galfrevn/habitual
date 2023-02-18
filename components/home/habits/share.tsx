import Link from 'next/link';

import { motion } from 'framer-motion';
import { Share } from 'lucide-react';

export function ShareHabit() {
  return (
    <Link href='/habits/share'>
      <motion.div
        key='share-habit'
        whileHover={{ scale: 0.98 }}
        className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-sky-400 to-blue-500 p-6 no-underline outline-none focus:shadow-md hover:scale-[.98] transition-all duration-100'
      >
        <Share className='h-6 w-6 text-white' />
        <h2
          key='share-habit-h2'
          className='mt-4 mb-2 text-lg font-medium text-white'
        >
          Share your habits
        </h2>
        <p
          key='share-habit-text'
          className='text-sm leading-tight text-white/90'
        >
          Spread the inspiration! Share your habits and motivate others towards
          a healthier lifestyle.
        </p>
      </motion.div>
    </Link>
  );
}
