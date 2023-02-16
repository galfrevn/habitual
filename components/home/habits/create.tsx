import Link from 'next/link';

export function CreateHabit() {
  return (
    <Link href='/habits/tracker/new'>
      <div className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-r from-rose-700 to-pink-600 p-6 no-underline outline-none focus:shadow-md hover:scale-[.98] transition-all duration-100'>
        <div className='mt-4 mb-2 text-lg font-medium text-white'>
          Create a new habit
        </div>
        <p className='text-sm leading-tight text-white/90'>
          Creating new habits can be challenging, but with our one-click habit
          creation button, it&apos;s now easier than ever to establish a new daily
          routine that can help you reach your goals.
        </p>
      </div>
    </Link>
  );
}
