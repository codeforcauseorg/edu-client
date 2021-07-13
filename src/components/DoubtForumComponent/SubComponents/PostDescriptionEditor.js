import { Box, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function PostDescriptionEditor() {
  const [editor, seteditor] = useState(EditorState.createEmpty());
  const classes = useStyles();

  const onEditorStateChange = (editorState) => {
    console.log(editor);
    seteditor(editorState);
  };

  return (
    <Box className={classes.box}>
      <Editor
        editorState={editor}
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
          image: { alt: { present: true, mandatory: true } },
        }}
      />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({}));

export default PostDescriptionEditor;
