import { usePageTitle } from "@/hooks/usePageTitle";
import { Table } from '@/components';
import ActionButtons from '@/components/ActionButtons';
import Header from '@/components/Header';
import { useRouter } from 'next/router';
import React from "react";

import * as S from './styles'

const Usuarios: React.FC = () => {
  usePageTitle("Taylor Dashboard - Usuários");

   const router = useRouter();

  const columns = [
    { title: 'Ações', field: 'actions' },
    { title: 'Nome', field: 'name' },
    { title: 'Função', field: 'role' },
    { title: 'CPF', field: 'cpf' },
    { title: 'Email', field: 'email' },
  ];

  const rows = [
    {
      actions: (
        <ActionButtons type='edit-delete' deleteAction={() => null} editAction={() => null} />
      ),
      name: 'Taylor',
      role: 'Desenvolvedor',
      cpf: '123.456.789-00',
      email: '',
    },
  ];

  const handleNewUser = () => {
    router.push('/usuarios/novo');
  };

  return (
    <S.Container>
      <Header
        inputOnChange={() => null}
        inputValue=""
        inputLabel="Buscar"
        inputPlaceholder="Digite o nome do usuário"
        handleButton={handleNewUser}
      />
      <Table columns={columns} rows={rows} />
    </S.Container>
  );
};

export default Usuarios;
