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
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [carToUpdate, setCarToUpdate] = useState<CarsProps | null>(null);

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
          editAction={() => {
            setCarToUpdate(car);
            setShowUpdateModal(true);
          }}
        />
      ),
      name: car.nome,
      schedule: car.agenda,
    };
  });

  function updateCar(name: string) {
    if (carToUpdate) {
      carToUpdate.nome = name;
      setCars([...cars]);
    }
  }

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
      {showUpdateModal && (
        <S.Modal>
          <S.ModalContent>
            <S.ModalHeader>
              <h2>Atualizar carro</h2>
              <button onClick={() => setShowUpdateModal(false)}>X</button>
            </S.ModalHeader>
            <S.ModalBody>
              <input
                type="text"
                onChange={e => updateCar(e.target.value)}
                value={carToUpdate?.nome}
              />
            </S.ModalBody>
            <S.ModalFooter>
              <S.Button
                onClick={() => {
                  setShowUpdateModal(false);
                }}
              >
                Atualizar
              </S.Button>
            </S.ModalFooter>
          </S.ModalContent>
        </S.Modal>
      )}
    </S.Container>
  );
};

export default Carros;
