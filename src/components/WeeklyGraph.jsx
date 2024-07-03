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
import { useTranslation } from "react-i18next";

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
  const { calculateWeeklyExpenses } = useContext(ExpensesContext);
  const { t } = useTranslation();

  const weekDays = [
    t('week.monday'),
    t('week.tuesday'),
    t('week.wednesday'),
    t('week.thursday'),
    t('week.friday'),
    t('week.saturday'),
    t('week.sunday')
  ];
  const dailyExpenses = calculateWeeklyExpenses();

  const chartData = {
    labels: weekDays,
    datasets: [
      {
        label: t('expensesDay'),
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
    <section className='w-[100%]'>
      <Bar data={chartData} options={chartOptions} />
    </section>
  );
}
