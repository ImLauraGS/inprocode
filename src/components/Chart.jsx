import React from 'react'
import WeeklyGraph from './WeeklyGraph'
import PrevTotal from './PrevTotal'

export default function Chart() {
  return (
    <section className='bg-white flex flex-col justify-between items-center w-[40rem] rounded-2xl p-5 gap-5'>
        <WeeklyGraph/>
        <PrevTotal/>
    </section>
  )
}
