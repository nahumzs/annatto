import styled from "styled-components";
import "typeface-lato";

export const ContentStyled = styled.div`
  box-sizing: border-box;
  font-family: Lato, sans-serif;
  position: absolute;
  transition: all 300ms ease;
  ${props => (props.isVisible ? "opacity: 1; visibility: visible;" : "opacity: 0; visibility: hidden;")};
`;

ContentStyled.displayName = "ContentStyled";
