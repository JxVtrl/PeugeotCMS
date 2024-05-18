import { ButtonProps } from '@/interfaces/Button.interface';
import styled from 'styled-components';

export const Button = styled.button<ButtonProps>`
  color: #fff;
  height: 40px;
  width: ${props => (props.variant === 'primary' ? '120px' : '100px')};

  background-image: ${props =>
    props.variant === 'primary'
      ? 'linear-gradient(47deg, #1b6688, #2386b3)'
      : props.variant === 'secondary'
      ? 'linear-gradient(47deg, #82868b, #9ca0a4)'
      : undefined};

  border: none;
  border-radius: 5px;

  opacity: ${props => (props.disabled ? 0.65 : 1)};

  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  text-transform: uppercase;

  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;
