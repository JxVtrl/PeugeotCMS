import React from 'react';
import { StyledComponentPropsWithRef } from 'styled-components';
import * as S from './styles';

export type InputProps = StyledComponentPropsWithRef<'input'> & {
  error?: string;
  label?: string;
  labelColor?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, labelColor, label, ...props }, ref) => (
    <S.Container>
      <S.Label labelColor={labelColor}>{label}</S.Label>
      <S.ContainerInput>
        <S.InputCustom error={!!error} ref={ref} {...props} />
        <S.MessageError>{error}</S.MessageError>
      </S.ContainerInput>
    </S.Container>
  ),
);

Input.displayName = 'Input';

export default Input;
