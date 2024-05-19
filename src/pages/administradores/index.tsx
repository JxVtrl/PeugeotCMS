import ActionButtons from '@/components/ActionButtons';
import Header from '@/components/Header';
import Table from '@/components/Table';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { usePageTitle } from '@/hooks/usePageTitle';

import { columns_administradores } from '@/data/columns';
import { admins_mock } from '@/data/admins';
import { AdminProps } from '@/interfaces/Admin.interface';

const Administradores: React.FC = () => {
  const router = useRouter();

  const [admins, setAdmins] = useState<AdminProps[]>(admins_mock);
  const [filteredAdmins, setFilteredAdmins] =
    useState<AdminProps[]>(admins_mock);
  const [inputSearch, setInputSearch] = React.useState('');

  usePageTitle('Administradores');
  
    const handleSearch = (value: string) => {
    setInputSearch(value);
  };


  const handleNewAdmin = () => {
    router.push('/administradores/novo');
  };

  function deleteAdmin(id: number | string) {
    const index = admins.findIndex(admin => admin.id === id);
    admins.splice(index, 1);
    setAdmins([...admins]);
  }

  useEffect(() => {
    setFilteredAdmins(
      admins.filter(admin =>
        admin.name.toLowerCase().includes(inputSearch.toLowerCase()),
      ),
    );
  }, [inputSearch, admins]);

  const rows = filteredAdmins.map(admin => {
    return {
      actions: (
        <ActionButtons
          type="edit-delete"
          deleteAction={() => deleteAdmin(admin.id)}
          editAction={() => {
            router.push(`/administradores/editar/${admin.id}`);
          }}
        />
      ),
      ...admin,
    };
  });

  return (
    <S.Container>
      <Header
        inputOnChange={(e: any) => handleSearch(e.target.value)}
        inputValue={inputSearch}
        inputLabel="Buscar"
        inputPlaceholder="Digite o cpf ou nome do administrador"
        handleButton={handleNewAdmin}
      />
      <Table columns={columns_administradores} rows={rows} />
    </S.Container>
  );
};

export default Administradores;
