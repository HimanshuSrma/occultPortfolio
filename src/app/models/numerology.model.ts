// Types
// export type LoShuNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type LoShuNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type Gender = 'male' | 'female';

// Input from user
export interface NumerologyInput {
  name: string;
  dob: string; // Format: yyyy-mm-dd
  gender: Gender;
  mobile: number;
  email: string;
}

// Result from calculations
export interface NumerologyResult {
  name: string;
  dob: string;
  destiny: number;
  lifePath: number;
  kua: number;
  loShuGrid: Record<LoShuNumber, number>;
  loShuOrder: LoShuNumber[];
  missingNumbers: LoShuNumber[];
  excessNumbers: LoShuNumber[];
  personalYear: number;
  personalMonth: number;
  personalDay: number;
  nameTotalSum: number;
  nameNumber: number;
  mobileNumber: number;
  mobileNumberPairs: any[];
}

// Remedy suggestions (optional)
export interface NumerologyRemedy {
  number: LoShuNumber;
  type: 'missing' | 'excess';
  suggestion: string;
}

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const excessNumberVastuDoshDirection = {
  1: 'NW',
  2: 'S',
  3: 'NE',
  4: 'E',
  5: 'C',
  6: 'W',
  7: 'SW',
  8: 'N',
  9: 'SE',
};

export const vastuLoShuGrid = {
  1: 'N',
  2: 'SW',
  3: 'E',
  4: 'SE',
  5: 'C',
  6: 'NW',
  7: 'W',
  8: 'NE',
  9: 'S',
};
export const readingGuide = [
  {
    effect: 'Good Combination',
    type: 1,
  },
  {
    effect: 'Bad Combination',
    type: 0,
  },
  {
    effect: 'Neutral Combination',
    type: 2,
  },
];
export const reportYears = ['1','3','5','10'];
export interface yearlyMonths {
    calendarMonth: number;
    calendarYear: number;
    personalMonthNo: number;
    data: any;
  }[] = [];

  export interface multiYearBlocks {
    calendarYearLabel: string;
    personalYearNo: number;
    yearData: any;
  }[] = [];

