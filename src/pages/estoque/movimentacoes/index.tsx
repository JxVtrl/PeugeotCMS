import { usePageTitle } from '@/hooks/usePageTitle';
import { Table } from '@/components';
import ActionButtons from '@/components/ActionButtons';
import Header from '@/components/Header';
import { useRouter } from 'next/router';
import React from 'react';

import * as S from './styles';
import { useDashboard } from '@/context';

const Movimentacoes: React.FC = () => {
  usePageTitle("Taylor Dashboard - Movimentações");
  const [rows, setRows] = React.useState<any>([])

  const { storage }: any = useDashboard()

  const router = useRouter();

  const handleNewMovement = () => {
    router.push('/estoque/movimentacoes/novo');
  };

  const columns = [
    { title: 'Ações', field: 'actions' },
    { title: 'Tipo de Movimentação', field: 'type' },
    { title: 'Local de Estoque', field: 'local' },
    { title: 'Operador', field: 'operator' },
    { title: 'Data de movimentação', field: 'date' },
  ];

  React.useEffect(() => {
    let rows = storage.map((storage: any) => {
      return storage.movements?.map((movement: any) => {
        return {
          actions: <ActionButtons type='edit-delete' />,
          type: movement.type,
          local: storage.name,
          operator: movement.operator,
          date: movement.date,
        }
      })
    })

    setRows(rows.flat(2))
  }, [storage])

  return (
    <S.Container>
      <Header handleButton={handleNewMovement} inputOnChange={() => { }} inputValue="" />
      <Table columns={columns} rows={rows} />
    </S.Container>
  );
}

export default Movimentacoes;