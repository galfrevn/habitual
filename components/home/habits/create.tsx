import Link from 'next/link';

import { motion } from 'framer-motion';

export function CreateHabit() {
  return (
    <Link href='/habits/tracker/new'>
      <motion.div
        key='create-habit'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
        className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-r from-rose-700 to-pink-600 p-6 no-underline outline-none focus:shadow-md hover:scale-[.98] transition-all duration-100'
      >
        <motion.h2
          key='create-habit-h2'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
          className='mt-4 mb-2 text-lg font-medium text-white'
        >
          Create a new habit
        </motion.h2>
        <motion.p
          key='create-habit-text'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
          className='text-sm leading-tight text-white/90'
        >
          Creating new habits can be challenging, but with our one-click habit
          creation button, it&apos;s now easier than ever to establish a new
          daily routine that can help you reach your goals.
        </motion.p>
      </motion.div>
    </Link>
  );
}
