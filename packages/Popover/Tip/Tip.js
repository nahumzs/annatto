import React from "react";
import { string, number, func } from "prop-types";
import { TipStyled } from "./Tip.styled";

const Tip = ({ background = "#FFF", border = "#CECECE", rotate = 0, tipRef, x, y, isVisible }) => (
  <TipStyled
    background={background}
    border={border}
    innerRef={$ref => tipRef($ref)}
    isVisible={isVisible}
    rotate={rotate}
    style={{ left: x, top: y }}
  >
    <svg height="100%" width="100%" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0 16 16 16 8 8" stroke={border} strokeLinecap="round" strokeWidth="3" />
      <polygon points="0 16 16 16 8 8" fill={background} strokeLinecap="round" />
    </svg>
  </TipStyled>
);

Tip.displayName = "Tip";
Tip.propTypes = {
  tipRef: func.isRequired,
  background: string,
  border: string,
  rotate: number,
};

export default Tip;
