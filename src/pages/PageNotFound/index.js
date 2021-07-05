import { makeStyles, Box, Typography, Chip, Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";

function PageNotFound() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box className={classes.root}>
      <Box className={classes.imageContainer}>
        <img className={classes.image} src="illustrations/page404.svg" alt="" />
      </Box>
      <Box className={classes.infoContainer}>
        <Box className={classes.chipContainer}>
          <Chip className={classes.chip} label="Page not found" />
        </Box>
        <Typography className={classes.errorText} color="textPrimary">
          Oh NO! Error 404
        </Typography>
        <Typography variant="h2" color="textSecondary">
          Mybe bigfoot has broken this page Come back to the homepage
        </Typography>
        <Box className={classes.buttonContainer}>
          <Button className={classes.button} onClick={() => history.push("/home")}>
            Back to Homepage
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    background: "#fff",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  image: {
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      height: 400,
    },
  },
  imageContainer: {
    width: "100%",
  },
  infoContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginRight: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing(5),
      marginLeft: theme.spacing(5),
    },
  },
  chip: {
    background: "#2B3E4C",
    color: "#fff",
  },
  chipContainer: {
    paddingBottom: theme.spacing(2),
  },
  button: {
    background: "#587BDA",
    color: "#fff",
    textTransform: "none",
    padding: theme.spacing(1.5),
    borderRadius: "5px",
    "&:hover": {
      background: "#587BDA",
    },
  },
  errorText: {
    fontSize: "50px",
    fontWeight: 800,
  },
  buttonContainer: {
    paddingTop: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      marginBottom: theme.spacing(4),
    },
  },
}));

export default PageNotFound;
