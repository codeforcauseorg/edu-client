import React from "react";
import { Avatar, Box, makeStyles, Typography } from "@material-ui/core";

function MyCourseHero() {
  const classes = useStyles();
  return (
    <Box className={classes.heroSection}>
      <Avatar className={classes.avatar} />
      <Box className={classes.infoContainer}>
        <Typography variant="h2">Enrolled Courses</Typography>
        <Box mt={2} className={classes.description}>
          <Typography variant="body1">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the standard dummy text ever since the.
          </Typography>
        </Box>
        <Box mt={5}>
          <Typography variant="body2">5 Enrolled Courses</Typography>
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  heroSection: {
    minHeight: 200,
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing(10),
    borderRadius: "5px",
    borderTop: "4px solid #00BFFF",
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
    background: "linear-gradient(180deg, #00BFFF 0%, #3740A1 100%)",
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

export default MyCourseHero;
