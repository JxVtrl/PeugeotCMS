import styled from "styled-components";
import tokens from "../../utils/tokens";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 12px;
`;


export const ContainerInput = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const InputCustom = styled.input<{ error: boolean }>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 40px;
  width: ${(props :any) => props.width || '100%'};
  border-radius: 8px;
  border: 1px solid #d1d4db;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  outline: 0;
  transition: border 0.2s ease;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: ${tokens.colors.inputText};


  &:focus {
    border-color: " #4d4d4d";
  }

  ${(props: any) =>
    props.error &&
    `
      border-color: ${tokens.colors.error};
      //background-color: ${tokens.colors.errorSecondary};
    `}

  &.input-error {
    border-color: ${tokens.colors.error};
  }

  &::placeholder {
    //font-family: AvertaStd;
    font-size: inherit;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    color: ${tokens.colors.ligth};
  }
`;

export const Label = styled.label<{ labelColor? : string }>`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: start;
  padding-left: 1px;
  padding-bottom: 2px;
  font-family: ${tokens.fonts.family};
  font-style: normal;
  font-size: 15px;
  line-height: 22px;
  color:${(props :any) => props.labelColor || tokens.colors.inputLabelColor};
`;

export const MessageError = styled.span`
  position: absolute;
  color: ${tokens.colors.error};
  font-size: 12px;
  margin-left: 5px;
  margin-top: 43px;
`;
