import { VerticalLineProps } from "@/interfaces/VerticalLine.interface";
import React from "react";
import * as S from "./styles";

const VerticalLine: React.FC<VerticalLineProps> = ({
  height = 0,
  color = "",
}) => {
  return <S.Container color={color} height={height} />;
};

export default VerticalLine;
