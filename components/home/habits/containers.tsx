import  { ReactNode } from 'react'

export function HabitsSingleContainer({ children }: { children: ReactNode }) {
  return (
    <div className='mt-4 flex flex-col gap-4' >
      {children}
    </div>
  )
}