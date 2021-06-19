import { makeStyles, Box, Typography, Container, Hidden } from "@material-ui/core";
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
      <Box className={classes.root}>
        <Container className={classes.innerContainer}>
          <Hidden mdDown>
            <CoursePath /> {/* course path component */}
          </Hidden>
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
              <Rating value={4.5} precision={0.5} readOnly className={classes.ratingStar} />
              <Hidden smDown>
                <Typography className={classes.numberOfRatings}> (25,179 ratings)</Typography>
                <Typography className={classes.numberOfStudents}> 148,806 students </Typography>
              </Hidden>
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
    height: "100%",
    color: theme.palette.text.main,
    display: "flex",
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    paddingTop: theme.spacing(14),
    paddingBottom: theme.spacing(5),
    background: "#e8f0f8",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingTop: theme.spacing(8),
    },
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
