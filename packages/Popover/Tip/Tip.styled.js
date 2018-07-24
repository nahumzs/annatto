import styled from "styled-components";

export const TipStyled = styled.div`
  position: absolute;
  z-index: 1;
  width: 16px;
  height: 16px;

  ${props => (props.rotate ? `transform:rotate(${props.rotate}deg)` : "0")};
  ${props => (props.isVisible ? "opacity: 1; visibility: visible;" : "opacity: 0; visibility: hidden;")};
`;
