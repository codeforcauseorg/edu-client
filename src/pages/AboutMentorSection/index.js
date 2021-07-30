import { Box, makeStyles } from "@material-ui/core";
import React from "react";

function AboutMentorSection() {
  const classes = useStyles();
  return <Box className={classes.root}></Box>;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "70vh",
    background: "linear-gradient(97.46deg, #6EE2F5 -62.66%, #6454F0 157.91%)",
  },
}));

export default AboutMentorSection;
