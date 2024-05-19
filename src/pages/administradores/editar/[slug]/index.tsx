import React, { useEffect } from 'react';
import NewForm from '@/components/NewForm';
import { ButtonProps } from '@/interfaces/Button.interface';
import { FormItemProps } from '@/interfaces/Form.interface';
import { useRouter } from 'next/router';
import * as S from './styles';
import { usePageTitle } from '@/hooks/usePageTitle';
import { useAdmin } from '@/context/AdminContext';

const Editar: React.FC = () => {
  
  const {adminList}=useAdmin()
  usePageTitle("Taylor Dashboard - Editar Motorista");
  const router = useRouter();
  const [name, setName] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [rg, setRg] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const { slug } = router.query;
  
  useEffect(() => {
    // get drivers from API
    const admin = adminList.find((admin) => admin.id.toString() === slug);
    if (admin) {
      setName(admin.fullName);
      setCpf(admin.cpf);
      setRg(admin.email);
      setPhone(admin.phoneNumber);
    }
  }, [slug]);
  

  const handleSaveClient = () => {
    console.log('Salvando cliente');
    
    const client = {
      name,
      cpf,
      rg,
      phone,
    };
    
    console.log(client);
    router.push('/motoristas');
  };

  const title = 'Editar motorista';

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

export default Editar;