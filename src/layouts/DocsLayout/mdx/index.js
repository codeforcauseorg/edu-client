import React from "react";
import { Divider } from "@material-ui/core";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import List from "./List";
import ListItem from "./ListItem";
import Blockquote from "./Blockquote";
import Code from "./Code";
import InlineCode from "./InlineCode";

const components = {
  // eslint-disable-next-line react/display-name
  h1: (props) => <Heading variant="h1" {...props} />,
  // eslint-disable-next-line react/display-name
  h2: (props) => <Heading variant="h2" {...props} />,
  // eslint-disable-next-line react/display-name
  h3: (props) => <Heading variant="h3" {...props} />,
  // eslint-disable-next-line react/display-name
  ul: (props) => <List variant="ul" {...props} />,
  // eslint-disable-next-line react/display-name
  ol: (props) => <List variant="ol" {...props} />,
  hr: Divider,
  li: ListItem,
  p: Paragraph,
  blockquote: Blockquote,
  code: Code,
  inlineCode: InlineCode,
};

export default components;
