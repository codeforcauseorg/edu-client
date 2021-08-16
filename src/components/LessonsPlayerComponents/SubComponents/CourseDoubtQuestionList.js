import React, { useEffect, useState } from "react";
import { EditorState, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import {
  makeStyles,
  Box,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Button,
  Hidden,
} from "@material-ui/core";
import moment from "moment";
import { useHistory } from "react-router";

function CourseDoubtQuestionList({ props }) {
  const classes = useStyles();

  const [editor, seteditor] = useState(EditorState.createEmpty());

  const history = useHistory();

  const { createdAt, doubtBody, photoUrl, _id, answers } = props;

  const obj = JSON.parse(doubtBody);

  const buttonElements = [
    {
      label: "Answer",
      value: answers.length,
    },
    {
      label: "Upvote",
      value: "100",
    },
  ];

  useEffect(() => {
    seteditor(EditorState.createWithContent(convertFromRaw(obj)));
  }, [props]);

  return (
    <ListItem className={classes.listItem}>
      <Hidden smDown>
        <ListItemAvatar>
          <Avatar src={photoUrl} className={classes.avatar} />
        </ListItemAvatar>
      </Hidden>
      <ListItemText>
        <Typography color="textSecondary" variant="subtitle2" className={classes.askedDate}>
          Asked: {moment(createdAt).fromNow()}
        </Typography>
        <Typography variant="h6">Data doesnt display.</Typography>
        <Editor
          editorState={editor}
          editorClassName={classes.questionDescription}
          readOnly
          toolbarClassName={classes.toolbar}
        />
        <Box className={classes.buttonContainer}>
          <Box className={classes.actionButton}>
            {buttonElements.map((items, index) => (
              <Button key={index}>
                {items.value} {items.label}
              </Button>
            ))}
          </Box>
          <Button
            className={classes.answerButton}
            onClick={() => history.push(`/doubt-forum/${_id}`)}
          >
            Answer
          </Button>
        </Box>
      </ListItemText>
    </ListItem>
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
  askedDate: {
    marginBottom: theme.spacing(0.5),
  },
  questionDescription: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    // maxWidth: "825px",
    // [theme.breakpoints.down("sm")]: {
    //   maxWidth: "330px",
    // },
    // [theme.breakpoints.down("md")]: {
    //   maxWidth: "700px",
    // },
    // [theme.breakpoints.down("lg")]: {
    //   maxWidth: "720px",
    // },
  },
  toolbar: {
    display: "none",
  },
}));

export default CourseDoubtQuestionList;
