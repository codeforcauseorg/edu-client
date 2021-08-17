import { makeStyles, Box, Paper, Avatar, Typography, Button } from "@material-ui/core";
import React from "react";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function AskedQuestion({ props }) {
  const classes = useStyles();

  const { question, answers } = props;

  const listItems = [
    {
      title: "Answres",
      value: answers.length,
    },
    {
      title: "Upvotes",
      value: "0",
    },
  ];

  return (
    <Box className={classes.root}>
      <Paper className={classes.paper}>
        <Box className={classes.flexContainer}>
          <Avatar className={classes.avatar}>
            <HelpOutlineIcon />
          </Avatar>
          <Box className={classes.infoContainer}>
            <Typography variant="subtitle1" className={classes.questionTitle}>
              {question}
            </Typography>
            <Box className={classes.buttonContainer}>
              {listItems.map((items, index) => (
                <Button key={index}>
                  {items.value} {items.title}
                </Button>
              ))}
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    cursor: "pointer",
    boxShadow: "0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08)",
  },
  paper: {
    boxShadow: "none",
    borderRadius: "5px",
    padding: theme.spacing(1.5),
  },
  avatar: {
    height: 25,
    width: 25,
    background: theme.palette.primary.main,
  },
  flexContainer: {
    display: "flex",
  },
  questionTitle: {
    marginLeft: theme.spacing(2),
  },
  buttonContainer: {
    marginTop: theme.spacing(1),
  },
}));

export default AskedQuestion;
