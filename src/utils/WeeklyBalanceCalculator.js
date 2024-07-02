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
