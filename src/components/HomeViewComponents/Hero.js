import { makeStyles, Box, Typography, Button } from "@material-ui/core";
import React from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

function Hero() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.infoContainer}>
        <Typography gutterBottom variant="h6" className={classes.topTitle}>
          Start Learning
        </Typography>
        <Typography gutterBottom variant="h1">
          Learn for Cause Code for Cause
        </Typography>
        <Typography gutterBottom variant="h5" component="p" className={classes.paragraph}>
          An initiative to contribute to the Open Source community by providing training, guidance,
          and awareness about the possibilities in the field of software to students &
          professionals.
        </Typography>
        <Box className={classes.buttonContainer}>
          <Button className={classes.liveCoursesButton}>
            <PlayCircleOutlineIcon className={classes.playIcon} />
            Our Live Courses
          </Button>
          <Button className={classes.newCoursesButton}>New Courses</Button>
        </Box>
      </Box>
      <Box className={classes.imageContainer}>
        <img src="illustrations/webdevelopment.svg" className={classes.image} />
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "90vh",
    [theme.breakpoints.down("md")]: {
      display: "block",
      height: "100%",
    },
    [theme.breakpoints.down("lg")]: {
      display: "block",
      height: "100%",
    },
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center",
    flex: 5,
    margin: theme.spacing(15),
    [theme.breakpoints.down("lg")]: {
      margin: theme.spacing(8),
      marginTop: theme.spacing(12),
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(4),
      marginTop: theme.spacing(10),
    },
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: 6,
  },
  image: {
    height: "90%",
    width: "90%",
    [theme.breakpoints.down("lg")]: {
      height: "500px",
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      height: "300px",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      height: "300px",
      width: "100%",
    },
  },
  liveCoursesButton: {
    marginRight: theme.spacing(3),
    background: theme.palette.primary.main,
    borderRadius: "5px",
    padding: theme.spacing(1.5),
    color: "#fff",
    textTransform: "none",
    transition: "0.5s",
    "&:hover": {
      background: theme.palette.primary.main,
      boxShadow: `0px 4px 10px 1px ${theme.palette.primary.main}`,
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
      marginRight: theme.spacing(0),
    },
  },
  newCoursesButton: {
    background: theme.palette.secondary.default,
    borderRadius: "5px",
    padding: theme.spacing(1.5),
    transition: "0.5s",
    color: "#fff",
    textTransform: "none",
    "&:hover": {
      background: theme.palette.secondary.default,
      boxShadow: `0px 4px 10px 1px ${theme.palette.secondary.default}`,
    },
  },
  buttonContainer: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  paragraph: {
    marginTop: theme.spacing(2),
    lineHeight: theme.spacing(0.2),
  },
  topTitle: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4),
    },
  },
  playIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default Hero;
