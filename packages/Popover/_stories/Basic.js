import React, { Component } from "react";
import { node } from "prop-types";
import styled from "styled-components";
import Popover from "../Popover";

const TriggerStyled = styled.div`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  max-width: 150px;
`;
TriggerStyled.displayName = "TriggerStyled";

const PopoverContentStyled = styled.div`
  padding: 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  width: 250px;
  height: 250px;
`;
PopoverContentStyled.displayName = "PopoverContentStyled";

export default class Basic extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          "align-items": "center",
          "justify-content": "center",
        }}
      >
        <Popover align="right">
          <Popover.Button>This is the popover</Popover.Button>
          <Popover.Content>
            <Popover.Tooltip>
              this is popover content with long text and a{" "}
              <span role="img" aria-label="unicorn">
                🦄
              </span>
            </Popover.Tooltip>
          </Popover.Content>
        </Popover>
      </div>
    );
  }
}
