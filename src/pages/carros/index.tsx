import ActionButtons from '@/components/ActionButtons';
import Header from '@/components/Header';
import Table from '@/components/Table';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { usePageTitle } from '@/hooks/usePageTitle';
import { CarsProps, cars } from '@/data/cars';

import { addCar } from '@/utils/carsfunctions';
import { useCars } from '@/context/CarsContext';
import { columns_carros } from '@/data/columns';

const Carros: React.FC = () => {
  const router = useRouter();

  const { cadasteredCars } = useCars();

  const [cars, setCars] = useState<CarsProps[]>(cadasteredCars);
  const [filteredCars, setFilteredCars] = useState<CarsProps[]>(cadasteredCars);
  const [search, setSearch] = useState('');

  usePageTitle('Carros');

  const handleNewCar = () => {
    router.push('/carros/novo');
  };

  function deleteCar(id: number) {
    const index = cars.findIndex(car => car.id === id);
    cars.splice(index, 1);
    setCars([...cars]);
  }

  useEffect(() => {
    setFilteredCars(
      cars.filter(car => car.nome.toLowerCase().includes(search.toLowerCase())),
    );
  }, [search, cars]);

  const rows = filteredCars.map(car => {
    return {
      actions: (
        <ActionButtons
          type="edit-delete"
          deleteAction={() => deleteCar(car.id)}
          editAction={() => updateCar(car.id)}
        />
      ),
      name: car.nome,
      schedule: car.agenda,
    };
  });

  return (
    <S.Container>
      <Header
        inputOnChange={(e: any) => setSearch(e.target.value)}
        inputValue={search}
        inputLabel="Buscar"
        inputPlaceholder="Digite o cpf ou nome do cliente"
        handleButton={handleNewCar}
      />
      <Table columns={columns_carros} rows={rows} />
    </S.Container>
  );
};

export default Carros;
