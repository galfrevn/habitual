import Link from 'next/link';

export function EditHabit() {
  return (
    <Link href='/habits/edit'>
      <div className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-700 to-violet-600 p-6 no-underline outline-none focus:shadow-md hover:scale-[.98] transition-all duration-100'>
        <div className='mt-4 mb-2 text-lg font-medium text-white'>
          Edit a habit
        </div>
        <p className='text-sm leading-tight text-white/90'>
          Revise your routine. Edit existing habits and stay on track towards
          your goals!
        </p>
      </div>
    </Link>
  );
}
