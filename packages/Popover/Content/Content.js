import React, { Component } from "react";
import ReactDOM from "react-dom";
import { node } from "prop-types";
import { ContextPopover } from "../Popover";
import { ContentStyled } from "./Content.styled";
import Tip from "../Tip/Tip";

export default class Content extends Component {
  static propTypes = {
    children: node.isRequired,
  };

  render() {
    return (
      <ContextPopover.Consumer>
        {({ tip, content, refTip, refContent, isVisible }) =>
          ReactDOM.createPortal(
            <React.Fragment>
              <Tip x={tip.x} y={tip.y} rotate={tip.rotate} isVisible={isVisible} tipRef={ref => refTip(ref)} />
              <ContentStyled
                style={{ left: content.x, top: content.y }}
                aria-hidden={!isVisible}
                tabIndex={isVisible ? "" : -1}
                innerRef={ref => refContent(ref)}
                isVisible={isVisible}
              >
                {this.props.children}
              </ContentStyled>
            </React.Fragment>,
            document.body
          )
        }
      </ContextPopover.Consumer>
    );
  }
}
