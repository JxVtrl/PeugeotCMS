import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
  height: fit-content;
  flex-direction: column;

  @media (max-width: 1024px) {
    margin-bottom: 1rem;
  }
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
`;

export const InfoItem = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  flex-direction: column;
`;

export const InfoItemTitle = styled.h1`
  color: #b9b9c3;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
`;

export const InfoValue = styled.h1`
  color: #5e5873;
  font-size: 21px;
  font-weight: 600;
  line-height: 25px;
`;
