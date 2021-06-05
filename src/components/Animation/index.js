import React from "react";
import Fade from "react-reveal/Fade";

function FadeReveal(props) {
  return <Fade up>{props.children}</Fade>;
}

export default FadeReveal;
