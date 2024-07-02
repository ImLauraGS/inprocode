
import React, { useContext } from 'react';
import { ExpensesContext } from '../contexts/ExpensesContext';

export default function Total() {
    const { getWeeklyBalance } = useContext(ExpensesContext);
  
      return (
        <div>
          <h2>Balance semanal</h2>
          <p>Total de gastos de esta semana: €{getWeeklyBalance()}</p>
        </div>
      );
    };
