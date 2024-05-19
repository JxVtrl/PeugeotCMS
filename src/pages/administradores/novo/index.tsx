import React, { useState } from 'react';
import NewForm from '@/components/NewForm';
import { ButtonProps } from '@/interfaces/Button.interface';
import { FormItemProps } from '@/interfaces/Form.interface';
import { useRouter } from 'next/router';
import * as S from './styles';
import { usePageTitle } from '@/hooks/usePageTitle';
import { useCars } from '@/context/CarsContext';
import { CarsProps } from '@/data/cars';
import { useAdmin } from '@/context/AdminContext';

const Novo: React.FC = () => {
  const { adminList, setAdminList } = useAdmin();
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  usePageTitle('Novo Administrador');

  const title = 'Cadastrar novo administrador';
  const router = useRouter();

  const handleAddAdmin = () => {
    const newAdmin = {
      id: adminList.length + 1,
      fullName: name,
      cpf,
      email,
      phoneNumber: phone,
    };

    setAdminList([...adminList, newAdmin]);
    router.push('/administradores');
  };

  const items = [
    {
      label: 'Nome',
      placeholder: 'Nome do administrador',
      value: name,
      onChange: e => {
        setName(e);
      },
    },
    {
      label: 'CPF',
      placeholder: 'CPF do administrador',
      value: cpf,
      onChange: e => {
        setCpf(e);
      },
    },
    {
      label: 'Email',
      placeholder: 'Email do administrador',
      value: email,
      onChange: e => {
        setEmail(e);
      },
    },
    {
      label: 'Telefone',
      placeholder: 'Telefone do administrador',
      value: phone,
      onChange: e => {
        setPhone(e);
      },
    },
  ] as FormItemProps[];

  const buttons = [
    {
      text: 'Voltar',
      variant: 'secondary',
      onClick: () => router.push('/administradores'),
    },
    {
      text: 'Salvar',
      variant: 'primary',
      onClick: handleAddAdmin,
    },
  ] as ButtonProps[];

  return (
    <S.Container>
      <NewForm title={title} buttons={buttons} items={items} />
    </S.Container>
  );
};

export default Novo;
