import { configure } from "@storybook/react";

// theoretically this should be replace with our own global style css file
import "./reset.css";
// automatically import all files ending in *.stories.js
const req = require.context("../packages", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
