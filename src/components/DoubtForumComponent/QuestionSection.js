import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import QuestionList from "./SubComponents/QuestionList";

function QuestionSection({ doubtQuestion }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {doubtQuestion.map((items, index) => (
        <QuestionList key={index} questionListItem={items} />
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
