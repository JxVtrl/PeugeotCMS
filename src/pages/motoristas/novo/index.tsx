import React from 'react';
import NewForm from '@/components/NewForm';
import { ButtonProps } from '@/interfaces/Button.interface';
import { FormItemProps } from '@/interfaces/Form.interface';
import { useRouter } from 'next/router';
import * as S from './styles';
import { usePageTitle } from '@/hooks/usePageTitle';

const Novo: React.FC = () => {
  usePageTitle("Taylor Dashboard - Novo Cliente");
  const router = useRouter();
  const [name, setName] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [rg, setRg] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [celphone, setCelphone] = React.useState('');
  const [route, setRoute] = React.useState('');

  const handleSaveClient = () => {
    console.log('Salvando cliente');
    
    const client = {
      name,
      cpf,
      rg,
      phone,
      celphone,
      route
    };
    
    console.log(client);
    router.push('/motoristas');
  };

  const title = 'Cadastrar novo motorista';

  const buttons = [
    {
      text: 'Voltar',
      variant: 'secondary',
      onClick: () => router.push('/motoristas'),
    },
    {
      text: 'Salvar',
      variant: 'primary',
      onClick: handleSaveClient,
    }
  ] as ButtonProps[]

  const items = [
    {
      label: 'Nome',
      placeholder: 'Digite o nome',
      value: name,
      onChange: setName,
    },
    {
      label: 'CPF',
      placeholder: 'Digite o CPF',
      value: cpf,
      onChange: setCpf,
    },
    {
      label: 'RG',
      placeholder: 'Digite o RG',
      value: rg,
      onChange: setRg,
    },
    {
      label: 'Telefone',
      placeholder: 'Digite o telefone',
      value: phone,
      onChange: setPhone,
    },
    {
      label: 'Celular',
      placeholder: 'Digite o celular',
      value: celphone,
      onChange: setCelphone,
    },
    {
      label: 'Rota',
      placeholder: 'Digite o rota',
      value: route,
      onChange: setRoute,
    }
  ] as FormItemProps[];

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