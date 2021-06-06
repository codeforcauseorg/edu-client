import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import MyCourseMediaCard from "./MyCourseMediaCard";

function MyCourseCard() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container spacing={4}>
        {[1, 2, 3, 4, 5, 6].map((items, index) => (
          <MyCourseMediaCard key={index} />
        ))}
      </Grid>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    minWidth: "100%",
    marginBottom: theme.spacing(10),
    marginTop: theme.spacing(10),
  },
}));

export default MyCourseCard;
