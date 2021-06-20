import { makeStyles, Box } from "@material-ui/core";
import React from "react";

function PageNotFound() {
  const classes = useStyles();

  return <Box className={classes.root}></Box>;
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    background: "#000",
  },
}));

export default PageNotFound;
