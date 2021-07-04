import { makeStyles, Box, Typography, Chip } from "@material-ui/core";
import React from "react";

function PopularTopics() {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography variant="h4" className={classes.heading}>
        Popular Topics
      </Typography>
      {[1, 2, 3, 4, 5].map((items, index) => (
        <Chip className={classes.chip} key={index} label="Python" />
      ))}
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#F8F9FD",
    borderRadius: "5px",
    padding: theme.spacing(4),
  },
  heading: {
    textTransform: "uppercase",
    color: theme.palette.text.primary,
    padding: theme.spacing(2),
  },
  chip: {
    borderRadius: "5px",
    margin: theme.spacing(0.5),
    cursor: "pointer",
    background: "#D6F0FE",
  },
}));
export default PopularTopics;
