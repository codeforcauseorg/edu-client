import {
  CardMedia,
  ListItemText,
  makeStyles,
  Card,
  Typography,
  Box,
  Divider,
  Chip,
} from "@material-ui/core";
import React from "react";
import Rating from "@material-ui/lab/Rating";
import { useHistory } from "react-router";

function CourseList() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Card className={classes.container} onClick={() => history.push("/course/2")}>
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
            <Typography variant="body2" gutterBottom className={classes.shortDescription}>
              By Anuj Garg
            </Typography>
            <Box className={classes.ratingContainer}>
              <Typography variant="h6" color="primary">
                4.7
              </Typography>
              <Rating value={4.5} precision={0.5} readOnly className={classes.ratingStar} />
              <Typography variant="h6">(1,000)</Typography>
            </Box>
            <Box pt={1}>
              <Typography> 48 total hours . 570 lectures . Beginner</Typography>
            </Box>
            <Chip size="small" className={classes.chip} label="₹1800" />
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
    [theme.breakpoints.down("sm")]: {
      height: 150,
      width: "100%",
    },
    [theme.breakpoints.between("md", "lg")]: {
      width: "50%",
    },
  },
  container: {
    marginTop: 20,
    boxShadow: "none",
    display: "flex",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  listItemText: {
    padding: 0,
    margin: 0,
  },
  innerContainer: {
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(0),
      marginTop: theme.spacing(2),
    },
  },
  ratingContainer: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
    },
  },
  ratingStar: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(3),
  },
  chip: {
    color: "#fff",
    background: theme.palette.primary.main,
    borderRadius: "5px",
    marginTop: theme.spacing(2),
  },
}));

export default CourseList;
