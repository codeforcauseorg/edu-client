import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CourseCard from "../../components/courseCard/courseCard1";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "-80px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    color: "#000",
    padding: theme.spacing(5, 0),
  },
}));

export default function NonHero() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h3">Continue Learning</Typography>
        <CourseCard />
      </Container>
    </div>
  );
}
