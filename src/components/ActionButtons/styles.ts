import styled from 'styled-components';

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;

  svg {
    cursor: pointer;

    transition: color 0.2s;

    &:hover {
      color: grey;
    }
  }
`;
