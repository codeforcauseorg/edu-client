import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import QuestionList from "./SubComponents/QuestionList";

function QuestionSection() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {[1, 2, 3, 4, 5, 6].map((items, index) => (
        <QuestionList key={index} />
      ))}
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 8,
    borderRadius: "5px",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing(0),
    },
  },
}));
export default QuestionSection;
