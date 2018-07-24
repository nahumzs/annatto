import React, { Component } from "react";
import { node, string } from "prop-types";
import { CardStyled } from "./Card.styled";

export default class Card extends Component {
  static propTypes = {
    children: node.isRequired,
    fontColor: string,
    background: string,
    borderColor: string,
  };

  static defaultProps = {
    fontColor: "#111",
    background: "#FFF",
    borderColor: "#CECECE",
  };

  render() {
    return <CardStyled {...this.props}>{this.props.children}</CardStyled>;
  }
}
