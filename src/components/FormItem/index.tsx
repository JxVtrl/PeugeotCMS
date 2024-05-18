import { FormItemProps } from '@/interfaces/Form.interface';
import React, { ReactNode } from 'react';
import { Select } from '@chakra-ui/react';
import * as S from './styles';

const FormItem = ({
  label,
  placeholder,
  type = 'text',
  mask,
  required = false,
  value,
  onChange,
  data,
}: FormItemProps):ReactNode => {
  // check if data is undefined
  const dataUndefined = typeof data === undefined;

  // check if data is an array
  const dataArray = Array.isArray(data);

  // check if data is an array of objects
  const dataObjectArray = dataArray && data?[0] && typeof data[0] === 'object': false;

  // if data is an array of objects and its not undefined, turn it into an array of strings
  if(!dataUndefined)
    if (dataObjectArray) {
      data = data?.map((item: any) => item.name);
    }

  return (
    <S.FormGroup>
      <S.Label>{label}</S.Label>
      {type === 'select' ? (
        <Select placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)}>
          {dataArray && !dataUndefined &&
            data?.map((item: any, index:number) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
        </Select>
      ) : (
        <S.Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      )}
    </S.FormGroup>
  );
};

export default FormItem;
