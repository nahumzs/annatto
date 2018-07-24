import styled from "styled-components";

export const CardStyled = styled.div`
  background: ${props => (props.background ? `${props.background};` : "#FFF;")};
  color: ${props => (props.color ? `${props.color};` : "#111;")};
  border: 1px solid ${props => (props.border ? props.border : "#CECECE;")}
  font-size: 12px;
  padding: 2px 4px;
  border-radius: 4px;
`;
