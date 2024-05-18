import AppBar from "@/components/AppBar";
import { useMenu } from "@/context";
import React from "react";
import * as S from "./styles";
import { routeExist } from "@/utils/routeExist";
import { useRouter } from "next/router";
import Menu from "@/components/Menu";
import { AppLayoutProps } from "@/interfaces/App.interface";

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { appPadding,handleCloseMenu }: any = useMenu();
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
      ) : null}
    </S.AppContainer>
  );
};

export default AppLayout;
