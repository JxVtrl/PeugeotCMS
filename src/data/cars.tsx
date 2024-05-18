export type CarsProps = {
  id: number;
  nome: string;
  modelo: string;
  agenda?: string[];
};

export const cars: CarsProps[] = [
  {
    id: 1,
    nome: 'Carro A',
    modelo: 'Sedan',
    agenda: [`2021-10-10`, `2021-10-11`, `2021-10-12`],
  },
  {
    id: 2,
    nome: 'Carro B',
    modelo: 'SUV',
    agenda: [`2021-10-10`, `2021-10-11`, `2021-10-12`],
  },
  {
    id: 3,
    nome: 'Carro C',
    modelo: 'Hatchback',
    agenda: [`2021-10-10`, `2021-10-11`, `2021-10-12`],
  },
  {
    id: 4,
    nome: 'Carro D',
    modelo: 'Coupe',
    agenda: [`2021-10-10`, `2021-10-11`, `2021-10-12`],
  },
  {
    id: 5,
    nome: 'Carro E',
    modelo: 'Convertible',
    agenda: [`2021-10-10`, `2021-10-11`, `2021-10-12`],
  },
  {
    id: 6,
    nome: 'Carro F',
    modelo: 'Pickup',
    agenda: [`2021-10-10`, `2021-10-11`, `2021-10-12`],
  },
  {
    id: 7,
    nome: 'Carro G',
    modelo: 'Minivan',
    agenda: [`2021-10-10`, `2021-10-11`, `2021-10-12`],
  },
  {
    id: 8,
    nome: 'Carro H',
    modelo: 'Wagon',
    agenda: [`2021-10-10`, `2021-10-11`, `2021-10-12`],
  },
  {
    id: 9,
    nome: 'Carro I',
    modelo: 'Crossover',
    agenda: [`2021-10-10`, `2021-10-11`, `2021-10-12`],
  },
  {
    id: 10,
    nome: 'Carro J',
    modelo: 'Electric',
    agenda: [`2021-10-10`, `2021-10-11`, `2021-10-12`],
  },
];
