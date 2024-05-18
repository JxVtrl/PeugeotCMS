import { TextProps } from '@/interfaces/Text.interface';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
  height: fit-content;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #5e5873;
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;

  margin-bottom: 21px;
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

export const ThisMonth = styled.div``;

export const LastMonth = styled.div``;

export const MonthTitle = styled.h2`
  color: #5e5873;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
`;

export const ValueContainer = styled.div``;

export const Value = styled.span<TextProps>`
  color: ${props => props.color};
  font-size: 21px;
  font-weight: 600;
  line-height: 25px;
`;
