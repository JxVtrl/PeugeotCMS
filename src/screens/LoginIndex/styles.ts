import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 0.6fr 0.4fr;

  @media (max-width: 992px) {
    display: flex;
  }
`;

export const Overview = styled.div`
  background-color: #f5f5f5;
  width: 100%;
`;

export const Content = styled.div`
  background-color: #fff;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Form = styled.form`
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: #5e5873;
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;

  margin-bottom: 21px;
`;

export const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;


export const Input = styled.input`
  height: 38px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
`;

export const ForgotContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ForgotText = styled.span``;

export const RememberContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const RememberInput = styled.input``;

export const RememberText = styled.span``;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

export const Button = styled.button`
  width: 100%;
  height: 38px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

