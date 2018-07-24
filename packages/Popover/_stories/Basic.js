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
  state = {
    align: "bottom",
  };

  handleChange = event => {
    this.setState({
      align: event.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <select onChange={this.handleChange} value={this.state.align}>
          <option>top</option>
          <option>left</option>
          <option>right</option>
          <option>bottom</option>
        </select>
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Popover align={this.state.align}>
            <Popover.Button>This is the popover</Popover.Button>
            <Popover.Content>
              <Popover.Tip />
              <Popover.Card>
                this is popover content with long text and a
                <span role="img" aria-label="unicorn">
                  🦄
                </span>
              </Popover.Card>
            </Popover.Content>
          </Popover>
        </div>
      </React.Fragment>
    );
  }
}
