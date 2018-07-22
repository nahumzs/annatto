const tplStories = name => `import React from "react";
import { storiesOf } from "@storybook/react";
import ${name} from "./${name}";

storiesOf("${name}", module).add("Showcase", () => <${name} />);

`;

module.exports = tplStories;
