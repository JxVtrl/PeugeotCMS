'use client';
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from 'react';

type DriversContextProps = {
  drivers: DriversList;
  setDrivers: React.Dispatch<React.SetStateAction<DriversList>>;
};

const DriversContext = createContext({} as DriversContextProps);

type DriverProps = {
  id: string | number;
  name: string;
  cpf: string;
  email: string;
  phone: string;
  seller_code: string;
  schedule: string;
  car: string;
};

type DriversList = {
  future: DriverProps[];
  past: DriverProps[];
  all: DriverProps[];
};

export function DriversProvider({ children }: any) {
  const [drivers, setDrivers] = React.useState<DriversList>({
    future: [],
    past: [],
    all: [],
  });

  const value = {
    drivers,
    setDrivers,
  };

  return (
    <DriversContext.Provider value={value}>{children}</DriversContext.Provider>
  );
}

export function useDrivers() {
  return useContext(DriversContext);
}
