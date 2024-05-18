import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  color: #1b6688;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;

  margin-bottom: 24px;
`;

export const Form = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
