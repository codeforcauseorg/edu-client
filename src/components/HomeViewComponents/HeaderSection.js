import { Box, makeStyles } from "@material-ui/core";
import React from "react";

function HeaderSection() {
  const classes = useStyles();
  return <Box className={classes.root}></Box>;
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 300,
    background: theme.palette.primary.main,
  },
}));
export default HeaderSection;
