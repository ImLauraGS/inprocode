
import React, { useContext } from 'react';
import { ExpensesContext } from '../contexts/ExpensesContext';

export default function Total() {
    const { getWeeklyBalance } = useContext(ExpensesContext);
  
      return (
        <section className='bg-orange-600 flex justify-between items-center w-[40rem] rounded-2xl py-5 px-8 text-white' >
          <div className='flex flex-col gap-2'>
            <h2>Balanç Total</h2>
            <p className='text-3xl font-bold'>{getWeeklyBalance()}€</p>
          </div> 
          <div className='flex gap-4'>
            <img src="public/heroicons_arrow-left-solid.svg" alt="" />
            <img src="public/heroicons_arrow-right-solid.svg" alt="" />
          </div>
        </section>
      );
    };
