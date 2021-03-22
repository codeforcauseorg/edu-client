import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cardContainer: {
    padding: "20px 10px",
    paddingBottom: "50px",
    display: "flex",
    flexWrap: "nowrap",
    gap: "24px",
    overflowX: "scroll",
    scrollbarWidth: "none" /* mozilla */,
    "&::-webkit-scrollbar": {
      display: "none" /* Safari and Chrome browsers */,
    },
  },
});

const CardContainer = (props) => {
  const classes = useStyles();

  return <div className={classes.cardContainer}>{props.children}</div>;
};

export default CardContainer;
