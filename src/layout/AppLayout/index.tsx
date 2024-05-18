import AppBar from "@/components/AppBar";
import { useApp } from "@/context";
import React from "react";
import * as S from "./styles";
import { routeExist } from "@/utils/routeExist";
import { useRouter } from "next/router";
import Menu from "@/components/Menu";
import { LoginIndex } from "@/screens";
import { AppLayoutProps } from "@/interfaces/App.interface";

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { appPadding,handleCloseMenu }: any = useApp();
  const router = useRouter();

  return (
    <S.AppContainer>
      {routeExist(router.pathname) ? (
        <>
          <Menu />
          <S.Content autoPadding={appPadding} paddingRight={28} onClick={handleCloseMenu}>
            <AppBar />
            {children}
          </S.Content>
        </>
      ) : <LoginIndex />}
    </S.AppContainer>
  );
};

export default AppLayout;
