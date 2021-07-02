import { makeStyles, Box, Container, Hidden, Avatar } from "@material-ui/core";
import React from "react";
import SkeletonElement from "../SkeletonElement";

function HeroSkeleton() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container className={classes.innerContainer}>
        <Hidden mdDown>
          <SkeletonElement variant="rect" height={20} width="40%" />
        </Hidden>
        <Box mt={4}>
          <SkeletonElement variant="rect" height={50} className={classes.padding} />
          <SkeletonElement variant="rect" height={20} className={classes.padding} />
          <Box className={classes.ratingContainer}>
            <SkeletonElement variant="rect" height={20} width="20%" />
          </Box>
          <Hidden smDown>
            <Box mt={4} display="flex">
              {[1, 2].map((index) => (
                <SkeletonElement key={index} variant="circle" className={classes.avatar}>
                  <Avatar />
                </SkeletonElement>
              ))}
            </Box>
          </Hidden>
        </Box>
      </Container>
      <Box className={classes.videoContainer}>
        <SkeletonElement variant="rect" height={200} width="100%" className={classes.padding} />
        <SkeletonElement variant="rect" height={50} width="100%" />
      </Box>
    </Box>
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
  innerContainer: {
    flex: 3,
  },
  padding: {
    marginBottom: theme.spacing(1.5),
  },
  videoContainer: {
    flex: 1.5,
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(5),
    },
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
}));
export default HeroSkeleton;
