import { Box, Button, makeStyles } from "@material-ui/core";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import React, { useState } from "react";

function PostCommentSection() {
  const classes = useStyles();
  const [editor, seteditor] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    console.log(editor);
    seteditor(editorState);
  };

  return (
    <Box className={classes.box}>
      <Editor
        editorState={editor}
        onEditorStateChange={onEditorStateChange}
        spellCheck={true}
        editorClassName={classes.editor}
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
          image: { alt: { present: true, mandatory: true } },
        }}
      />
      <Button className={classes.button}>Answer</Button>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
  editor: {
    border: "0.5px solid #F1F1F1",
    minHeight: 200,
  },
  button: {
    margin: theme.spacing(4, 0),
    background: theme.palette.primary.main,
    color: "#fff",
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
}));

export default PostCommentSection;
