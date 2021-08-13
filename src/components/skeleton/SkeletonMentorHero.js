import { Box, Container, makeStyles } from "@material-ui/core";
import React from "react";
import SkeletonElement from "./SkeletonElement";

function SkeletonMentorHero() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container className={classes.wrapper}>
        <SkeletonElement variant="circle" height={250} width={250} />
        <Box className={classes.container}>
          <SkeletonElement variant="text" component="h4" width={150} />
          <Box className={classes.socialIconsContainer}>
            {[1, 2, 3].map((items, index) => (
              <SkeletonElement key={index} variant="text" component="h4" width={50} />
            ))}
          </Box>

          <SkeletonElement variant="text" component="h4" width={100} />
        </Box>
      </Container>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(90deg, #5848EA 0%, #9549EB 100%)",
  },
  wrapper: {
    maxWidth: "85%",
    height: "100%",
    padding: theme.spacing(4, 0),
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(0),
      marginTop: theme.spacing(4),
    },
  },
  socialIconsContainer: {
    margin: theme.spacing(4, 0),
  },
}));

export default SkeletonMentorHero;
