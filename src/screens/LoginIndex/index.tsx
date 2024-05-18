import { useAuth } from '@/context';
import { useDevice } from '@/hooks';
import Image from 'next/image';
import React, { useState } from 'react';
import * as S from './styles';

import Input from '@/components/Input';
import { Button } from '@/components';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import {authSevice} from "@/services"

type Inputs = {
  email: string;
  password: string;
};

const LoginIndex: React.FC = () => {
  const { isMobile } = useDevice();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email é obrigatório').email('Email inválido'),
    password: Yup.string().required('Senha é obrigatório'),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>(formOptions);

  const submitForm = async () => {
    try {
      const response = await authSevice.authSingIn({email, password})
      console.log('response: ', response)
    } catch(error) {
      console.log('=== error ===')
    } finally {

    }
  };

  return (
    <S.Container>
      {isMobile || <S.Overview></S.Overview>}
      <S.Content>
        <S.Form onSubmit={handleSubmit(submitForm)}>
          <S.Title>Bem-vindo!</S.Title>

          <S.FormInputs>
            <S.InputContainer>
              <Input
              label='Usuário'
                placeholder="Email"
                disabled={loading}
                value={email}
                {...register('email', {
                  onChange: (e: any) => setEmail(e.target.value),
                })}
                error={errors.email?.message}
              />
            </S.InputContainer>

            <S.InputContainer>
              {/* <S.ForgotContainer>
                <S.ForgotText>Esqueceu a senha?</S.ForgotText>
              </S.ForgotContainer> */}

              <Input
                label='Senha'
                type="password"
                placeholder="**********"
                disabled={loading}
                value={password}
                {...register('password', {
                  onChange: (e: any) => setPassword(e.target.value),
                })}
                error={errors.password?.message}
              />
            </S.InputContainer>
          </S.FormInputs>

        {/*   <S.RememberContainer>
            <S.RememberInput type="checkbox" />
            <S.RememberText>Lembre de mim</S.RememberText>
          </S.RememberContainer> */}

          <Button text="Entrar" variant="primary" />
        </S.Form>
      </S.Content>
    </S.Container>
  );
};

export default LoginIndex;
