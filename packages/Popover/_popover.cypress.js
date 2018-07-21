import React, { Component } from "react";

export default class Popover extends Component {
  render() {
    return (
      <React.Fragment>
        <span role="img" aria-label="fox">
          🦊
        </span>
        <span>Your Popover package is ready</span>
      </React.Fragment>
    );
  }
}

