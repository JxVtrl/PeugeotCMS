import { ContentProps } from '@/interfaces/Content.interface';
import styled from 'styled-components';

export const AppContainer = styled.main`
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: row;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Content = styled.div<ContentProps>`
  padding-left: ${props => props.autoPadding}px;
  transition: all 0.2s ease-in-out;
  padding-right: ${props => props.paddingRight}px;
  width: 100%;
`;
