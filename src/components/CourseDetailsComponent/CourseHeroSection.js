import { makeStyles, Box, Typography, Container } from "@material-ui/core";
import React from "react";
import NavBar from "../../components/NavBar/index";
import Rating from "@material-ui/lab/Rating";
import VideoCard from "./SubComponents/HeroElements/VideoCard";
import CoursePath from "./SubComponents/HeroElements/CoursePath";
import ShareAndWishlistButton from "./SubComponents/HeroElements/ShareAndWishlistButton";
import Instructors from "./SubComponents/HeroElements/Instructors";

function CourseHeroSection() {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <Box pt={14} className={classes.root}>
        <Container className={classes.innerContainer}>
          <CoursePath /> {/* course path component */}
          <Box mt={4}>
            <Typography gutterBottom className={classes.title}>
              Machine Learning, Data Science and Deep Learning with Python
            </Typography>
            <Typography variant="h5" component="p">
              Complete hands-on machine learning tutorial with data science, Tensorflow, artificial
              intelligence, and neural networks
            </Typography>
            <Box className={classes.ratingContainer}>
              {" "}
              <Rating value={4.5} precision={0.5} className={classes.ratingStar} />
              <Typography className={classes.numberOfRatings}> (25,179 ratings)</Typography>
              <Typography className={classes.numberOfStudents}> 148,806 students </Typography>
            </Box>
          </Box>
          <Instructors />
          <ShareAndWishlistButton /> {/* Share and add wishlist button component */}
        </Container>
        <VideoCard /> {/* video card component */}
      </Box>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "85vh",
    color: theme.palette.text.main,
    display: "flex",
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },
  ratingContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
  numberOfStudents: {
    marginLeft: theme.spacing(1.5),
  },
  numberOfRatings: {
    marginLeft: theme.spacing(1.5),
  },
  innerContainer: {
    flex: 3,
  },
  title: {
    fontSize: "2rem",
    fontWeight: 600,
  },
}));
export default CourseHeroSection;
