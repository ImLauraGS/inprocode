import React, { useContext } from 'react';
import { ExpensesContext } from '../contexts/ExpensesContext';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export default function WeeklyGraph() {
  const { expenses } = useContext(ExpensesContext);

  // Calculate daily expenses
  const weekDays = ["dl", "dt", "dm", "dj", "dv", "ds", "dg"];
  const dailyExpenses = new Array(7).fill(0);

  const currentDate = new Date();
  const currentDayOfWeek = currentDate.getDay();
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDayOfWeek + (currentDayOfWeek === 0 ? -6 : 1)); 
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

  const chartData = {
    labels: weekDays,
    datasets: [
      {
        label: 'Gastos',
        data: dailyExpenses,
        backgroundColor: 'rgba(0, 220, 195, 0.5)'
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        min: 0,
        max: Math.max(...dailyExpenses) + 50,
      },
      x: {
        ticks: { color: 'rgba(0, 220, 195)' }
      }
    }
  };

  return (
    <section>
      <Bar data={chartData} options={chartOptions} />
    </section>
  );
}
