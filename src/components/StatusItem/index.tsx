import { StatusItemProps } from "@/interfaces/Status.interface";
import { valueFormatter } from "@/utils/valueFormatter";
import React from "react";
import * as S from "./styles";

const StatusItem: React.FC<StatusItemProps> = ({
  color,
  icon,
  value,
  title,
}) => {
  return (
    <S.Container>
      <S.IconContainer color={color}>{icon}</S.IconContainer>

      <S.ValueContainer>
        <h1>{valueFormatter(value, "simple")}</h1>
        <p>{title}</p>
      </S.ValueContainer>
    </S.Container>
  );
};

export default StatusItem;
