import React, { Component } from "react";
import { ParagraphStyle } from "./Popover.styled";

export default class Popover extends Component {
  render() {
    return (
      <React.Fragment>
        <ParagraphStyle>
          <span role="img" aria-label="fox">
            🦊
          </span>
          <span>
            Your Popover package is ready
          </span>
        </ParagraphStyle>

      </React.Fragment>
    );
  }
}

