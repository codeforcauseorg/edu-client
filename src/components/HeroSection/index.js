import React from "react";
import { Avatar, Box, makeStyles, Typography } from "@material-ui/core";

function HeroSection({ title, description, otherDetails }) {
  const classes = useStyles();
  return (
    <Box className={classes.heroSection}>
      <Avatar className={classes.avatar} />
      <Box className={classes.infoContainer}>
        <Typography variant="h2">{title}</Typography>
        <Box mt={2} className={classes.description}>
          <Typography variant="body1">{description}</Typography>
        </Box>
        <Box mt={5}>
          <Typography variant="body2">{otherDetails}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  heroSection: {
    minHeight: 200,
    background: "linear-gradient(269.98deg, #3740A1 -4.96%, #2ECDFF 203.33%)",
    marginTop: theme.spacing(10),
    borderRadius: "5px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 35,
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
