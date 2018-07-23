import styled from "styled-components";
import "typeface-lato";

export const ContentStyled = styled.div`
  box-sizing: border-box;
  display: inline-block;
  font-family: Lato, sans-serif;
  left: 0;
  position: absolute;
  top: 0;
  transition: all 300ms ease;
  ${props => (props.isVisible ? "opacity: 1; visibility: visible;" : "opacity: 0; top: -5000px")};
`;

ContentStyled.displayName = "ContentStyled";
