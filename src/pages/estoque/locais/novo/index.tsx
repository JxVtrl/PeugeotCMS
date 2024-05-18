import { usePageTitle } from '@/hooks/usePageTitle';
import React from 'react';
import NewForm from '@/components/NewForm';
import { ButtonProps } from '@/interfaces/Button.interface';
import { FormItemProps } from '@/interfaces/Form.interface';
import { useRouter } from 'next/router';

import * as S from './styles';
import { useDashboard } from '@/context';

const Novo: React.FC = () => {
  usePageTitle("Taylor Dashboard - Novo Produto");
  const [name, setName] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');

  const router = useRouter();

  const { storage, setStorage }: any = useDashboard();


  const handleSaveStorage = () => { 
    const newStorage = [
      ...storage,
      {
        id: storage.length + 1,
        name,
        obs: description,
        movements: [],
      }
    ];

    setStorage(newStorage);
    router.push('/estoque/locais');
  };

  const title = 'Cadastrar novo local de estoque';

  const buttons = [
    {
      text: 'Voltar',
      variant: 'secondary',
      onClick: () => router.push('/estoque/locais'),
    },
    {
      text: 'Salvar',
      variant: 'primary',
      onClick: handleSaveStorage,
    }
  ] as ButtonProps[]

  const items = [
    {
      label: 'Nome',
      placeholder: 'Digite o nome do estoque',
      value: name,
      type: 'text',
      required: true,
      onChange: setName,
    },
    {
      label: 'Observações',
      placeholder: 'Digite as observações',
      value: description,
      type: 'text',
      required: true,
      onChange: setDescription,
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