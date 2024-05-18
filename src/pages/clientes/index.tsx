import ActionButtons from '@/components/ActionButtons';
import Header from '@/components/Header';
import Table from '@/components/Table';
import { useRouter } from 'next/router';
import React from 'react';
import * as S from './styles';
import { usePageTitle } from "@/hooks/usePageTitle";

const Clientes: React.FC = () => {
  usePageTitle("Taylor Dashboard - Clientes");

    const router = useRouter();

  const columns = [
    { title: 'Ações', field: 'actions' },
    { title: 'Nome', field: 'name' },
    { title: 'Rota', field: 'route' },
    { title: 'CPF', field: 'cpf' },
    { title: 'Celular', field: 'celphone' },
    { title: 'Telefone', field: 'phone' },
  ];

  const rows = [
    {
      actions: (
        <ActionButtons type='edit-delete' deleteAction={() => null} editAction={() => null} />
      ),
      name: 'Coca-Cola',
      rota: 'Coca-Cola',
      cpf: '123.456.789-00',
      celphone: '123.456.789-00',
      phone: '123.456.789-00',
    },
  ];

  const handleNewClient = () => {
    router.push('/clientes/novo');
  };
  return (
  <S.Container>
      <Header
        inputOnChange={() => null}
        inputValue=""
        inputLabel="Buscar"
        inputPlaceholder="Digite o cpf ou nome do cliente"
        handleButton={handleNewClient}
      />
      <Table columns={columns} rows={rows} />
    </S.Container>
    );
};

export default Clientes;
