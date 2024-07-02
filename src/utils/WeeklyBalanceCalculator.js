export const getWeeklyBalance = (expenses, currentDate = new Date()) => {
  const currentDayOfWeek = currentDate.getDay();
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDayOfWeek + 1); 

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);

  return expenses.reduce((total, expense) => {
    const expenseDate = new Date(expense.date);
    if (expenseDate >= startOfWeek && expenseDate <= endOfWeek) {
      return total + expense.amount;
    }
    return total;
  }, 0);
};
