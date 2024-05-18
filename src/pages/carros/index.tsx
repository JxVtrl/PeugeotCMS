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

const Carros: React.FC = () => {
  const { cadasteredCars } = useCars();

  const [cars, setCars] = useState<CarsProps[]>(cadasteredCars);

  function deleteCar(id: number) {
    const index = cars.findIndex(car => car.id === id);
    cars.splice(index, 1);
    setCars([...cars]);
  }

  usePageTitle('Dashboard - Carros');

  const router = useRouter();

  const columns = [
    { title: 'Ações', field: 'actions' },
    { title: 'Nome', field: 'name' },
    { title: 'Modelo', field: 'model' },
    { title: 'Agenda', field: 'schedule' },
  ];

  useEffect(() => {
    console.log(cars);
  }, cars);

  const rows = cars.map(car => {
    return {
      actions: (
        <ActionButtons
          type="edit-delete"
          deleteAction={() => deleteCar(car.id)}
          editAction={() => updateCar(car.id)}
        />
      ),
      name: car.nome,
      model: car.modelo,
      schedule: car.agenda,
    };
  });

  const handleNewCar = () => {
    router.push('/carros/novo');
  };

  return (
    <S.Container>
      <Header
        inputOnChange={() => null}
        inputValue=""
        inputLabel="Buscar"
        inputPlaceholder="Digite o cpf ou nome do cliente"
        handleButton={handleNewCar}
      />
      <Table columns={columns} rows={rows} />
    </S.Container>
  );
};

export default Carros;