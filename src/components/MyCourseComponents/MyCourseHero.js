import React from "react";
import { Container, makeStyles } from "@material-ui/core";

function MyCourseHero() {
  const classes = useStyles();
  return <Container className={classes.heroSection}></Container>;
}

const useStyles = makeStyles((theme) => ({
  heroSection: {
    minHeight: 200,
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing(10),
  },
}));

export default MyCourseHero;
