import {
  Avatar,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { EditorState, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import moment from "moment";
import React, { useEffect, useState } from "react";

function DoubtHeaderSection({ doubtInfo }) {
  const classes = useStyles();

  const { doubtBody, question, photoUrl, createdAt } = doubtInfo;

  const [editor, seteditor] = useState(EditorState.createEmpty());

  const obj = JSON.parse(doubtBody);

  useEffect(() => {
    seteditor(EditorState.createWithContent(convertFromRaw(obj)));
  }, [doubtInfo]);

  return (
    <>
      <Box className={classes.headderContainer}>
        <Typography variant="h3" className={classes.questionTitle} gutterBottom>
          {question}
        </Typography>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={photoUrl} />
          </ListItemAvatar>
          <ListItemText>
            <Typography variant="body2">Adarsh Kumar Singh</Typography>
            <Typography>{moment(createdAt).fromNow()}</Typography>
          </ListItemText>
        </ListItem>
      </Box>
      <Editor
        editorState={editor}
        editorClassName={classes.questionDescription}
        readOnly
        toolbarClassName={classes.toolbar}
      />
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  questionTitle: {
    fontWeight: 500,
  },
  questionDescription: {
    margin: theme.spacing(4, 0),
  },
  toolbar: {
    display: "none",
  },
}));

export default DoubtHeaderSection;
