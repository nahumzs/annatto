import React from "react";
import ReactDOM from "react-dom";
import { string } from "prop-types";
import { TipStyled } from "./Tip.styled";
import { ContextPopover } from "../Popover";

const Tip = ({ background = "#FFF", borderColor = "#CECECE" }) => (
  <ContextPopover.Consumer>
    {({ tip, refTip, isVisible }) =>
      ReactDOM.createPortal(
        <TipStyled
          background={background}
          border={borderColor}
          innerRef={$ref => refTip($ref)}
          isVisible={isVisible}
          rotate={tip.rotate}
          style={{ left: tip.x, top: tip.y }}
        >
          <svg height="100%" width="100%" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0 16 16 16 8 8" stroke={borderColor} strokeLinecap="round" strokeWidth="3" />
            <polygon points="0 16 16 16 8 8" fill={background} strokeLinecap="round" />
          </svg>
        </TipStyled>,
        document.body
      )
    }
  </ContextPopover.Consumer>
);

Tip.displayName = "Tip";
Tip.propTypes = {
  background: string,
  borderColor: string,
};

export default Tip;
