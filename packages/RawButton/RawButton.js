import React, { PureComponent } from "react";
import { string, number, bool, func, node } from "prop-types";
import classNames from "classnames";
import getTextFromNode from "@annatto/Helpers/functions/getTextFromNode";
import newId from "@annatto/Helpers/functions/newId";

class RawButton extends PureComponent {
  constructor(props) {
    super(props);
    this.ariaId = newId("raw-button");
    this.$rawButton = null;
  }

  // this is needed for the spacebar event,
  // react synthetic event can't prevent spacebar from scrolling the page.
  componentDidMount() {
    if (this.$rawButton) {
      const { canPropagate } = this.props;
      this.$rawButton.addEventListener(
        "keydown",
        this.handleKeyDown,
        canPropagate
      );
      this.$rawButton.addEventListener("keyup", this.handleKeyUp, canPropagate);
    }
  }

  componentWillUnmount() {
    if (this.$rawButton) {
      this.$rawButton.removeEventListener("keydown", this.handleKeyDown);
      this.$rawButton.removeEventListener("keyup", this.handleKeyUp);
    }
  }

  //Deprecation of disabled prop
  get isDisabled() {
    const { disabled, isDisabled } = this.props;

    if (typeof disabled === "undefined") {
      return isDisabled;
    }
    return isDisabled || disabled;
  }

  // this is not a React synthetic event
  handleKeyDown = event => {
    if (
      // Prevent the default action to stop scrolling when space is pressed
      (event.key === " " && event.target.tagName !== "INPUT") ||
      // Prevent submitting forms in IE/Edge
      event.key === "Enter"
    ) {
      event.preventDefault();
    }
  };

  // this is not a React synthetic event
  handleKeyUp = event => {
    if (event.key === " " && event.target.tagName !== "INPUT") {
      // Prevent the default action to stop scrolling when space is pressed
      event.preventDefault();
    }
    if (
      this.isDisabled ||
      (!this.props.canPropagate && event.target !== this.$rawButton)
    )
      return;
    if (event.key === " " || event.key === "Enter") {
      this.props.onClick(event);
    }
  };

  handleRef = $node => {
    this.$rawButton = $node;

    // TODO Implement forward ref in React 16 way https://reactjs.org/docs/forwarding-refs.html#forwarding-refs-to-dom-components
    this.props.buttonRef($node);
  };

  handleClick = event => {
    if (!this.props.canPropagate) event.stopPropagation();
    if (!this.isDisabled) this.props.onClick(event);
  };

  render() {
    /* eslint-disable no-unused-vars */
    /* Destructuring is used to isolate additional props in moreProps and pass them along to
       the button.  Some are not used by render() but are needed above – they must remain in
       this statement though to exclude them from moreProps.
    */
    const {
      ariaLabel,
      buttonRef,
      canPropagate,
      children,
      className,
      isDisabled,
      disabled, // deprecated
      tabIndex,
      ...moreProps
    } = this.props;
    /* eslint-enable no-unused-vars */

    const classes = classNames(className, "aclui-raw-button", {
      "is-disabled": this.isDisabled
    });

    const bestAria =
      ariaLabel || getTextFromNode(<span>{children}</span>) || "Button"; // TODO: use <i18nSync>

    /* eslint-disable jsx-a11y/no-static-element-interactions */
    /* eslint-disable jsx-a11y/click-events-have-key-events */
    /* es-lint is disabled for this specific reasons:
      1. Click-events-have-key-events: we are not using React synthetic events because we can't
        deal with the event.stopPropagation of the spacebar and prevent scrolling the page when the user
        presses the space bar.
      2. no-static-element-interactions: It's highly recommended to not use DIV or SPAN for interactive
        elements but in this very specific case we are trying to isolate and mimic the button role
        for icon buttons, arrow icons, carets, and any other elements that are interactive but
        not a button. We are doing this because using a <button /> normally inherents css styling
        from frameworks such as bootstrap or foundation, so in this way we always have a
        fresh button with no style attached.
     */

    return (
      <span
        {...moreProps}
        aria-disabled={this.isDisabled}
        aria-labelledby={this.ariaId}
        className={classes}
        onClick={this.handleClick}
        ref={this.handleRef}
        role="button"
        tabIndex={this.isDisabled ? -1 : tabIndex}
      >
        <span
          data-qa-anchor="aclui-raw-button__content"
          className="aclui-raw-button__content"
        >
          🦄{children}
        </span>
      </span>
    );
    /* eslint-enable jsx-a11y/no-static-element-interactions */
    /* eslint-enable jsx-a11y/click-events-have-key-events */
  }
}

RawButton.propTypes = {
  ariaLabel: string,
  buttonRef: func,
  canPropagate: bool,
  children: node.isRequired,
  className: string,

  /** disabled is deprecated. Use isDisabled instead */
  disabled: bool,
  isDisabled: bool,
  onClick: func.isRequired,
  tabIndex: number
};

RawButton.defaultProps = {
  ariaLabel: null,
  buttonRef: () => {},
  canPropagate: false,
  className: null,
  isDisabled: false,
  onKeyDown: () => {},
  tabIndex: 0
};

export default RawButton;
