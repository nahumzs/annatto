import styled from "styled-components";

export const CardStyled = styled.div`
  background: ${props => props.background};
  color: ${props => props.fontColor};
  border: 1px solid ${props => props.borderColor};
  font-size: 12px;
  padding: 2px 4px;
  border-radius: 4px;
`;
