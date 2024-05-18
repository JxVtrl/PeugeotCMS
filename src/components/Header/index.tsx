import { HeaderProps } from '@/interfaces/Header.interface';
import React from 'react';
import Button from '../Button';

import * as S from './styles';

const Header: React.FC<HeaderProps> = ({
  inputLabel = 'Buscar',
  inputPlaceholder = 'Digite sua busca',
  inputValue,
  inputOnChange,
  handleButton,
}) => {
  return (
    <S.Header>
      <S.SearchContainer>
        <S.SearchLabel>{inputLabel}</S.SearchLabel>
        <S.SearchInput
          value={inputValue}
          onChange={inputOnChange}
          placeholder={inputPlaceholder}
        />
      </S.SearchContainer>
      <Button text="Novo" variant="primary" onClick={handleButton} />
    </S.Header>
  );
};

export default Header;
