import React from 'react';
import NewForm from '@/components/NewForm';
import { ButtonProps } from '@/interfaces/Button.interface';
import { FormItemProps } from '@/interfaces/Form.interface';
import { useRouter } from 'next/router';
import * as S from './styles';
import { usePageTitle } from '@/hooks/usePageTitle';

const Novo: React.FC = () => {
  usePageTitle('Taylor Dashboard - Novo Cliente');
  const router = useRouter();

  const handleSaveClient = () => {};

  const title = 'Cadastrar novo cliente';

  const buttons = [
    {
      text: 'Voltar',
      variant: 'secondary',
      onClick: () => router.push('/clientes'),
    },
    {
      text: 'Salvar',
      variant: 'primary',
      onClick: handleSaveClient,
    },
  ] as ButtonProps[];

  const items = [
    {
      label: 'Nome',
      placeholder: 'Digite o nome',
      value: '',
      onChange: () => {},
    },
    {
      label: 'CPF',
      placeholder: 'Digite o CPF',
      value: '',
      onChange: () => {},
    },
    {
      label: 'RG',
      placeholder: 'Digite o RG',
      value: '',
      onChange: () => {},
    },
    {
      label: 'Telefone',
      placeholder: 'Digite o telefone',
      value: '',
      onChange: () => {},
    },
    {
      label: 'Celular',
      placeholder: 'Digite o celular',
      value: '',
      onChange: () => {},
    },
    {
      label: 'Rota',
      placeholder: 'Digite o rota',
      value: '',
      onChange: () => {},
    },
  ] as FormItemProps[];

  return (
    <S.Container>
      <NewForm title={title} buttons={buttons} items={items} />
    </S.Container>
  );
};

export default Novo;
