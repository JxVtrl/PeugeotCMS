import React from 'react';
import axios from 'axios';
import NewForm from '@/components/NewForm';
import { ButtonProps } from '@/interfaces/Button.interface';
import { FormItemProps } from '@/interfaces/Form.interface';
import { useRouter } from 'next/router';
import * as S from './styles';
import { usePageTitle } from '@/hooks/usePageTitle';

import { isCpfValid } from '@/utils/isCpfValid';
import { isCnhValid } from '@/utils/isCnhValid';

const Novo: React.FC = () => {
  usePageTitle('Taylor Dashboard - Novo Cliente');
  const router = useRouter();
  const [fullName, setFullname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [cep, setCep] = React.useState('');
  const [wantsTestDrive, setWantsTestDrive] = React.useState(false);
  const [cnh, setCnh] = React.useState('');

  const handleSaveClient = () => {
    console.log('Salvando cliente');

    const newClient = {
      fullName,
      email,
      phoneNumber,
      cpf,
      cnh,
      cep,
      wantsTestDrive,
    };

    if (!isCpfValid(cpf)) {
      throw new Error('CPF inválido');
    }

    // axios.post('http://localhost:3036/api/users/new', {
    //   newClient,
    // });

    console.log(newClient);
    // router.push('/motoristas');
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
    },
  ] as ButtonProps[];

  const items = [
    {
      label: 'Nome Completo',
      placeholder: 'Digite o nome completo',
      value: fullName,
      onChange: e => {
        setFullname(e);
      },
    },
    {
      label: 'Email',
      placeholder: 'Digite o email',
      value: email,
      onChange: e => {
        setEmail(e);
      },
    },
    {
      label: 'CPF',
      placeholder: 'Digite o CPF',
      value: cpf,
      onChange: e => {
        setCpf(e);
      },
    },
    {
      label: 'Cep',
      placeholder: 'Digite o CEP',
      value: cep,
      onChange: e => {
        setCep(e);
      },
    },
    {
      label: 'CNH',
      placeholder: 'Digite o CNH',
      value: cnh,
      onChange: e => {
        setCnh(e);
      },
    },
    {
      label: 'Telefone',
      placeholder: 'Telefone p/ contato',
      value: phoneNumber,
      onChange: e => {
        setPhoneNumber(e);
      },
    },
    {
      label: 'Deseja fazer test drive?',
      value: wantsTestDrive,
      onChange: e => {
        setWantsTestDrive(e);
      },
      type: 'checkbox',
    },
  ] as FormItemProps[];

  return (
    <S.Container>
      <NewForm title={title} buttons={buttons} items={items} />
    </S.Container>
  );
};

export default Novo;
