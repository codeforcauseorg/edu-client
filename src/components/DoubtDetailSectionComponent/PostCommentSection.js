/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import { Box, Button, CircularProgress, makeStyles } from "@material-ui/core";
import { convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postDoubtAnswer } from "../../services/doubtService";
import useSWR, { mutate } from "swr";
import { GET_DOUBT_DETAILS_ENDPOINT, GET_USER_ENDPOINT } from "../../constants/apiEndpoints";
import { loadData } from "../../services/apiService";
import { useParams } from "react-router";

function PostCommentSection({ doubtInfo }) {
  const classes = useStyles();

  const [editor, seteditor] = useState(EditorState.createEmpty());

  const { id } = useParams();

  const { data: currentUserData } = useSWR(GET_USER_ENDPOINT, loadData, {
    revalidateOnFocus: false,
    dedupingInterval: 10000,
  });

  const user = useSelector((state) => state.account.user);

  const { _id } = doubtInfo;

  const onEditorStateChange = (editorState) => {
    seteditor(editorState);
  };

  const loading = useSelector((state) => state.doubt.loading);

  const dispatch = useDispatch();

  const answer = JSON.stringify(convertToRaw(editor.getCurrentContent()));

  const answered_by = currentUserData?.id;

  const photoUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1K8ypPsfNVQU8lVxl1i2_ajismMS_w6FA4Q&usqp=CAU";
  const updatedAt = new Date().toLocaleTimeString();

  const postAnswer = () => {
    mutate(
      GET_DOUBT_DETAILS_ENDPOINT + id,
      {
        ...doubtInfo,
        answers: [...doubtInfo.answers, { _id, answer, answered_by, photoUrl, updatedAt }],
      },
      false
    );
    dispatch(postDoubtAnswer(_id, answered_by, answer));
    seteditor(EditorState.createEmpty());
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
      {user ? (
        <Button className={classes.button} onClick={() => (loading ? "" : postAnswer())}>
          {loading ? <CircularProgress className={classes.progress} size={30} /> : `Answer`}
        </Button>
      ) : (
        <Box />
      )}
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
