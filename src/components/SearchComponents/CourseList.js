import {
  CardMedia,
  ListItemText,
  makeStyles,
  Card,
  Typography,
  Box,
  Divider,
} from "@material-ui/core";
import React from "react";
import Rating from "@material-ui/lab/Rating";

function CourseList() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.container}>
        <CardMedia component="img" className={classes.media} image="assets/img/img3.PNG" />
        <Box className={classes.innerContainer}>
          <ListItemText className={classes.listItemText}>
            <Typography variant="h6" gutterBottom>
              React - The Complete Guide (incl Hooks, React Router, Redux)
            </Typography>
            <Typography variant="subtitle1" gutterBottom className={classes.shortDescription}>
              Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing,
              Animations, Next.js and way more!
            </Typography>
            <Typography variant="subtitle2" gutterBottom className={classes.shortDescription}>
              By Anuj Garg
            </Typography>
            <Box className={classes.ratingContainer}>
              <Typography variant="h6" color="primary">
                4.7
              </Typography>
              <Rating value={4.5} precision={0.5} readOnly className={classes.ratingStar} />
              <Typography variant="h6">(1,000)</Typography>
            </Box>
          </ListItemText>
        </Box>
      </Card>
      <Divider className={classes.divider} />
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  media: {
    height: 150,
    width: "22%",
    borderRadius: "5px",
  },
  container: {
    marginTop: 20,
    boxShadow: "none",
    display: "flex",
  },
  listItemText: {
    padding: 0,
    margin: 0,
  },
  innerContainer: {
    marginLeft: theme.spacing(3),
  },
  ratingContainer: {
    display: "flex",
  },
  ratingStar: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(3),
  },
}));

export default CourseList;
