import React, { useEffect } from 'react';
import NewForm from '@/components/NewForm';
import { ButtonProps } from '@/interfaces/Button.interface';
import { FormItemProps } from '@/interfaces/Form.interface';
import { useRouter } from 'next/router';
import * as S from './styles';
import { usePageTitle } from '@/hooks/usePageTitle';
import { drivers_mock } from '../../index';
const Editar: React.FC = () => {
  usePageTitle("Taylor Dashboard - Editar Motorista");
  const router = useRouter();
  const [name, setName] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [rg, setRg] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [celphone, setCelphone] = React.useState('');
  const [route, setRoute] = React.useState('');

  const { slug } = router.query;
  
  
  useEffect(() => {
    // get drivers from API
    const driver = drivers_mock.find((driver) => driver.id.toString() === slug);
    if (driver) {
      setName(driver.name);
      setCpf(driver.cpf);
      setRg(driver.email);
      setPhone(driver.phone);
      setCelphone(driver.seller_code);
      setRoute(driver.schedule);
    }
  }, [slug]);
  

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

export default Editar;