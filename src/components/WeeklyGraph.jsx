// src/components/WeeklyGraph.js

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
  const { calculateWeeklyExpenses } = useContext(ExpensesContext);

  const weekDays = ["dl", "dt", "dm", "dj", "dv", "ds", "dg"];
  const dailyExpenses = calculateWeeklyExpenses();

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
    <section className='w-[100%]'>
      <Bar data={chartData} options={chartOptions} />
    </section>
  );
}
