
export interface BackgroundPropsI {
  monthsIsFlex: string;
}

export interface MonthOptionsI {
  monthsIsFlex: string;
}

export interface transcationFormI {
  transactionType: 'enter' | 'out';
}

export interface inputsFormI {
  title: string;
  type: 'enter' | 'out';
  value: number;
  category: number | undefined;
  description: string;
}

export const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Novembro',
  'Dezembro',
];

export const dictionaryCategories = {
  A: 1,
  B: 2,
  C: 3
}

export type dictionaryCategoriesI = typeof dictionaryCategories;

export const transactionsExample = [
  {
    id: 555,
    title: 'Gasolina',
    type: 'out',
    value: 15.00,
    date: '30/11',
  },
  {
    id: 545,
    title: 'Mercado',
    type: 'out',
    value: 542.54,
    date: '27/11',
  },
  {
    id: 540,
    title: 'Sálario',
    type: 'enter',
    value: 3000.00,
    date: '15/11',
  },
];
