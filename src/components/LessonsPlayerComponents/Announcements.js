import { makeStyles, Box } from "@material-ui/core";
import React from "react";

function Announcements() {
  const classes = useStyles();

  return <Box className={classes.container}></Box>;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#fff",
    height: 50,
    width: 50,
  },
}));

export default Announcements;
