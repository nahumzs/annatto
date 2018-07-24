import React from "react";
import { storiesOf } from "@storybook/react";
import Popover from "./Popover";
import Basic from "./_stories/Basic";
import Tooltip from "./_stories/Tooltip";

storiesOf("Popover", module).add("Showcase", () => <Popover />);

storiesOf("Popover", module).add("Basic", () => <Basic />);

storiesOf("Popover", module).add("Tooltip", () => <Tooltip />);
