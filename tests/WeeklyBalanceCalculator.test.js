import { describe, it, expect } from 'vitest';
import { getWeeklyBalance, calculateTotalForDate, calculateWeeklyExpenses } from '../src/utils/WeeklyBalanceCalculator';

const mockExpenses = [
  { "date": "2024-06-21", "amount": 20 },
  { "date": "2024-06-22", "amount": 12 },
  { "date": "2024-06-23", "amount": 40 },
  { "date": "2024-06-24", "amount": 120 },
  { "date": "2024-06-26", "amount": 400 },
  { "date": "2024-06-25", "amount": 400 },
  { "date": "2024-06-28", "amount": 410 },
  { "date": "2024-06-29", "amount": 420 },
  { "date": "2024-06-30", "amount": 430 },
  { "date": "2024-07-02", "amount": 410 },
  { "date": "2024-07-01", "amount": 440 },
];

describe('getWeeklyBalance', () => {
  it('should return the correct balance for the current week', () => {
    const mockCurrentDate = new Date('2024-07-01');
    const balance = getWeeklyBalance(mockExpenses, mockCurrentDate);
    expect(balance).toBe(850);
  });

  it('should return 0 if there are no expenses in the current week', () => {
    const mockCurrentDate = new Date('2024-04-20');
    const balance = getWeeklyBalance(mockExpenses, mockCurrentDate);
    expect(balance).toBe(0);
  });

  it('should return 0 if expenses array is empty', () => {
    const balance = getWeeklyBalance([], new Date('2024-06-29'));
    expect(balance).toBe(0);
  });
});

describe('calculateTotalForDate', () => {
  it('should return the correct total for a given date', () => {
    const date = new Date('2024-06-22');
    const total = calculateTotalForDate(mockExpenses, date);
    expect(total).toBe(12);
  });

  it('should return 0 if there are no expenses for the given date', () => {
    const date = new Date('2024-01-03');
    const total = calculateTotalForDate(mockExpenses, date);
    expect(total).toBe(0);
  });

  it('should return 0 if expenses array is empty', () => {
    const total = calculateTotalForDate([], new Date('2024-01-02'));
    expect(total).toBe(0);
  });
});

describe('calculateWeeklyExpenses', () => {
  it('should return the correct daily expenses for the current week', () => {
    const mockCurrentDate = new Date('2024-06-25');
    const dailyExpenses = calculateWeeklyExpenses(mockExpenses, mockCurrentDate);
    expect(dailyExpenses).toEqual([120, 400, 400, 0, 410, 420, 430]);
  });

  it('should return an array of zeros if there are no expenses in the current week', () => {
    const mockCurrentDate = new Date('2024-04-20');
    const dailyExpenses = calculateWeeklyExpenses(mockExpenses, mockCurrentDate);
    expect(dailyExpenses).toEqual([0, 0, 0, 0, 0, 0, 0]);
  });

  it('should return an array of zeros if expenses array is empty', () => {
    const dailyExpenses = calculateWeeklyExpenses([], new Date('2024-01-10'));
    expect(dailyExpenses).toEqual([0, 0, 0, 0, 0, 0, 0]);
  });
});
