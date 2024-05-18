import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 21px;
  border-radius: 8px;
`;

export const ProductHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  margin-top: 24px;

`

interface ProductHeaderProps {
  disabled: boolean;
}

export const AddProductButton = styled.button<ProductHeaderProps>`
width: 100%;
max-width: 200px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-image: linear-gradient(47deg, #1b6688, #1b6788);
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.2s ease-in-out;

  text-transform: uppercase;
    
  &:hover {
    opacity: 0.8;
  }

  ${props => props.disabled && `
    opacity: 0.5;
    cursor: not-allowed;
  `}
`

export const Title = styled.h1`
  border-bottom: 2px solid #1b6688;

  color: #1b6688;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
`;

export const MovementTypeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  margin: 15px 0;
`;

interface MovementTypeButtonProps {
  variant: 'income' | 'outcome';
  active: boolean;
}

export const MovementTypeButton = styled.button<MovementTypeButtonProps>`
  width: 100%;
  height: 42px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-image: ${props =>
    props.variant === 'income'
      ? 'linear-gradient(47deg, #28c76f, #48da89)'
      : 'linear-gradient(47deg, #ea5455, #f08182)'};
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.2s ease-in-out;

  text-transform: uppercase;

  opacity: ${props => (props.active ? 1 : 0.5)};

  cursor: pointer;
`;
