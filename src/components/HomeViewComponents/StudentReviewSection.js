import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CardContainer from "../cardContainer/cardContainer";
import ReviewCard from "../ReviewCard/ReviewCard";

function StudentReviewSection() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container className={classes.titleContainer}>
        <Typography variant="h1" component="span">
          Review of Our{" "}
          <Typography variant="h1" component="span" className={classes.spanText}>
            Students
          </Typography>
        </Typography>
      </Container>
      <CardContainer>
        {[1, 2, 3, 4, 5, 6].map((items, index) => (
          <ReviewCard key={index} />
        ))}
      </CardContainer>
      <img className={classes.vecImage_1} src="assets/VectorGraphics/Dot_Ornament.svg" />
      <img className={classes.vecImage_2} src="assets/VectorGraphics/Dot_Ornament.svg" />
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    minHeight: 600,
  },
  titleContainer: {
    textAlign: "center",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(7),
  },
  spanText: {
    color: theme.palette.primary.main,
  },
  vecImage_1: {
    position: "absolute",
    right: 30,
    bottom: 20,
  },
  vecImage_2: {
    position: "absolute",
    left: 30,
    top: 20,
  },
}));
export default StudentReviewSection;
