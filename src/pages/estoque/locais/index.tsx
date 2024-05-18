import { usePageTitle } from '@/hooks/usePageTitle';
import { Table } from '@/components';
import ActionButtons from '@/components/ActionButtons';
import Header from '@/components/Header';
import { useDashboard } from '@/context';
import { useRouter } from 'next/router';
import React from 'react';
import * as S from './styles';

const Locais: React.FC = () => {
  usePageTitle("Taylor Dashboard - Locais de estoque");

  const router = useRouter();
  const { storage}: any = useDashboard();

  const handleNewMovement = () => {
    router.push('/estoque/locais/novo');
  };

    const columns = [
    { title: 'Ações', field: 'actions' },
    { title: 'Nome', field: 'name' },
    { title: 'Observação', field: 'obs' },
  ];

  // const rows = [
  //   {
  //     actions: (
  //       <ActionButtons type='edit-delete' deleteAction={() => null} editAction={() => null} />
  //     ),
  //     name: 'Coca-Cola',
  //     obs: 'Coca-Cola',
  //   },
  // ];
  
  const rows = storage.map((location: any) => ({
    actions: (
      <ActionButtons type='edit-delete' deleteAction={() => null} editAction={() => null} />
    ),
    name: location.name,
    obs: location.obs,
  }));

  return (
    <S.Container>
      <Header handleButton={handleNewMovement} inputOnChange={() => {}} inputValue="" />
      <Table columns={columns} rows={rows} />
    </S.Container>
  );
}

export default Locais;