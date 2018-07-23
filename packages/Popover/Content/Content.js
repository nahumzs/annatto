import React, { Component } from "react";
import ReactDOM from "react-dom";
import { node } from "prop-types";
import { ContextPopover } from "../Popover";
import { ContentStyled } from "./Content.styled";

export default class Content extends Component {
  $content = React.createRef();

  static propTypes = {
    children: node.isRequired,
  };

  render() {
    return (
      <ContextPopover.Consumer>
        {({ anchor, isVisible }) => {
          if (!anchor) return null;

          return ReactDOM.createPortal(
            <ContentStyled isVisible={isVisible} innerRef={this.$content}>
              {this.props.children}
            </ContentStyled>,
            document.body
          );
        }}
      </ContextPopover.Consumer>
    );
  }
}
