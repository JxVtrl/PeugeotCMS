import { AlertTextProps } from '@/interfaces/Text.interface';
import styled from 'styled-components';

export const WarningContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px 0;
  gap: 8px;

  text-align: center;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const WarningText = styled.p<AlertTextProps>`
  color: ${props => (props.type === 'alert' ? '#ff9f43' : '#ff4d4f')};
`;
