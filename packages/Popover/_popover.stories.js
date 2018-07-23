import React from "react";
import { storiesOf } from "@storybook/react";
import Popover from "./Popover";
import Basic from "./_stories/Basic";

storiesOf("Popover", module).add("Showcase", () => <Popover />);

storiesOf("Popover", module).add("Basic", () => <Basic />);
