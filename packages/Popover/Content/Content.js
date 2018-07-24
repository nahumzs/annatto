import React, { Component } from "react";
import ReactDOM from "react-dom";
import { node } from "prop-types";
import { ContextPopover } from "../Popover";
import { ContentStyled } from "./Content.styled";

export default class Content extends Component {
  static propTypes = {
    children: node.isRequired,
  };

  render() {
    return (
      <ContextPopover.Consumer>
        {({ content, refContent, isVisible }) =>
          ReactDOM.createPortal(
            <React.Fragment>
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
