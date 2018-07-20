import React from "react";
import ReactDOMServer from "react-dom/server";

// extract plain text from a JSX node
const getTextFromNode = node => {
  if (!node) return "";
  if (typeof node === "string") return node;
  if (React.isValidElement(node)) return ReactDOMServer.renderToStaticMarkup(node).replace(/<(?:.|\n)*?>/gm, "");
  return "";
};

export default getTextFromNode;
