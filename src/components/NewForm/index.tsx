import { NewFormProps } from '@/interfaces/Form.interface';
import React from 'react';
import AlertText from '../AlertText';
import Button from '../Button';
import FormItem from '../FormItem';
import * as S from './styles';

const NewForm: React.FC<NewFormProps> = ({
  items,
  title = 'Novo',
  buttons,
  children,
  headChildren
}) => {
  return (
    <S.Content>
      <S.Title>{title}</S.Title>
      {headChildren}
      <S.Form>
        {items.map((item,index) => {
          const {
            label,
            onChange,
            placeholder,
            value,
            mask,
            required,
            type,
            data
          } = item
          return (
            <FormItem
              key={index}
              label={label}
              placeholder={placeholder}
              value={value}
              type={type}
              mask={mask}
              required={required}
              onChange={onChange}
              data={data}
            />
          );
        })}
      </S.Form>
      {children}
      <AlertText
        type="alert"
        text="Você precisa preencher todos os campos obrigatórios para realizar a ação!"
      />
      <S.ButtonContainer>
        {buttons.map((button,index) => (
          <Button
            key={index}
            disabled={false}
            variant={button.variant}
            text={button.text}
            onClick={button.onClick}
          />
        ))}
      </S.ButtonContainer>
    </S.Content>
  );
};

export default NewForm;
