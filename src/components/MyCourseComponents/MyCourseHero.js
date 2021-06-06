import React from "react";
import { Box, makeStyles } from "@material-ui/core";

function MyCourseHero() {
  const classes = useStyles();
  return <Box className={classes.heroSection}></Box>;
}

const useStyles = makeStyles((theme) => ({
  heroSection: {
    minHeight: 200,
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing(10),
    borderRadius: "5px",
  },
}));

export default MyCourseHero;
