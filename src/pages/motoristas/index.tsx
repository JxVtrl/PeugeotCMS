import ActionButtons from '@/components/ActionButtons';
import Header from '@/components/Header';
import Table from '@/components/Table';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import * as S from './styles';
import { usePageTitle } from '@/hooks/usePageTitle';
import Tabs from '@/components/Tabs';

type DriversList = {
  future: {
    id: string | number;
    name: string;
    route: string;
    cpf: string;
    celphone: string;
    phone: string;
  }[];
  past: {
    id: string | number;
    name: string;
    route: string;
    cpf: string;
    celphone: string;
    phone: string;
  }[];
};

const Motoristas: React.FC = () => {
  usePageTitle('Taylor Dashboard - Motoristas');
  const router = useRouter();
  const [inputSearch, setInputSearch] = React.useState('');

  const columns = [
    { title: 'Ações', field: 'actions' },
    { title: 'Nome', field: 'name' },
    { title: 'Rota', field: 'route' },
    { title: 'CPF', field: 'cpf' },
    { title: 'Celular', field: 'celphone' },
    { title: 'Telefone', field: 'phone' },
  ];

  const [drivers, setDrivers] = React.useState<DriversList>({
    future: [
      {
        id: '0',
        name: 'Coca-Cola Future',
        route: 'Coca-Cola',
        cpf: '123.456.789-00',
        celphone: '123.456.789-00',
        phone: '123.456.789-00',
      },
    ],
    past: [
      {
        id: '1',
        name: 'Coca-Cola Past',
        route: 'Coca-Cola',
        cpf: '123.456.789-00',
        celphone: '123.456.789-00',
        phone: '123.456.789-00',
      },
    ],
  });

  const [filteredDrivers, setFilteredDrivers] = React.useState<DriversList>({
    future: [],
    past: [],
  });

  useEffect(() => {
    setFilteredDrivers(drivers);
  }, [drivers]);

  const handleNewClient = () => {
    router.push('/motoristas/novo');
  };

  const handleSearch = (value: string) => {
    setInputSearch(value);
  };

  // filter drivers
  React.useEffect(() => {
    const futureFiltered = drivers.future.filter(driver => {
      return (
        driver.name.includes(inputSearch) || driver.cpf.includes(inputSearch)
      );
    });

    const pastFiltered = drivers.past.filter(driver => {
      return (
        driver.name.includes(inputSearch) || driver.cpf.includes(inputSearch)
      );
    });

    setFilteredDrivers({
      future: futureFiltered,
      past: pastFiltered,
    });
  }, [inputSearch]);

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

  const futureDrivers = filteredDrivers.future.map(driver => {
    return {
      ...driver,
      actions: (
        <ActionButtons
          type="edit-delete"
          editAction={() => null}
          deleteAction={() => deleteDriver(driver)}
        />
      ),
    };
  });

  const pastDrivers = filteredDrivers.past.map(driver => {
    return {
      ...driver,
      actions: (
        <ActionButtons
          type="delete"
          deleteAction={() => deleteDriver(driver)}
        />
      ),
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
            title: 'Futuros',
            content: <Table columns={columns} rows={futureDrivers} />,
          },
          {
            title: 'Passados',
            content: <Table columns={columns} rows={pastDrivers} />,
          },
        ]}
      />
    </S.Container>
  );
};

export default Motoristas;
