import { useApp } from "@/context";
import React from "react";
import { TbMoon, TbSun } from "react-icons/tb";
import * as S from "./styles";

const ChangeTheme: React.FC = () => {
  const { nightMode, setNightMode }: any = useApp();

  return (
    <S.LightContainer onClick={() => setNightMode(!nightMode)}>
      {nightMode ? (
        <TbSun height={16} width={16} color="#175673" />
      ) : (
        <TbMoon height={16} width={16} color="#175673" />
      )}
    </S.LightContainer>
  );
};

export default ChangeTheme;
