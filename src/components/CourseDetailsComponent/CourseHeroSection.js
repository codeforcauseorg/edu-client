import { makeStyles, Box, Typography, Container, Hidden, Button } from "@material-ui/core";
import React from "react";
import Rating from "@material-ui/lab/Rating";
import VideoCard from "./SubComponents/HeroElements/VideoCard";
import CoursePath from "./SubComponents/HeroElements/CoursePath";
import ShareAndWishlistButton from "./SubComponents/HeroElements/ShareAndWishlistButton";
import Instructors from "./SubComponents/HeroElements/Instructors";

function CourseHeroSection(props) {
  const classes = useStyles();

  const {
    // whatYouWillLearn,
    // skills,
    // prerequisites,
    // reviews,
    // courseLevel,
    // tags,
    // schedule,
    // assignments,
    mentor,
    // active,
    name,
    price,
    // coupons,
    // video_num,
    // duration,
    // start_date,
    // end_date,
    // sharable_link,
    courseDetails,
    courseThumbnail,
    courseTrailerUrl,
    // id,
  } = props.details;

  const videoContent = {
    courseTrailerUrl,
    crossPrice: 1500,
    price,
    courseThumbnail,
  };

  return (
    <>
      <Box className={classes.root}>
        <Container className={classes.innerContainer}>
          <Hidden mdDown>
            <CoursePath /> {/* course path component */}
          </Hidden>
          <Box mt={4}>
            <Typography gutterBottom className={classes.title}>
              {name}
            </Typography>
            <Typography variant="h5" component="p">
              {courseDetails}
            </Typography>
            <Box className={classes.ratingContainer}>
              <Rating value={4.0} precision={0.5} readOnly className={classes.ratingStar} />
              <Hidden smDown>
                <Typography className={classes.numberOfRatings}>(2000 ratings)</Typography>
                <Typography className={classes.numberOfStudents}>(1800 students) </Typography>
              </Hidden>
            </Box>
          </Box>
          <Button className={classes.couponCode}>
            <Typography variant="h6">Use Code : CFC490</Typography>
          </Button>
          <Instructors mentors={mentor} />
          <ShareAndWishlistButton /> {/* Share and add wishlist button component */}
        </Container>
        <VideoCard videoInfo={videoContent} /> {/* video card component */}
      </Box>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    color: "#ffffff",
    display: "flex",
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(8),
    background: "linear-gradient(97.46deg, #3499FF -62.66%, #3A3985 157.91%)",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingTop: theme.spacing(2),
    },
  },
  ratingStar: {
    color: "#FFCF1B",
  },
  couponCode: {
    background: "linear-gradient(97.46deg, #FF9897 -62.66%, #EE4D5F 157.91%)",
    color: "#fff",
    padding: theme.spacing(1, 1),
    marginTop: theme.spacing(3),
    borderRadius: "5px",
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
