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
import { useAdmin } from '@/context/AdminContext';

const Administradores: React.FC = () => {
  const router = useRouter();

  const { adminList, setAdminList } = useAdmin();

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
    const index = adminList.findIndex((admin, index) => admin.id === id);
    adminList.splice(index, 1);
    setAdminList([...adminList]);
  }

  useEffect(() => {
    setFilteredAdmins(
      adminList.filter(admin =>
        admin.fullName.toLowerCase().includes(inputSearch.toLowerCase()),
      ),
    );
  }, [inputSearch, adminList]);

  const rows = filteredAdmins.map((admin) => {
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
