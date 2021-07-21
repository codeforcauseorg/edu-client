import React from "react";
import { Box, CardMedia, makeStyles, Typography } from "@material-ui/core";

function HeroSection({ title, description, banner }) {
  const classes = useStyles();
  return (
    <CardMedia className={classes.heroSection} image={banner}>
      <Box className={classes.infoContainer}>
        <Typography variant="h2">{title}</Typography>
        <Box mt={2} className={classes.description}>
          <Typography variant="body1">{description}</Typography>
        </Box>
      </Box>
    </CardMedia>
  );
}

const useStyles = makeStyles((theme) => ({
  heroSection: {
    minHeight: 200,
    marginTop: theme.spacing(10),
    borderRadius: "5px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 50,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  avatar: {
    height: 120,
    width: 120,
  },
  infoContainer: {
    color: "#fff",
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      marginLeft: theme.spacing(0),
      marginTop: theme.spacing(3),
    },
  },
  description: {
    maxWidth: 500,
  },
}));

export default HeroSection;
