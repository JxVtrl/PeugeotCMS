import { AvatarSelectProps } from '@/interfaces/Avatar.interface';
import styled from 'styled-components';

export const Container = styled.div`
  width: 40px;
  height: 40px;
  box-shadow: 0px 0px 4px #22292f;
  border-radius: 50%;

  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const AvatarSelect = styled.div<AvatarSelectProps>`
  display: flex;
  position: absolute;
  width: 150px;
  height: fit-content;
  background-color: #fff;
  transform: translate(-100px, 55px);
  opacity: ${props => (props.active ? 1 : 0)};
  transition: all 0.3s ease-in-out;
  border: 1px solid #f6f6f6;
  border-radius: 5px;
  inset: 0;
`;

export const AvatarSelectItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #f6f6f6;
  border-bottom: 1px solid #f6f6f6;
  border-left: none;
  border-right: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    font-weight: bold;
  }
`;
