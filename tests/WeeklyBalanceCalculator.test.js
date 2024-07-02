import { describe, it, expect } from 'vitest';
import { getWeeklyBalance } from '../src/utils/WeeklyBalanceCalculator';
const mockExpenses = [
    { date: '2024-01-01', amount: 120 },
    { date: '2024-01-02', amount: 150 },
    { date: '2024-01-05', amount: 200 },
    { date: '2024-01-10', amount: 180 },
    { date: '2024-01-15', amount: 170 },
  ];
  
  describe('getWeeklyBalance', () => {
    it('should return the correct balance for the current week', () => {
      const mockCurrentDate = new Date('2024-01-10');
      const balance = getWeeklyBalance(mockExpenses, mockCurrentDate);
      expect(balance).toBe(180);
    });
  
    it('should return 0 if there are no expenses in the current week', () => {
      const mockCurrentDate = new Date('2024-04-20');
      const balance = getWeeklyBalance(mockExpenses, mockCurrentDate);
      expect(balance).toBe(0);
    });
  
    it('should return 0 if expenses array is empty', () => {
      const balance = getWeeklyBalance([], new Date('2024-01-10'));
      expect(balance).toBe(0);
    });
  });