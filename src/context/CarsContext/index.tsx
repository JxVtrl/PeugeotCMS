'use client';
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from 'react';

import { useRouter } from 'next/router';
import { CarsProps } from '@/data/cars';

type CarsContextProps = {
  cadasteredCars: any[];
  cars: CarsProps[];
  setCars: React.Dispatch<React.SetStateAction<CarsProps[]>>;
};

const CarsContext = createContext({} as CarsContextProps);

export function CarsProvider({ children }: any) {
  const router = useRouter();

  const cadasteredCars = [
    { id: 1, nome: 'Carro A', modelo: 'Sedan', agenda: [] },
    { id: 2, nome: 'Carro B', modelo: 'SUV', agenda: [] },
    { id: 3, nome: 'Carro C', modelo: 'Hatchback', agenda: [] },
    { id: 4, nome: 'Carro D', modelo: 'Coupe', agenda: [] },
    { id: 5, nome: 'Carro E', modelo: 'Convertible', agenda: [] },
    { id: 6, nome: 'Carro F', modelo: 'Pickup', agenda: [] },
    { id: 7, nome: 'Carro G', modelo: 'Minivan', agenda: [] },
    { id: 8, nome: 'Carro H', modelo: 'Wagon', agenda: [] },
    { id: 9, nome: 'Carro I', modelo: 'Crossover', agenda: [] },
    { id: 10, nome: 'Carro J', modelo: 'Electric', agenda: [] },
  ];
  const [cars, setCars] = useState<CarsProps[]>(cadasteredCars);

  const value = {
    cadasteredCars,
    cars,
    setCars,
  };

  return <CarsContext.Provider value={value}>{children}</CarsContext.Provider>;
}

export function useCars() {
  return useContext(CarsContext);
}
