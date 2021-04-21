import React, { useState } from "react";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
// import style from "./scroll-to-top.module.scss";
import { makeStyles } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
const useStyles = makeStyles((theme) => ({
  top: {
    position: "fixed",
    right: "10px",
    bottom: "25px",
    height: "20px",
    zIndex: 1000,
    animation: "fadeIn 0.3s",
    transition: "opacity 0.4s",
    opacity: "0.8",
    color: "white",
  },
  icon: {
    color: "white",
  },
}));

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);
  const classes = useStyles();
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <Fab
      color="secondary"
      size="small"
      aria-label="scroll back to top"
      className={classes.top}
      style={{
        height: "5%",
        color: "#000000",
        display: showScroll ? "flex" : "none",
      }}
      onClick={scrollTop}
    >
      <KeyboardArrowUpIcon className={classes.icon} />
    </Fab>
  );
};

export default ScrollToTop;
