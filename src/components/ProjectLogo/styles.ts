import { ButtonContainerProps } from '@/interfaces/Button.interface';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  cursor: pointer;
margin-left: 8px;
margin-bottom: 2rem;

display: flex;
align-items: center;
gap: 1rem;
`;

export const LogoText = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  margin-left: 8px;

`

export const CloseButtonContainer = styled.div``;

export const ButtonContainer = styled.div<ButtonContainerProps>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: ${props =>
    !props.isMobile ? '1px solid #363636' : '1px solid transparent'};

  align-self: center;
  cursor: pointer;

  display: grid;
  place-items: center;
`;

export const Button = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #363636;
`;
