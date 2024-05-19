import React, { useState } from 'react';
import NewForm from '@/components/NewForm';
import { ButtonProps } from '@/interfaces/Button.interface';
import { FormItemProps } from '@/interfaces/Form.interface';
import { useRouter } from 'next/router';
import * as S from './styles';
import { usePageTitle } from '@/hooks/usePageTitle';
import { useCars } from '@/context/CarsContext';
import { CarsProps } from '@/data/cars';

const Novo: React.FC = () => {
  const { cars, setCars } = useCars();

  const [carName, setCarName] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carSchedule, setCarSchedule] = useState([]);

  usePageTitle('Novo Administrador');

  const router = useRouter();

  const handleAddCar = () => {
    const newCar = {
      id: cars.length + 1,
      nome: carName,
      modelo: carModel,
      agenda: carSchedule,
    };

    setCars([...cars, newCar]);
    router.push('/administradores');
  };

  const title = 'Cadastrar novo administrador';

  const buttons = [
    {
      text: 'Voltar',
      variant: 'secondary',
      onClick: () => router.push('/administradores'),
    },
    {
      text: 'Salvar',
      variant: 'primary',
      onClick: handleAddCar,
    },
  ] as ButtonProps[];

  const items = [
    {
      label: 'Nome',
      placeholder: 'Nome do carro',
      value: carName,
      onChange: e => {
        setCarName(e);
      },
    },
    {
      label: 'Modelo',
      placeholder: 'Digite o modelo do carro',
      value: carModel,
      onChange: e => {
        setCarModel(e);
      },
    },
    {
      label: 'Agenda',
      placeholder: 'Agenda referente ao carro',
      value: carSchedule,
      onChange: e => {
        setCarSchedule(e);
      },
    },
  ] as FormItemProps[];

  return (
    <S.Container>
      <NewForm title={title} buttons={buttons} items={items} />
    </S.Container>
  );
};

export default Novo;
