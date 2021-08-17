/* eslint-disable camelcase */
import { Box, makeStyles, Paper, Avatar, Typography, Chip, Hidden } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { useHistory } from "react-router";
import moment from "moment";
import { EditorState, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

function QuestionList({ questionListItem }) {
  const classes = useStyles();

  const history = useHistory();

  const [editor, seteditor] = useState(EditorState.createEmpty());

  const {
    answers,
    question,
    tags,
    createdAt,
    is_resolved,
    doubtBody,
    photoUrl,
    _id,
  } = questionListItem;

  const obj = JSON.parse(doubtBody);

  useEffect(() => {
    seteditor(EditorState.createWithContent(convertFromRaw(obj)));
  }, [questionListItem]);

  return (
    <Paper className={classes.paper} onClick={() => history.push(`/doubt-forum/${_id}`)}>
      <Hidden mdDown>
        <Box className={classes.avatarContainer}>
          <Avatar className={classes.avatar} src={photoUrl} />
        </Box>
      </Hidden>
      <Box className={classes.infoContainer}>
        <Box className={classes.innerContainer}>
          <Typography variant="h5" className={classes.title} gutterBottom>
            {question}
          </Typography>
          <Box className={classes.statusContainer}>
            <Typography variant="subtitle2" gutterBottom className={classes.moment}>
              {moment(createdAt).fromNow()}
            </Typography>
            {is_resolved === true ? (
              <Chip label="Resolved" size="small" className={classes.resolvedChip} />
            ) : (
              <Chip label="Active" size="small" className={classes.activeChip} />
            )}
          </Box>
          <Editor
            editorState={editor}
            editorClassName={classes.questionDescription}
            readOnly
            toolbarClassName={classes.toolbar}
          />
          {tags.map((items, index) => (
            <Chip key={index} label={items} className={classes.chip} />
          ))}
        </Box>
        <Box className={classes.actionContainer}>
          <Box className={classes.flex}>
            <ChatBubbleOutlineIcon className={classes.icons} />
            <Typography>{answers.length} Answers</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: "5px",
    display: "flex",
    margin: theme.spacing(2),
    boxShadow: "0px 4px 20px rgba(55, 64, 161, 0.1)",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(0),
      marginBottom: theme.spacing(2),
    },
  },
  infoContainer: {
    width: "100%",
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  resolvedChip: {
    background: theme.palette.success.main,
    color: "#fff",
    borderRadius: "5px",
  },
  activeChip: {
    background: theme.palette.secondary.main,
    color: "#fff",
    borderRadius: "5px",
  },
  moment: {
    marginRight: theme.spacing(2),
  },
  statusContainer: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    height: 50,
    width: 50,
  },
  title: {
    fontWeight: 600,
  },
  chip: {
    borderRadius: "5px",
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
    background: "#E6F3FF",
    color: theme.palette.primary.main,
  },
  avatarContainer: {
    margin: theme.spacing(2),
  },
  questionDescription: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    maxWidth: "825px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "330px",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "700px",
    },
    [theme.breakpoints.down("lg")]: {
      maxWidth: "720px",
    },
  },
  flex: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
  actionContainer: {
    paddingTop: theme.spacing(4),
    marginRight: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(0),
    },
  },
  innerContainer: {
    flex: 8,
  },
  icons: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    display: "none",
  },
}));

export default QuestionList;
