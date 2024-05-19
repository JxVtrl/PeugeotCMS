import AppBar from '@/components/AppBar';
import { useMenu } from '@/context';
import React from 'react';
import * as S from './styles';
import Menu from '@/components/Menu';
import { AppLayoutProps } from '@/interfaces/App.interface';

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { appPadding, handleCloseMenu }: any = useMenu();

  return (
    <S.AppContainer>
      <Menu />
      <S.Content
        autoPadding={appPadding}
        paddingRight={28}
        onClick={handleCloseMenu}
      >
        <AppBar />
        {children}
      </S.Content>
    </S.AppContainer>
  );
};

export default AppLayout;
