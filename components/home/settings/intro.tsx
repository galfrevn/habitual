import { Settings } from 'lucide-react';

export function SettingsIntro() {
  return (
    <div className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-neutral-800 via-nuetral-900 to-black p-6 no-underline outline-none focus:shadow-md transition-all duration-100'>
      <Settings className='h-6 w-6 text-white' />
      <h2 className='mt-4 mb-2 text-lg font-medium text-white'>Settings</h2>
      <p className='text-sm leading-tight text-white/90'>
        Personalize your settings to fit your needs and preferences, from
        setting reminder notifications to choosing your preferred measurement
        units.
      </p>
    </div>
  );
}
