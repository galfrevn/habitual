import Link from 'next/link';

export function ShareHabit() {
  return (
    <Link href='/habits/share'>
      <div className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-sky-400 to-blue-500 p-6 no-underline outline-none focus:shadow-md hover:scale-[.98] transition-all duration-100'>
        <div className='mt-4 mb-2 text-lg font-medium text-white'>
          Share your habits
        </div>
        <p className='text-sm leading-tight text-white/90'>
          Spread the inspiration! Share your habits and motivate others towards
          a healthier lifestyle.
        </p>
      </div>
    </Link>
  );
}
