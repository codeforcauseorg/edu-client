import {
  Avatar,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
  Paper,
} from "@material-ui/core";
import moment from "moment";
import React from "react";

function CommentSection({ answers }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {answers.map((items, index) => (
        <AnswerList key={index} props={items} />
      ))}
    </Box>
  );
}

function AnswerList({ props }) {
  const classes = useStyles();
  console.log(props);
  const { createdAt, photoUrl, answer } = props;

  return (
    <Paper className={classes.answers}>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={photoUrl} />
        </ListItemAvatar>
        <ListItemText>
          <Typography>Rohan Kumar</Typography>
          <Typography>{moment(createdAt).fromNow()}</Typography>
        </ListItemText>
      </ListItem>
      <Box className={classes.answerBody}>
        <Typography variant="subtitle1">{answer}</Typography>
      </Box>
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(6),
  },
  answers: {
    margin: theme.spacing(4, 0),
    boxShadow: "0px 4px 15px rgba(55, 64, 161, 0.25)",
    borderRadius: theme.spacing(1),
  },
  answerBody: {
    padding: theme.spacing(4),
  },
}));

export default CommentSection;
