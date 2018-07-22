const tplComponent = name => `import React, { Component } from "react";
import { ParagraphStyle } from "./${name}.styled";

export default class ${name} extends Component {
  render() {
    return (
      <React.Fragment>
        <ParagraphStyle>
          <span role="img" aria-label="fox">
            🦊
          </span>
          <span>
            Your Popover package is ready
          </span>
        </ParagraphStyle>

      </React.Fragment>
    );
  }
}

`;

module.exports = tplComponent;
