import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const pathList = [
  {
    text: " Development",
    path: "",
    isArrow: true,
  },
  {
    text: " Web Development",
    path: "",
    isArrow: true,
  },
  {
    text: "Training",
    path: "",
    isArrow: true,
  },
  {
    text: " React",
    path: "",
    isArrow: false,
  },
];

function CoursePath() {
  const classes = useStyles();
  return (
    <Box className={classes.pathContainer}>
      {pathList.map((items, index) => (
        <>
          <Typography variant="h6" key={index} className={classes.pathText}>
            {items.text}
          </Typography>
          {items.isArrow ? <KeyboardArrowRightIcon /> : <Box />}
        </>
      ))}
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  pathContainer: {
    display: "flex",
    color: theme.palette.primary.main,
  },
  pathText: {
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
}));

export default CoursePath;
