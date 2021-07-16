import { Box, makeStyles } from "@material-ui/core";
import React from "react";

function ProfileDetailsSection() {
  const classes = useStyles();

  return <Box className={classes.root}></Box>;
}

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default ProfileDetailsSection;
