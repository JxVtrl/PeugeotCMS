import { usePageTitle } from '@/hooks/usePageTitle';
import NewForm from '@/components/NewForm';
import { ButtonProps } from '@/interfaces/Button.interface';
import { FormItemProps } from '@/interfaces/Form.interface';
import { useRouter } from 'next/router';
import React from 'react';

import * as S from './styles';
import { useDashboard } from '@/context';

const Novo: React.FC = () => {
  usePageTitle("Taylor Dashboard - Novo Produto");
  const [name, setName] = React.useState<string>('');
  const [saleValue, setSaleValue] = React.useState<string>('');
  const [identifierCode, setIdentifierCode] = React.useState<string>('');
  const [ncmCode, setNcmCode] = React.useState<string>('');
  const [measureUnit, setMeasureUnit] = React.useState<string>('');
  const [productType, setProductType] = React.useState<string>('');
  const [storageLocal, setStorageLocal] = React.useState<string>('');

  const router = useRouter();

  const { storage, setStorage }: any = useDashboard();

  const handleSaveProduct = () => { 
    // get correct storage
    const storageIndex = storage.findIndex((item: any) => item.name === storageLocal);

    const newStorage = [
      ...storage,
    ];

    newStorage[storageIndex].products = [
      ...newStorage[storageIndex].products,
      {
        id: newStorage[storageIndex].products.length + 1,
        name,
        sale_price: saleValue,
        product_code: identifierCode,
        product_ncm: ncmCode,
        measurement_unit: measureUnit,
        product_type: productType,
        local: storageLocal,
      }
    ];

    setStorage(newStorage);

    router.push('/estoque/produtos');
  };

  const title = 'Cadastrar novo produto';

  const buttons = [
    {
      text: 'Voltar',
      variant: 'secondary',
      onClick: () => router.push('/estoque/produtos'),
    },
    {
      text: 'Salvar',
      variant: 'primary',
      onClick: handleSaveProduct,
    }
  ] as ButtonProps[]

  const items = [
    {
      label: 'Nome',
      placeholder: 'Digite o nome',
      value: name,
      type: 'text',
      required: true,
      onChange: setName,
    },
    {
      label: 'Valor de venda',
      placeholder: 'Digite o valor de venda',
      value: saleValue,
      type: 'number',
      mask: 'currency',
      required: true,
      onChange: setSaleValue,
    },
    {
      label: 'Código identificador',
      placeholder: 'Digite o código identificador',
      value: identifierCode,
      type: 'text',
      onChange: setIdentifierCode,
    },
    {
      label: 'Código NCM',
      placeholder: 'Digite o código NCM',
      value: ncmCode,
      type: 'text',
      onChange: setNcmCode,
    },
    {
      label: 'Unidade de medida',
      placeholder: 'Digite a unidade de medida',
      value: measureUnit,
      data: [
        'Unidade',
      ],
      type: 'select',
      required: true,
      onChange: setMeasureUnit,
    },
    {
      label: 'Tipo de produto',
      placeholder: 'Selecione o tipo de produto',
      value: productType,
      data: [
        'Produto',
        'Serviço',
      ],
      type: 'select',
      required: true,
      onChange: setProductType,
    },
    {
      label: 'Local de estoque',
      placeholder: 'Selecione o local de estoque',
      value: storageLocal,
      data: storage.map((item: any) => item.name),
      type: 'select',
      required: true,
      onChange: setStorageLocal,
    }
  ] as FormItemProps[]

  return (
    <S.Container>
      <NewForm
        title={title}
        buttons={buttons}
        items={items}
      />
    </S.Container>
  );
}

export default Novo;