import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #d8d6de;
  padding: 6px 14px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #6e6b7b;
`;

export const SearchLabel = styled.label`
  color: #5e5873;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;
