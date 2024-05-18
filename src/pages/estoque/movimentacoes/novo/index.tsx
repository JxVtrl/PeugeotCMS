import { usePageTitle } from '@/hooks/usePageTitle';
import { Modal, Table } from '@/components';
import ActionButtons from '@/components/ActionButtons';
import NewForm from '@/components/NewForm';
import { useDashboard } from '@/context';
import { ButtonProps } from '@/interfaces/Button.interface';
import { FormColumnProps, FormItemProps } from '@/interfaces/Form.interface';
import { ProductAddedProps } from '@/interfaces/Product.interface';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import * as S from './styles';

const Novo: React.FC = () => {
  usePageTitle('Taylor Dashboard - Nova movimentação');

  const [local, setLocal] = useState<string>('');
  const [invoiceNumber, setInvoiceNumber] = useState<string>('');
  const [invoiceDate, setInvoiceDate] = useState<string>('');
  const [discount, setDiscount] = useState<string>('');

  const [movementType, setMovementType] = useState<'income' | 'outcome'>(
    'income',
  );
  const [productsAdded, setProductsAdded] = useState<ProductAddedProps[]>([]);
  const [openAddProductModal, setOpenAddProductModal] =
    useState<boolean>(false);

  const [newProduct, setNewProduct] = useState<string>('');
  const [newProductQuantity, setNewProductQuantity] = useState<string>('');
  const [newProductPurchaseValue, setNewProductPurchaseValue] =
    useState<string>('');
  const [newProductIcms, setNewProductIcms] = useState<string>('');

  const { storage, setStorage }: any = useDashboard();

  const router = useRouter();

  const handleSaveMovement = () => {
    const newStorage = storage.map((item: any) => {
      if (item.id === local) {
        return {
          ...item,
          movements: [
            ...item.movements,
            {
              id: item.movements.length + 1,
              type: movementType,
              date: new Date().toISOString(),
              operator: 'Operador 1',
              products: productsAdded,
            },
          ],
        };
      }

      return item;
    });

    setStorage(newStorage);

    router.push('/estoque/movimentacoes');
  };

  const formTitle = 'Cadastrar nova movimentação';

  const formButtons: ButtonProps[] = [
    {
      text: 'Voltar',
      variant: 'secondary',
      onClick: () => router.push('/estoque/movimentacoes'),
    },
    {
      text: 'Salvar',
      variant: 'primary',
      onClick: handleSaveMovement,
    },
  ];

  const formItems: FormItemProps[] =
    movementType === 'income'
      ? [
          {
            label: 'Local de estoque',
            placeholder: 'Selecione o local de estoque',
            value: local,
            type: 'select',
            data: storage,
            required: true,
            onChange: setLocal,
          },
          {
            label: 'Número da nota fiscal',
            placeholder: 'Digite o número da nota fiscal',
            value: invoiceNumber,
            type: 'text',
            required: false,
            onChange: setInvoiceNumber,
          },
          {
            label: 'Data de emissão da nota fiscal',
            placeholder: 'Digite a data de emissão da nota fiscal',
            value: invoiceDate,
            mask: 'date',
            type: 'text',
            onChange: setInvoiceDate,
          },
          {
            label: 'Desconto (%)',
            placeholder: 'Digite o desconto',
            value: discount,
            mask: 'percentage',
            type: 'text',
            onChange: setDiscount,
          },
        ]
      : [
          {
            label: 'Local de estoque',
            placeholder: 'Selecione o local de estoque',
            value: local,
            type: 'select',
            data: storage,
            required: true,
            onChange: setLocal,
          },
        ];

  const columns: FormColumnProps[] = [
    {
      title: 'Ações',
      field: 'actions',
    },
    {
      title: 'Nome',
      field: 'name',
    },
    {
      title: 'Valor de compra',
      field: 'purchaseValue',
    },
    {
      title: 'Quantidade',
      field: 'quantity',
    },
    {
      title: 'ICMS',
      field: 'icms',
    },
    {
      title: 'Tipo de movimentação',
      field: 'movementType',
    },
  ];

  const rows = productsAdded.map(product => ({
    actions: <ActionButtons type="edit-delete" />,
    name: product.name,
    purchaseValue: product.purchaseValue,
    quantity: product.quantity,
    icms: product.icms,
    movementType: product.movementType,
  }));

  const headChildren = (
    <>
      <S.MovementTypeContainer>
        <S.MovementTypeButton
          active={movementType === 'income'}
          variant="income"
          onClick={() => setMovementType('income')}
        >
          Entrada
        </S.MovementTypeButton>
        <S.MovementTypeButton
          active={movementType === 'outcome'}
          variant="outcome"
          onClick={() => setMovementType('outcome')}
        >
          Saída
        </S.MovementTypeButton>
      </S.MovementTypeContainer>
    </>
  );

  const children = (
    <>
      <S.ProductHeader>
        <S.Title>Produtos</S.Title>
        <S.AddProductButton
          onClick={() => local && setOpenAddProductModal(true)}
          disabled={!local}
        >
          Adicionar
        </S.AddProductButton>
      </S.ProductHeader>
      <Table columns={columns} rows={rows} />
    </>
  );

  const handleNewProduct = () => {
    const newProductAdded = {
      id: productsAdded.length + 1,
      name: newProduct,
      purchaseValue: newProductPurchaseValue,
      quantity: Number(newProductQuantity),
      icms: Number(newProductIcms),
      movementType: movementType === 'income' ? 'entrada' : 'saída',
    };

    setProductsAdded([...productsAdded, newProductAdded]);
    setOpenAddProductModal(false);
  };

  return (
    <S.Container>
      <NewForm
        title={formTitle}
        buttons={formButtons}
        items={formItems}
        headChildren={headChildren}
      >
        {children}
      </NewForm>
      <Modal
        closeBtn
        isOpen={openAddProductModal}
        onClose={() => setOpenAddProductModal(false)}
      >
        <NewForm
          title="Adicionar produto"
          buttons={[
            {
              variant: 'secondary',
              text: 'Voltar',
              onClick: () => setOpenAddProductModal(false),
            },
            {
              variant: 'primary',
              text: 'Adicionar',
              onClick: handleNewProduct,
            },
          ]}
          items={[
            {
              label: 'Produto',
              onChange: setNewProduct,
              value: newProduct,
              data: storage.filter((item: any) => item.name === local)[0]
                ?.products,
              type: 'select',
              placeholder: 'Selecione o produto',
            },
            {
              label: 'Valor de compra',
              onChange: setNewProductPurchaseValue,
              value: newProductPurchaseValue,
              type: 'text',
              placeholder: 'Digite o valor de compra',
            },
            {
              label: 'Quantidade',
              onChange: setNewProductQuantity,
              value: newProductQuantity,
              type: 'text',
              placeholder: 'Digite a quantidade',
            },
            {
              label: 'ICMS',
              onChange: setNewProductIcms,
              value: newProductIcms,
              type: 'text',
              placeholder: 'Digite o ICMS',
            },
          ]}
        />
      </Modal>
    </S.Container>
  );
};

export default Novo;
