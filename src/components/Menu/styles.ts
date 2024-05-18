import {
  MenuContainerProps,
  MenuItemAccordionContainerProps,
  MenuItemAccordionProps,
  MenuItemProps,
} from '@/interfaces/Menu.interface';
import styled from 'styled-components';

export const MenuContainer = styled.div<MenuContainerProps>`
  background-color: #fff;
  position: fixed;
  padding: ${props => (props.showMenu ? '0 15px' : '0')};
  width: ${props =>
    props.minimized ? '80px' : props.showMenu ? '260px' : '0px'};
  height: 100vh;
  z-index: 999;

  padding-top: 24px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  overflow: hidden;
  transition: all 0.2s ease-in-out;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const MenuItem = styled.div<MenuItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 42px;
  padding: 10px 15px;

  cursor: pointer;

  transition: all 0.2s ease-in-out;

  background-color: ${props => (props.active ? '#f5f5f5' : 'transparent')};

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const MenuItemIcon = styled.div``;

export const MenuItemTitle = styled.p``;

export const MenuItemAccordionContainer = styled.div<MenuItemAccordionContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;

  max-height: ${props => (props.show ? `${props.height}px` : '0px')};
  transition: all 0.2s ease-in-out;

  overflow: hidden;

  margin-bottom: ${props => (props.show ? undefined : '-15px')};
`;

export const MenuItemAccordion = styled.div<MenuItemAccordionProps>`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 0 15px;
  height: 42px;

  background: ${props =>
    props.active
      ? 'linear-gradient(118deg, #1b6688, rgba(27, 102, 136, 0.7))'
      : 'transparent'};

  color: ${props => (props.active ? '#fff' : '#000')};

  transition: all 0.2s ease-in-out;
  border-radius: 5px;

  cursor: pointer;
`;

export const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
