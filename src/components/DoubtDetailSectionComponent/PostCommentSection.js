import { Box, Button, CircularProgress, makeStyles } from "@material-ui/core";
import { convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postDoubtAnswer } from "../../services/doubtService";
import useSWR from "swr";
import { GET_USER_ENDPOINT } from "../../constants/apiEndpoints";
import { loadData } from "../../services/apiService";

function PostCommentSection({ doubtInfo }) {
  const classes = useStyles();

  const [editor, seteditor] = useState(EditorState.createEmpty());

  const { data: currentUserData } = useSWR(GET_USER_ENDPOINT, loadData, {
    revalidateOnFocus: false,
    dedupingInterval: 10000,
  });

  const user = useSelector((state) => state.account.user);

  const { _id } = doubtInfo;

  const onEditorStateChange = (editorState) => {
    console.log(editor);
    seteditor(editorState);
  };

  const loading = useSelector((state) => state.doubt.loading);

  const dispatch = useDispatch();

  const postAnswer = () => {
    dispatch(
      postDoubtAnswer(
        _id,
        currentUserData?.id,
        JSON.stringify(convertToRaw(editor.getCurrentContent())),
        user.displayName
      )
    );
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
      <Button className={classes.button} onClick={() => (loading ? "" : postAnswer())}>
        {loading ? <CircularProgress className={classes.progress} size={30} /> : `Answer`}
      </Button>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
  editor: {
    border: "0.5px solid #F1F1F1",
    minHeight: 200,
    padding: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(4, 0),
    background: theme.palette.primary.main,
    color: "#fff",
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
  progress: {
    color: "#fff",
  },
}));

export default PostCommentSection;
