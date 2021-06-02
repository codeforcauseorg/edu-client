import { Box, Container, makeStyles } from "@material-ui/core";
import React from "react";

function MentorSection() {
  const classes = useStyles();
  return (
    <Box mt={10} className={classes.root}>
      <Container className={classes.titleContainer}></Container>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 550,
  },
  titleContainer: {
    textAlign: "center",
    color: "#fff",
    paddingTop: theme.spacing(5),
  },
  spanText: {
    color: theme.palette.text.primary,
  },
}));

export default MentorSection;
