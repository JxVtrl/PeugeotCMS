import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 21px;
  border-radius: 8px;
`;

export const NewButton = styled.button`
  color: #fff;
  height: 40px;
  width: 100px;
  background-image: linear-gradient(47deg, #1b6688, #2386b3);
  border: none;
  border-radius: 5px;

  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  margin-top: 16px;
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

export const Table = styled.table`
  width: 100%;
  margin-top: 24px;
`;

export const TableHeader = styled.thead``;

export const TableHeaderItem = styled.th`
  border: 1px solid #d8d6de;

  text-align: center;

  opacity: 0.54;

  font-size: 14px;
  font-weight: 600;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr``;

export const TableRowItem = styled.td`
  color: #6e6b7b;
  font-size: 14px;
  border: 1px solid #d8d6de;
  text-align: center;
  padding: 8px 2px;
`;
