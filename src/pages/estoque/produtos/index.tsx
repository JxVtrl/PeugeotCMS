import { usePageTitle } from '@/hooks/usePageTitle';
import { Table } from '@/components';
import ActionButtons from '@/components/ActionButtons';
import Header from '@/components/Header';
import { useDashboard } from '@/context';
import { useRouter } from 'next/router';
import React from 'react';

import * as S from './styles';

const Produtos: React.FC = () => {
  usePageTitle("Taylor Dashboard - Produtos");

    const router = useRouter();
  const { storage }: any = useDashboard()

  const columns = [
    { title: 'Ações', field: 'actions' },
    { title: 'Código', field: 'code' },
    { title: 'Nome', field: 'name' },
    { title: 'Preço de venda', field: 'sale_value' },
    { title: 'Tipo de produto', field: 'type' },
    { title: 'Und de medida', field: 'measure_und' },
    { title: 'Código NCM', field: 'ncm_code' },
    // { title: 'Largura (Em cm)', field: 'width' },
    // { title: 'Altura (Em cm)', field: 'height' },
    { title: 'Local de estoque', field: 'local' },
  ];

  const products = storage?.map((storage: any) => storage.products).flat();

  const rows = products?.map((product: any) => ({
    actions: (
      <ActionButtons
        type="edit-delete"
        deleteAction={() => null}
        editAction={() => null}
      />
    ),
    code: product.product_code,
    name: product.name,
    sale_value: product.sale_price,
    type: product.product_type,
    measure_und: product.measurement_unit,
    ncm_code: product.product_ncm,
    // width: product.width,
    // height: product.height,
    local: product.local,
  }));

  const handleNewProduct = () => {
    router.push('/estoque/produtos/novo');
  };

  return (
    <S.Container>
      <Header
        inputOnChange={() => null}
        inputValue=""
        inputLabel="Buscar"
        inputPlaceholder="Digite o código ou nome do produto"
        handleButton={handleNewProduct}
      />
      <Table columns={columns} rows={rows} />
    </S.Container>
  );
}

export default Produtos;