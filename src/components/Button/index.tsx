import { ButtonProps } from "@/interfaces/Button.interface";
import React from "react";
import * as S from "./styles";

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  onClick,
  disabled = false,
  type = 'submit'
}) => {
  return (
    <S.Button
      disabled={disabled}
      onClick={!disabled ? onClick : () => {}}
      variant={variant}
      type={type}
    >
      {text}
    </S.Button>
  );
};

export default Button;
