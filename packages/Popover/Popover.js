import React, { Component } from "react";
import { number, node, bool, oneOf } from "prop-types";
import alignProps from "./_proptypes_align";
import { PopoverStyled } from "./Popover.styled";
import Content from "./Content/Content";
import Card from "./Card/Card";
import Button from "./Button/Button";
import Tip from "./Tip/Tip";
import resizeThrottler from "./helpers/resizeThrottler";

import { getCoordinates as getCoordinatesHelper, getAnchor } from "./helpers/getPosition";

export const ContextPopover = React.createContext();

export default class Popover extends Component {
  $trigger = React.createRef();

  $tip = null; // this ref comes from a callback of the <Tip /> component

  hasEventListenerLoaded = false;
  isComponentStarting = true;

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
    isVisible: true,
    tip: {
      x: null,
      y: null,
    },
    content: {
      x: null,
      y: null,
    },
  };

  componentDidMount() {
    const { waitToRender } = this.props;

    // there are edge case when wait before render make sense
    // ex. font is not loaded, some calculation have to happend to the
    // trigger element before etc.
    if (waitToRender) {
      setTimeout(this.setPosition, waitToRender);
      return;
    }

    // about setState for Popovers and Tooltips in ComponentDidMount
    // https://reactjs.org/docs/react-component.html#componentdidmount
    if (this.isVisible()) {
      this.setPosition();
      this.addEventListener();
    }
  }

  componentDidUpdate(previousProps) {
    if (this.isVisible() && !this.hasEventListenerLoaded) {
      this.addEventListener();
    }

    if (previousProps.align !== this.props.align) {
      this.setPosition();
    }
  }

  setPosition() {
    const { content, tip } = this.getCoordinates();
    this.setState({
      content,
      tip,
    });
  }

  getCoordinates = () => {
    const { align } = this.props;
    const rectTrigger = this.$trigger.current.getBoundingClientRect();

    const content = getCoordinatesHelper({
      rect: this.$content.getBoundingClientRect(),
      anchor: getAnchor(this.$trigger.current.getBoundingClientRect(), align),
      rectTrigger,
      align,
    });

    let tip = {
      x: null,
      y: null,
      rotate: null,
    };

    if (this.$tip) {
      tip = getCoordinatesHelper({
        rect: this.$tip.getBoundingClientRect(),
        anchor: getAnchor(this.$trigger.current.getBoundingClientRect(), align),
        rectTrigger,
        align,
        offset: -2,
      });
    }

    return {
      tip: {
        x: tip.x,
        y: tip.y,
        rotate: tip.rotateTip,
      },
      content: {
        x: content.x,
        y: content.y,
      },
    };
  };

  handleResize = () => {
    if (this.isVisible()) {
      this.setPosition();
    }
  };

  handleClick = () => {
    if (this.isVisible) {
      const { content, tip } = this.getCoordinates();
      this.setState(state => ({
        isVisible: !state.isVisible,
        content,
        tip,
      }));
      return;
    }

    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  };

  isVisible = () => (this.props.isVisible !== null ? this.props.isVisible : this.state.isVisible);

  refTip = ref => {
    this.$tip = ref;
  };

  refContent = ref => {
    this.$content = ref;
  };

  addEventListener() {
    window.addEventListener("resize", resizeThrottler(this.handleResize), false);
    this.hasEventListenerLoaded = true;
  }

  render() {
    const { children } = this.props;
    const isVisible = this.isVisible();

    return (
      <ContextPopover.Provider
        value={{
          content: this.state.content,
          tip: this.state.tip,
          refContent: this.refContent,
          refTip: this.refTip,
          handleClick: this.handleClick,
          isVisible,
        }}
      >
        <PopoverStyled innerRef={this.$trigger} data-qa-anchor={this.typename}>
          {children}
        </PopoverStyled>
      </ContextPopover.Provider>
    );
  }
}

Popover.Button = Button;
Popover.Content = Content;
Popover.Card = Card;
Popover.Tip = Tip;
