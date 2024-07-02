import React, { createContext, useState } from 'react';
import { expenses as ExpensesData } from '../data/data.json';
import { getWeeklyBalance } from '../utils/WeeklyBalanceCalculator';

export const ExpensesContext = createContext();

const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(ExpensesData);

  return (
    <ExpensesContext.Provider value={{ expenses, setExpenses, getWeeklyBalance: () => getWeeklyBalance(expenses) }}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesProvider;