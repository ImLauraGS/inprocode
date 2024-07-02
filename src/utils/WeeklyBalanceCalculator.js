export const getWeeklyBalance = (expenses, currentDate = new Date()) => {
  const currentDayOfWeek = currentDate.getDay();
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDayOfWeek + (currentDayOfWeek === 0 ? -6 : 1));
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  return expenses.reduce((total, expense) => {
    const expenseDate = new Date(expense.date);
    if (expenseDate >= startOfWeek && expenseDate <= endOfWeek) {
      return total + expense.amount;
    }
    return total;
  }, 0);
};


export const calculateTotalForDate = (expenses, date) => {
  return expenses
    .filter(expense => new Date(expense.date).toDateString() === date.toDateString())
    .reduce((total, expense) => total + expense.amount, 0);
};

export const calculateWeeklyExpenses = (expenses, currentDate = new Date()) => {
  const dailyExpenses = new Array(7).fill(0);
  
  const currentDayOfWeek = currentDate.getDay(); 
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDayOfWeek + (currentDayOfWeek === 1 ? 0 : (currentDayOfWeek === 0 ? -6 : 1))); 

  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  expenses.forEach(expense => {
    const expenseDate = new Date(expense.date);
    if (expenseDate >= startOfWeek && expenseDate <= endOfWeek) {
      const dayOfWeek = (expenseDate.getDay() + 6) % 7; 
      dailyExpenses[dayOfWeek] += expense.amount;
    }
  });

  return dailyExpenses;
};
