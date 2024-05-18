import { VerticalLineProps } from '@/interfaces/VerticalLine.interface';
import styled from 'styled-components';

export const Container = styled.div<VerticalLineProps>`
  height: ${props => props.height}px;

  border-left: 1px solid ${props => props.color};
  height: 28px;
  margin-left: 14px;
  margin-right: 14px;
`;
