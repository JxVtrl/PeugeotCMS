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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const ModalBody = styled.div`
  margin-bottom: 16px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  background-color: #000;
  color: #fff;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #000;
`;
