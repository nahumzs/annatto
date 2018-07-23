import React, { Component } from "react";
import { node } from "prop-types";
import { ContextPopover } from "../Popover";

export default class Trigger extends Component {
  static propTypes = {
    children: node.isRequired,
  };

  render() {
    return (
      <ContextPopover.Consumer>
        {({ handleClick }) => {
          return (
            <button type="button" onClick={handleClick}>
              {this.props.children}
            </button>
          );
        }}
      </ContextPopover.Consumer>
    );
  }
}
