import ActionButtons from '@/components/ActionButtons';
import Header from '@/components/Header';
import Table from '@/components/Table';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import * as S from './styles';
import { usePageTitle } from '@/hooks/usePageTitle';
import Tabs from '@/components/Tabs';
import { columns_motoristas } from '@/data/columns';
import axios from 'axios';

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
};

export const drivers_mock = [
  {
    id: 0,
    name: 'João',
    cpf: '123.456.789-00',
    email: 'joao@gmail.com',
    phone: '11 1234-5678',
    seller_code: '123456',
    schedule: '2021-09-10T15:00:00.000Z',
    car: 'Fusca',
  },
  {
    id: 1,
    name: 'Maria',
    cpf: '987.654.321-00',
    email: 'maria@gmail.com',
    phone: '11 9876-5432',
    seller_code: '654321',
    schedule: '2021-09-10T15:00:00.000Z',
    car: 'Gol',
  },
];

const Motoristas: React.FC = () => {
  usePageTitle('Motoristas');
  const router = useRouter();
  const [inputSearch, setInputSearch] = React.useState('');

  const [drivers, setDrivers] = React.useState<DriversList>({
    future: [],
    past: [],
  });

  const [filteredDrivers, setFilteredDrivers] = React.useState<DriversList>({
    future: [],
    past: [],
  });

  const filterDriver = (drivers: DriverProps[], type: 'future' | 'past') => {
    let list = [];

    if (type === 'future') {
      list = drivers.filter(driver => new Date(driver.schedule) > new Date());
    } else {
      list = drivers.filter(driver => new Date(driver.schedule) < new Date());
    }
    return list;
  };

  useEffect(() => {
    const futureDrivers = filterDriver(drivers_mock, 'future');
    const pastDrivers = filterDriver(drivers_mock, 'past');

    setDrivers({
      future: futureDrivers,
      past: pastDrivers,
    });
  }, []);

  React.useEffect(() => {
    const getAllDrivers = async () => {
      let response = await axios.get('http://localhost:3036/api/users/list');
      console.log(response.data);
    };

    getAllDrivers();

    const future = drivers.future.filter(driver => {
      return (
        driver.name.toLowerCase().includes(inputSearch.toLowerCase()) ||
        driver.cpf.includes(inputSearch)
      );
    });

    const past = drivers.past.filter(driver => {
      return (
        driver.name.toLowerCase().includes(inputSearch.toLowerCase()) ||
        driver.cpf.includes(inputSearch)
      );
    });

    setFilteredDrivers({
      future,
      past,
    });
  }, [inputSearch, drivers]);

  const handleNewClient = () => {
    router.push('/motoristas/novo');
  };

  const handleSearch = (value: string) => {
    setInputSearch(value);
  };

  const removeDriverFromDB = (driver: any) => {
    return new Promise(resolve => {
      resolve(driver);
    });
  };

  const setNewDriverList = (drivers: DriversList) => {
    setDrivers(drivers);
  };

  const deleteDriver = (driver: any) => {
    try {
      removeDriverFromDB(driver).then(() => {
        const futureDrivers = drivers.future.filter(d => d.id !== driver.id);
        const pastDrivers = drivers.past.filter(d => d.id !== driver.id);

        setNewDriverList({
          future: futureDrivers,
          past: pastDrivers,
        });
      });
    } catch (error) {
      console.log('Error deleting driver', error);
    }
  };

  const futureRows = filteredDrivers.future.map(driver => {
    return {
      actions: (
        <ActionButtons
          type="edit-delete"
          deleteAction={() => deleteDriver(driver)}
          editAction={() => router.push(`/motoristas/editar/${driver.id}`)}
        />
      ),
      ...driver,
    };
  });

  const pastRows = filteredDrivers.past.map(driver => {
    return {
      actions: (
        <ActionButtons
          type="edit-delete"
          deleteAction={() => deleteDriver(driver)}
          editAction={() => router.push(`/motoristas/editar/${driver.id}`)}
        />
      ),
      ...driver,
    };
  });

  return (
    <S.Container>
      <Header
        inputOnChange={(e: any) => handleSearch(e.target.value)}
        inputValue={inputSearch}
        inputLabel="Buscar"
        inputPlaceholder="Digite o cpf ou nome do Motorista"
        handleButton={handleNewClient}
      />

      <Tabs
        tabs={[
          {
            title: 'Atuais',
            content: <Table columns={columns_motoristas} rows={futureRows} />,
          },
          {
            title: 'Passados',
            content: <Table columns={columns_motoristas} rows={pastRows} />,
          },
        ]}
      />
    </S.Container>
  );
};

export default Motoristas;
