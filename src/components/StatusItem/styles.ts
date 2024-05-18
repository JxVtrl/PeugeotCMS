import { IconProps } from '@/interfaces/Icon.interface';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  background-color: #fff;

  width: 100%;
  height: 155px;

  border-radius: 0.5rem;
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
`;

export const IconContainer = styled.div<IconProps>`
  margin-bottom: 14px;

  background-color: ${props => props.color}25;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 50%;

  svg {
    width: 21px;
    height: 21px;
    color: ${props => props.color};
  }
`;

export const ValueContainer = styled.div`
  h1 {
    color: #5e5873;
    font-size: 24px;
    font-weight: 600;
    line-height: 28px;
  }

  p {
    color: #6e6b7b;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
`;
