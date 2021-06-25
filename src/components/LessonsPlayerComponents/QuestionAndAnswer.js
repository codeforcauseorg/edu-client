import {
  makeStyles,
  Box,
  ListItem,
  List,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Button,
  Hidden,
} from "@material-ui/core";
import React from "react";

const buttonElements = [
  {
    label: "Answer",
    value: "65",
  },
  {
    label: "Upvote",
    value: "100",
  },
];

function QuestionAndAnswer() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <List>
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <ListItem key={index} className={classes.listItem}>
            <Hidden smDown>
              <ListItemAvatar>
                <Avatar
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  className={classes.avatar}
                />
              </ListItemAvatar>
            </Hidden>
            <ListItemText>
              <Typography color="textSecondary" variant="subtitle2" className={classes.askedDate}>
                Asked: March 14 ,2020
              </Typography>
              <Typography variant="h6">Data doesnt display.</Typography>
              <Typography
                gutterBottom
                variant="subtitle1"
                component="p"
                className={classes.questionDescription}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum
                dolor sit
              </Typography>
              <Box className={classes.buttonContainer}>
                <Box className={classes.actionButton}>
                  {buttonElements.map((items, index) => (
                    <Button key={index}>
                      {items.value} {items.label}
                    </Button>
                  ))}
                </Box>
                <Button className={classes.answerButton}>Answer</Button>
              </Box>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: 50,
    width: 50,
    marginRight: theme.spacing(4),
  },
  listItem: {
    borderBottom: "1px solid black",
  },
  buttonContainer: {
    display: "flex",
    padding: theme.spacing(1.5),
    backgroundColor: "#F8F8F8",
  },
  actionButton: {
    flexGrow: 1,
  },
  answerButton: {
    backgroundColor: theme.palette.text.primary,
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.text.primary,
    },
  },
  questionDescription: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  askedDate: {
    marginBottom: theme.spacing(0.5),
  },
}));

export default QuestionAndAnswer;
