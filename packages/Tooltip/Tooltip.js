import React, { PureComponent } from "react";
import PropTypes from "prop-types";

const arrowHeight = 5;
const arrowOffset = 15;
const alignClasses = {
  topRight: "top-right",
  topLeft: "top-left",
  topMiddle: "top-middle",
  bottomRight: "bottom-right",
  bottomLeft: "bottom-left",
  bottomMiddle: "bottom-middle",
  rightMiddle: "right",
};

class Tooltip extends PureComponent {
  constructor(props) {
    super(props);
    this.$tooltipWrapper = null;
    this.$tooltip = null;
    this.emptyClass = this.props.message ? "aclui-tooltip--has-content" : "";
  }

  componentDidMount() {
    this.$tooltip = this.$tooltipWrapper.querySelector(".aclui-tooltip");
    this.$tooltip.style.maxWidth = `${this.props["max-width"]}px`;
  }

  componentWillUpdate(nextProps) {
    this.emptyClass = nextProps.message ? "aclui-tooltip--has-content" : "";
  }

  componentDidUpdate() {
    this.$tooltip = this.$tooltipWrapper.querySelector(".aclui-tooltip");
    this.$tooltip.style.maxWidth = `${this.props["max-width"]}px`;
  }

  setTooltipTop() {
    const $tooltipTrigger = this.$tooltipWrapper.querySelector(".aclui-tooltip__trigger");
    const triggerTop = $tooltipTrigger.offsetTop + $tooltipTrigger.scrollTop;
    const triggerHeight = $tooltipTrigger.offsetHeight;
    const triggerMiddle = triggerTop + triggerHeight / 2;
    const backupDisplayStyle = this.$tooltip.style.display;
    this.$tooltip.style.display = "inline-block";
    const tooltipHeight = this.$tooltip.offsetHeight + arrowHeight;
    this.$tooltip.style.display = backupDisplayStyle;

    if ("topRight topLeft topMiddle".includes(this.props.align)) {
      this.$tooltip.style.top = `${triggerTop - tooltipHeight}px`;
    } else if (this.props.align === "rightMiddle") {
      this.$tooltip.style.top = `${triggerMiddle - tooltipHeight / 2}px`;
    } else {
      this.$tooltip.style.top = `${triggerTop + triggerHeight + arrowHeight}px`;
    }
  }

  setTooltipLeft() {
    const $tooltipTrigger = this.$tooltipWrapper.querySelector(".aclui-tooltip__trigger");
    const triggerWidth = $tooltipTrigger.offsetWidth;
    const triggerScrollParent = this.getScrollParent(this.$tooltipWrapper);
    const triggerScrollOffset = triggerScrollParent !== null ? triggerScrollParent.scrollLeft : 0;
    const triggerLeft = $tooltipTrigger.offsetLeft - triggerScrollOffset;
    const triggerMiddle = triggerLeft + triggerWidth / 2;

    if ("topRight bottomRight".includes(this.props.align)) {
      this.$tooltip.style.left = `${triggerLeft - arrowOffset + triggerWidth / 2}px`;
    } else if ("rightMiddle".includes(this.props.align)) {
      this.$tooltip.style.left = `${triggerLeft + triggerWidth + arrowHeight}px`;
    } else if ("topLeft bottomLeft".includes(this.props.align)) {
      this.$tooltip.style.left = `${triggerMiddle - this.$tooltip.offsetWidth + arrowOffset}px`;
    } else {
      this.$tooltip.style.left = `${triggerMiddle - this.$tooltip.offsetWidth / 2}px`;
    }
  }

  getScrollParent(node) {
    if (!node) {
      return null;
    }
    if (node.scrollWidth > node.clientWidth && node.clientWidth !== 0) {
      return node;
    }
    return this.getScrollParent(node.parentNode);
  }

  handleMouseOver = () => {
    this.setTooltipTop();
    this.setTooltipLeft();
  };

  render() {
    return (
      <span
        className={`aclui-tooltip__wrapper ${this.emptyClass}`}
        ref={comp => {
          this.$tooltipWrapper = comp;
        }}
      >
        <span className="aclui-tooltip__trigger" onMouseOver={this.handleMouseOver} onFocus={this.handleMouseOver}>
          {this.props.children}
          <span className={`aclui-tooltip aclui-tooltip--${alignClasses[this.props.align]}`}>{this.props.message}</span>
        </span>
      </span>
    );
  }
}

Tooltip.propTypes = {
  message: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  "max-width": PropTypes.number,
  align: PropTypes.oneOf([
    "topRight",
    "topLeft",
    "topMiddle",
    "bottomRight",
    "bottomLeft",
    "bottomMiddle",
    "rightMiddle",
  ]),
};

Tooltip.defaultProps = {
  "max-width": 300,
  align: "topRight",
};

export default Tooltip;
