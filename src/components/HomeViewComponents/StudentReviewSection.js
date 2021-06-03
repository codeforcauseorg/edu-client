import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "react-material-ui-carousel";
import CardContainer from "../cardContainer/cardContainer";
import ReviewCard from "../ReviewCard/ReviewCard";
import FadeReveal from "../Animation/index";
function StudentReviewSection() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <FadeReveal>
        <Container className={classes.titleContainer}>
          <Typography variant="h2" component="span">
            What people say
          </Typography>
        </Container>
      </FadeReveal>
      <Container className={classes.carouselContainer}>
        <CardContainer>
          <Carousel
            fullHeightHover={true}
            timeout={600}
            stopAutoPlayOnHover={true}
            indicators={false}
            navButtonsAlwaysInvisible={true}
            navButtonsProps={{
              style: {
                backgroundColor: "transparent",
              },
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((items, index) => (
              <ReviewCard key={index} />
            ))}
          </Carousel>
        </CardContainer>
      </Container>

      <img className={classes.vecImage_1} src="assets/VectorGraphics/Dot_Ornament.svg" />
      <img className={classes.vecImage_2} src="assets/VectorGraphics/Dot_Ornament.svg" />
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    minHeight: 400,
  },
  titleContainer: {
    position: "absolute",
    textAlign: "center",
    left: 320,
    top: -30,
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
}));
export default StudentReviewSection;
