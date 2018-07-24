import React, { Component } from "react";
import { node } from "prop-types";
import { CardStyled } from "./Card.styled";

export default class Tooltip extends Component {
  static propTypes = {
    children: node.isRequired,
  };

  render() {
    return <CardStyled {...this.props}>{this.props.children}</CardStyled>;
  }
}
