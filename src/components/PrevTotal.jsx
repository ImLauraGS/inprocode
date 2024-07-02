
import React, { useContext, useMemo } from 'react';
import { ExpensesContext } from '../contexts/ExpensesContext';

export default function PrevTotal() {
  const { expenses, calculateTotalForDate } = useContext(ExpensesContext);

  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const todayTotal = useMemo(() => calculateTotalForDate(expenses, today), [expenses]);
  const yesterdayTotal = useMemo(() => calculateTotalForDate(expenses, yesterday), [expenses]);

  const percentageChange = yesterdayTotal !== 0 
    ? ((todayTotal - yesterdayTotal) / yesterdayTotal) * 100
    : todayTotal !== 0 
      ? 100 
      : 0;

  return (
    <section className='w-full flex justify-between'>
        <div>
            <p>Despeses avui</p>
            <p className='text-3xl font-bold'>{todayTotal.toFixed(2)}€</p>
        </div>
        <div>
        <p className='text-xl'>{percentageChange.toFixed(2)}%</p>
        <p className='text-xl'>respecte a ahir</p>
        </div>
    </section>
  );
}
