import React, { useState } from 'react';
import * as S from './styles';

const Geral: React.FC = () => {
  const [from, setFrom] = useState('');
  const [until, setUntil] = useState('');

  const [maxTime, setMaxTime] = useState('');

  return (
    <S.Container>
      <S.Subtitle>Tempo total de Utilização</S.Subtitle>
      <S.Form>
        <S.Label htmlFor="from">De:</S.Label>
        <S.InputCustom
          type="time"
          id="from"
          value={from}
          onChange={e => setFrom(e.target.value)}
        />
        <S.Label htmlFor="until">Até:</S.Label>
        <S.InputCustom
          type="time"
          id="until"
          value={until}
          onChange={e => setUntil(e.target.value)}
        />

        <S.Subtitle>Tempo Teste Drive</S.Subtitle>

        <S.Label htmlFor="until">Tempo Máximo:</S.Label>
        <S.InputCustom
          type="text"
          id="until"
          value={maxTime}
          onChange={e => setMaxTime(e.target.value)}
        />

        <S.Button type="submit">Salvar</S.Button>
      </S.Form>
    </S.Container>
  );
};

export default Geral;
