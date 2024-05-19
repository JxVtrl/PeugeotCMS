import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  gap: 28px;

  margin-top: 18px;
  margin-bottom: 21px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;

  height: 60px;
  width: 100%;

  padding: 11px 14px;
  border-radius: 12px;

@media (max-width: 768px) {
  padding: 11px 0;


}
`;

export const LeftOptions = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const RightOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;

  p {
    color: #6e6b7b;
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
  }
`;

export const FootContent = styled.div`
  display: flex;
  width: 100%;

  margin-top: 64px;

  @media (max-width: 768px) {
    margin-top: 0;
    flex-direction: column;
gap: 12px;
  }

  h1 {
    color: #636363;
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
  }
`;

export const FootPaths = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  p {
    gap: 6px;
    display: inline-flex;
    align-items: center;
    color: #6e6b7b;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
  }
`;
