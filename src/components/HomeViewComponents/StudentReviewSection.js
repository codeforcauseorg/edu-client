import { Box, Grid, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CardContainer from "../cardContainer/cardContainer";
import ReviewCard from "../ReviewCard/ReviewCard";
import FadeReveal from "../Animation/index";
import { recommendations } from "../../data/recommendations";
function StudentReviewSection() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <FadeReveal>
        <Container className={classes.titleContainer}>
          <Typography variant="h1" color="textprimary" component="span">
            What our student&apos;s say
          </Typography>
        </Container>
      </FadeReveal>
      <Grid className={classes.gridScroll}>
        <div className={classes.reviewSlide}>
          <CardContainer>
            {recommendations.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </CardContainer>
        </div>
      </Grid>
      <img className={classes.vecImage_1} src="assets/VectorGraphics/Dot_Ornament.svg" />
      <img className={classes.vecImage_2} src="assets/VectorGraphics/Dot_Ornament.svg" />
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    minHeight: 650,
  },
  titleContainer: {
    textAlign: "center",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(7),
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

  "@keyframes slideshow": {
    "0%": {
      left: "10%",
    },
    "100%": {
      left: "-140%",
    },
  },
  reviewSlide: {
    position: "inherit",
    left: 0,
    top: 0,
    overflow: "hidden",
    height: "100%",
    width: "250%",
    animation: "$slideshow 140s linear infinite",
  },
  gridScroll: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    position: "relative",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      overflow: "scroll",
    },
  },
}));

export default StudentReviewSection;
