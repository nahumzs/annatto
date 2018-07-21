const tplComponent = name => `import React, { Component } from "react";

export default class ${name} extends Component {
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

`;

module.exports = tplComponent;
