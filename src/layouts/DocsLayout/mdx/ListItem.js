import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {},
}));

function Paragraph(props) {
  const classes = useStyles();

  return (
    <Typography
      variant="body1"
      color="textPrimary"
      component="li"
      className={classes.root}
      {...props}
    />
  );
}

export default Paragraph;
