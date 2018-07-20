import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const spinnerSize = {
  large: "aclui-spinner--large",
  medium: "aclui-spinner--medium",
  small: "aclui-spinner--small",

  // deprecated values
  default: "aclui-spinner--medium",
  tiny: "aclui-spinner--small"
};

const Spinner = ({ ariaText, className, caption, size, ...moreProps }) => {
  const rootClasses = classNames("aclui-spinner", className, spinnerSize[size]);

  const bestAria = () => ariaText || caption || "Loading"; // TODO: l10n

  return (
    <div className={rootClasses} data-qa-anchor="aclui-spinner" {...moreProps}>
      <div className="aclui-spinner__visual" />
      <div>SPINNING MY HEAD 🤖 😊</div>
      <div className="aclui-spinner__caption">{caption}</div>
      <div
        className="aclui-spinner__aria-alert"
        role="alert"
        aria-live="polite"
      >
        {bestAria()}
      </div>
    </div>
  );
};

Spinner.propTypes = {
  ariaText: PropTypes.string,
  className: PropTypes.string,
  caption: PropTypes.string,

  /** customPropTypes shirtSize */
  size: PropTypes.string
};

Spinner.defaultProps = {
  ariaText: null,
  className: null,
  caption: null,
  size: "medium"
};

export default Spinner;
