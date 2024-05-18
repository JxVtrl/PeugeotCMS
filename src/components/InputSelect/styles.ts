import styled from "styled-components";
import tokens from "../../utils/tokens";
import SelectReact from "react-select";

export const Select = styled(SelectReact)`
  width: 100%;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 25px;
  width: 100%;
`;

export const Label = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: start;
  padding-left: 3px;
  padding-bottom: 7px;
  font-family: ${tokens.fonts.family};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color:${tokens.colors.label};
`;

export const MessageError = styled.span`
  position: absolute;
  color: ${tokens.colors.errorSecondary};
  font-size: 13px;
  margin-left: 5px;
  margin-top: 50px;
`;
