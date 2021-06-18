import { makeStyles, Box, Typography, Paper } from "@material-ui/core";
import React from "react";
import Rating from "@material-ui/lab/Rating";

function StudentCourseReview() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h2">Reviews</Typography>
      <Box className={classes.container}>
        {[1, 2, 3].map((items, index) => (
          <Paper key={index} className={classes.paper}>
            <Typography variant="subtitle1" component="p" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </Typography>
            <Box className={classes.flexBox}>
              <Box>
                <Typography variant="h3" gutterBottom>
                  Divyanshu Yadav
                </Typography>
                <Typography variant="h5">Student</Typography>
              </Box>
              <Box className={classes.ratingContainer}>
                <Rating
                  value={4.5}
                  precision={0.5}
                  readOnly
                  size="large"
                  className={classes.ratingStar}
                />
                <Typography variant="h5">1 year ago</Typography>
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "500px",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(8),
    boxShadow: "0px 4px 20px 2px rgba(145, 180, 248, 0.15)",
    minHeight: 250,
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4),
    },
  },
  flexBox: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(4),
  },
  ratingContainer: {
    textAlign: "right",
  },
}));

export default StudentCourseReview;
