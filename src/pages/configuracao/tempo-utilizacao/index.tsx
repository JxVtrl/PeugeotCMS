import React, { useState } from 'react';
import * as S from './styles';
import Header from '@/components/Header';

const TempoUtilizado: React.FC = () => {
  const [from, setFrom] = useState('');
  const [until, setUntil] = useState('');
  const [maxTime, setMaxTime] = useState('');

  const inputs = [
    {
      label: 'De:',
      type: 'datetime-local',
      id: 'from',
      value: from,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setFrom(e.target.value),
    },
    {
      label: 'Até:',
      type: 'datetime-local',
      id: 'until',
      value: until,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setUntil(e.target.value),
    },
  ];
  return (
    <S.Container>
      <S.Form>
        {inputs.map(input => (
          <S.ContainerInput key={input.id}>
            <S.Label htmlFor={input.id}>{input.label}</S.Label>
            <S.InputCustom
              type={input.type}
              id={input.id}
              value={input.value}
              onChange={input.onChange}
            />
          </S.ContainerInput>
        ))}

        <S.Label htmlFor="maxTime">Tempo máximo de utilização</S.Label>
        <S.InputCustom
          type="number"
          id="maxTime"
          value={maxTime}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMaxTime(e.target.value)
          }
        />

        <S.Button type="submit">Salvar</S.Button>
      </S.Form>
    </S.Container>
  );
};

export default TempoUtilizado;
