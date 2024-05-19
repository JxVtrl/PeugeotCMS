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
import { cars as mockCars } from '@/data/cars';

type CarsContextProps = {
  cars: CarsProps[];
  setCars: React.Dispatch<React.SetStateAction<CarsProps[]>>;
};

const CarsContext = createContext({} as CarsContextProps);

export function CarsProvider({ children }: any) {
  const [cars, setCars] = useState<CarsProps[]>(mockCars);

  const value = {
    cars,
    setCars,
  };

  return <CarsContext.Provider value={value}>{children}</CarsContext.Provider>;
}

export function useCars() {
  return useContext(CarsContext);
}
