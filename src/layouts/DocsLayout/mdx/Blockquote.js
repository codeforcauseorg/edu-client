import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    borderLeft: `4px solid ${theme.palette.text.secondary}`,
    "& > p": {
      color: theme.palette.text.secondary,
      marginBottom: 0,
    },
  },
}));

function Blockquote(props) {
  const classes = useStyles();

  return <blockquote className={classes.root} {...props} />;
}

export default Blockquote;
