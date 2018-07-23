import styled from "styled-components";
import "typeface-lato";

export const ContentStyled = styled.div`
  font-family: Lato, sans-serif;
  box-sizing: border-box;
  position: absolute;
  transition: all 500ms ease;
  ${props => (props.isVisible ? "opacity: 1; visibility: visible;" : "opacity: 0;  visibility: hidden;")};
`;

ContentStyled.displayName = "PopoverStyled";
