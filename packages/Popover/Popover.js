import React, { Component } from "react";
import { number, node, bool, oneOf } from "prop-types";
import alignProps from "./_proptypes_align";
import { PopoverStyled } from "./Popover.styled";
import { getAnchor } from "./helpers/getPosition";
import Content from "./Content/Content";
import Tooltip from "./Tooltip/Tooltip";
import Button from "./Button/Button";

export const ContextPopover = React.createContext();

export default class Popover extends Component {
  $popover = React.createRef();

  static propTypes = {
    align: oneOf(alignProps),
    children: node.isRequired,
    isVisible: bool,
    waitToRender: number,
  };

  static defaultProps = {
    align: "bottom",
    isVisible: null,
    waitToRender: 0,
  };

  state = {
    anchor: null,
    isVisible: false,
  };

  componentDidMount() {
    const rect = this.$popover.current.getBoundingClientRect();
    const { align, waitToRender } = this.props;

    // there are edge case when wait before render make sense
    // ex. font is not loaded, some calculation have to happend to the
    // trigger element before etc.
    if (waitToRender) {
      setTimeout(() => this.setState({ anchor: getAnchor(rect, align) }), waitToRender);
      return;
    }

    // about setState in ComponentDidMount and Tooltip
    // https://reactjs.org/docs/react-component.html#componentdidmount
    this.setState({ anchor: getAnchor(rect, align) });
  }

  handleClick = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  };

  isVisible = () => (this.props.isVisible !== null ? this.props.isVisible : this.state.isVisible);

  render() {
    const { children } = this.props;
    const { anchor } = this.state;
    const isVisible = this.isVisible();

    return (
      <ContextPopover.Provider value={{ anchor, isVisible, handleClick: this.handleClick }}>
        <PopoverStyled innerRef={this.$popover} data-qa-anchor={this.typename}>
          {children}
        </PopoverStyled>
      </ContextPopover.Provider>
    );
  }
}

Popover.Button = Button;
Popover.Content = Content;
Popover.Tooltip = Tooltip;
