import { StorageLocationsProps } from '@/interfaces/Storage.interface';
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from 'react';

const DashboardContext = createContext({});

export function DashboardProvider({ children }: any) {
  const [dashboardData, setDashboardData] = useState<any>(null);

  const [storage, setStorage] = useState<
    StorageLocationsProps[]
  >([
    {
      id: 0,
      name: 'Estoque 1',
      obs: 'Rua 1',
      products: [
        {
          id: 0,
          name: 'Produto 1',
          product_code: '123',
          sale_price: 10,
          product_type: 'Produto',
          measurement_unit: 'Unidade',
          product_ncm: '123',
          width: 10,
          height: 10,
        },
      ],
      movements: [
        {
          id: 0,
          type: 'income',
          date: '2021-01-01',
          operator: 'Operador 1',
          products: [
            {
              id: 0,
              name: 'Produto 1',
              product_code: '123',
              sale_price: 10,
              product_type: 'Produto',
              measurement_unit: 'Unidade',
              product_ncm: '123',
              width: 10,
              height: 10,
            },

          ]
        }
      ]
    },
    {
      id: 1,
      name: 'Estoque 2',
      obs: 'Rua 2',
      products: [],
      movements: []
    },
  ]);

  useEffect(() => {
    console.log('storage', storage);
  }, [storage]);
    

  const value = {
    dashboardData,
    setDashboardData,
    storage,
    setStorage,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  return useContext(DashboardContext);
}
