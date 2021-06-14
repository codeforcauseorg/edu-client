import { makeStyles, Box, Typography, Container, Button } from "@material-ui/core";
import React from "react";
import NavBar from "../../components/NavBar/index";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Rating from "@material-ui/lab/Rating";
import ReactPlayer from "react-player/lazy";

const pathList = [
  {
    text: " Development",
    path: "",
    isArrow: true,
  },
  {
    text: " Web Development",
    path: "",
    isArrow: true,
  },
  {
    text: "Training",
    path: "",
    isArrow: true,
  },
  {
    text: " React",
    path: "",
    isArrow: false,
  },
];
function CourseHeroSection() {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <Box pt={14} className={classes.root}>
        <Container className={classes.innerContainer}>
          <Box className={classes.pathContainer}>
            {pathList.map((items, index) => (
              <>
                <Typography variant="h6" key={index} className={classes.pathText}>
                  {items.text}
                </Typography>
                {items.isArrow ? <KeyboardArrowRightIcon /> : <Box />}
              </>
            ))}
          </Box>
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
          <Box mt={4} className={classes.buttonContainer}>
            {[1, 2].map((items, index) => (
              <Button key={index} className={classes.button}>
                <Typography> Share</Typography>
              </Button>
            ))}
          </Box>
        </Container>
        <Container className={classes.videoContainer}>
          <ReactPlayer
            className={classes.reactPlayer}
            controls={true}
            light="https://images.unsplash.com/photo-1423530990185-af7dde1155fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            url="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
            volume={1}
            width="100%"
          />
        </Container>
      </Box>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "585px",
    color: theme.palette.text.main,
    display: "flex",
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  pathContainer: {
    display: "flex",
    color: theme.palette.primary.main,
  },
  pathText: {
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
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
  button: {
    color: "#fff",
    textTransform: "none",
    border: "2px solid #fff",
    marginRight: theme.spacing(2),
    padding: theme.spacing(1, 4),
  },
  videoContainer: {
    flex: 2,
    // background: "#000",
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(5),
    marginBottom: theme.spacing(5),
    borderRadius: "5px",
  },
}));
export default CourseHeroSection;
