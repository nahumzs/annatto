import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import RawButton from "../packages/RawButton/RawButton";
import Spinner from "../packages/Spinner/Spinner";
import Tooltip from "../packages/Tooltip/Tooltip";

import { Button, Welcome } from "@storybook/react/demo";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("RawButton", () => (
    <RawButton onClick={action("clicked")}>😀 😎 👍 💯</RawButton>
  ))
  .add("Spinner", () => <Spinner onClick={action("clicked")} />)
  .add("Tooltip", () => <Tooltip onClick={action("clicked")}>Helloo</Tooltip>);
