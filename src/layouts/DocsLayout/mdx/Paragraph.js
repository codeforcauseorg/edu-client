import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    "& > a": {
      color: theme.palette.secondary.main,
    },
    fontSize: "1rem",
  },
}));

function Paragraph(props) {
  const classes = useStyles();

  return <Typography variant="body1" color="textPrimary" className={classes.root} {...props} />;
}

export default Paragraph;
