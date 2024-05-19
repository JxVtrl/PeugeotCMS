import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;

export const ContainerInput = styled.div`
  position: relative;
`;

export const InputCustom = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
`;

export const Button = styled.button`
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background-color: #333;
  cursor: pointer;
`;

export const Subtitle = styled.h2`
  font-size: 15px;
  font-weight: 600;
  color: #333;
  text-align: center;
`;
