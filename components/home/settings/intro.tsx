import { motion } from 'framer-motion';

export function SettingsIntro() {
  return (
    <motion.div
      key='settings-intro'
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
      className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-gray-700 via-gray-900 to-black p-6 no-underline outline-none focus:shadow-md transition-all duration-100'
    >
      <motion.h2
        key='settings-intro-h2'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        className='mt-4 mb-2 text-lg font-medium text-white'
      >
        Settings
      </motion.h2>
      <motion.p
        key='settings-intro-text'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
        className='text-sm leading-tight text-white/90'
      >
        Personalize your settings to fit your needs and preferences, from
        setting reminder notifications to choosing your preferred measurement
        units.
      </motion.p>
    </motion.div>
  );
}
