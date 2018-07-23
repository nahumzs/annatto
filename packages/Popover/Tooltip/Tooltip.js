import React, { Component } from "react";
import { node } from "prop-types";
import { TooltipStyled } from "./Tooltip.styled";

export default class Tooltip extends Component {
  static propTypes = {
    children: node.isRequired,
  };

  render() {
    return <TooltipStyled>{this.props.children}</TooltipStyled>;
  }
}
