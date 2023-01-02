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

export const categories = [
  { name: 'Comida', cor: '#FF3030' },
  { name: 'Beleza', cor: '#FFE601' },
  { name: 'Casa', cor: '#00D1FF' },
  { name: 'Animal', cor: '#00A725' },
];

export const dictionaryCategories = {
  A: 1,
  B: 2,
  C: 3,
};

export type dictionaryCategoriesI = typeof dictionaryCategories;

export const transactionsExample = [
  {
    id: 555,
    title: 'Gasolina',
    type: 'out',
    value: 15.0,
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
    value: 3000.0,
    date: '15/11',
  },
];
