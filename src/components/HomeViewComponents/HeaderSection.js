import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import Hero from "./Hero";

function HeaderSection() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Hero />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({}));
export default HeaderSection;
