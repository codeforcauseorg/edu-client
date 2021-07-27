import {
  Avatar,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

function CommentSection() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {[1, 2, 3, 4, 5].map((items, index) => (
        <AnswerList key={index} />
      ))}
    </Box>
  );
}

function AnswerList() {
  const classes = useStyles();
  return (
    <Box className={classes.answers}>
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Typography>Rohan Kumar</Typography>
          <Typography>2 min ago</Typography>
        </ListItemText>
      </ListItem>
      <Typography>Answer Body</Typography>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(6),
  },
  answers: {
    margin: theme.spacing(4, 0),
  },
}));

export default CommentSection;
