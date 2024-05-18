import styled from "styled-components";

export const StatusContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ChartContainer = styled.div`
  margin-top: 1rem;

  display: grid;
  grid-template-columns: 2.04fr 1fr;
  grid-gap: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;
