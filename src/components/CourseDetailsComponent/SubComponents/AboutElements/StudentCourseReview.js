import { makeStyles, Box, Typography, Paper } from "@material-ui/core";
import React from "react";
import Rating from "@material-ui/lab/Rating";

function StudentCourseReview(props) {
  const classes = useStyles();
  const { reviewInfo } = props;

  return (
    <Box className={classes.root}>
      <Typography variant="h2">Reviews</Typography>
      <Box>
        {reviewInfo.map((items, index) => (
          <Paper key={index} className={classes.paper}>
            <Typography variant="subtitle1" component="p" gutterBottom>
              {items.reviewDescription}
            </Typography>
            <Box className={classes.flexBox}>
              <Box>
                <Typography variant="h3" gutterBottom>
                  {items.reviewerName}
                </Typography>
                <Typography variant="h5">{items.occupation}</Typography>
              </Box>
              <Box className={classes.ratingContainer}>
                <Rating value={items.raitedStars} precision={0.5} readOnly />
                <Typography variant="h5">{items.timeStamp}</Typography>
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
      padding: theme.spacing(3),
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
