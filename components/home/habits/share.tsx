import Link from 'next/link';

import { motion } from 'framer-motion';

export function ShareHabit() {
  return (
    <Link href='/habits/share'>
      <motion.div
        key='share-habit'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
        className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-sky-400 to-blue-500 p-6 no-underline outline-none focus:shadow-md hover:scale-[.98] transition-all duration-100'
      >
        <motion.h2
          key='share-habit-h2'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
          className='mt-4 mb-2 text-lg font-medium text-white'
        >
          Share your habits
        </motion.h2>
        <motion.p
          key='share-habit-text'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
          className='text-sm leading-tight text-white/90'
        >
          Spread the inspiration! Share your habits and motivate others towards
          a healthier lifestyle.
        </motion.p>
      </motion.div>
    </Link>
  );
}
