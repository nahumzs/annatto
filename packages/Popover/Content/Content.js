import React, { Component } from "react";
import ReactDOM from "react-dom";
import { node } from "prop-types";
import { ContextPopover } from "../Popover";
import { ContentStyled } from "./Content.styled";
import { getContentCoordinates } from "../helpers/getPosition";

export default class Content extends Component {
  $content = null;

  x = null;

  y = null;

  anchor = null;

  static propTypes = {
    children: node.isRequired,
  };

  setCoordinates = () => {
    const { x, y } = getContentCoordinates({
      rect: this.$content.getBoundingClientRect(),
      anchor: this.anchor,
      rectTrigger: this.rectTrigger,
      align: this.align,
    });
    this.x = x;
    this.y = y;
  };

  render() {
    return (
      <ContextPopover.Consumer>
        {({ anchor, isVisible, rectTrigger, align }) => {
          if (!anchor) return null;

          this.rectTrigger = rectTrigger;
          this.align = align;
          this.anchor = anchor;
          if (this.$content) {
            this.setCoordinates();
          }

          return ReactDOM.createPortal(
            <ContentStyled
              style={{ left: this.x, top: this.y }}
              aria-hidden={!isVisible}
              tabIndex={isVisible ? "" : -1}
              innerRef={ref => {
                if (ref) {
                  this.$content = ref;
                  this.setCoordinates();
                }
              }}
              isVisible={isVisible}
            >
              {this.props.children}
            </ContentStyled>,
            document.body
          );
        }}
      </ContextPopover.Consumer>
    );
  }
}
