import React, { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import Select from "react-select";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch, useSelector } from "react-redux";
import { postDoubt } from "../../services/doubtService";
import useSWR from "swr";
import { ALL_COURSE_CARD_ENDPOINT, GET_USER_ENDPOINT } from "../../constants/apiEndpoints";
import { loadData } from "../../services/apiService";

function AskQuestion() {
  const classes = useStyles();

  const [question, setQuestion] = useState();

  const [courseID, setCourseID] = useState();

  const dispatch = useDispatch();

  const [editor, seteditor] = useState(EditorState.createEmpty());

  const { data: courseCardData } = useSWR(ALL_COURSE_CARD_ENDPOINT, loadData, {
    revalidateOnFocus: false,
    dedupingInterval: 100000,
  });

  const { data: currentUserData } = useSWR(GET_USER_ENDPOINT, loadData, {
    revalidateOnFocus: false,
    dedupingInterval: 10000,
  });

  const onEditorStateChange = (editorState) => {
    console.log(editor);
    seteditor(editorState);
  };

  const loading = useSelector((state) => state.doubt.loading);

  const user = useSelector((state) => state.account.user);

  const [tag, setTag] = useState([]);

  const options = [
    { value: "Web Development", label: "Web Development" },
    { value: "Mobile Development", label: "Mobile Development" },
    { value: "DSA", label: "DSA" },
    { value: "DevOps", label: "DevOps" },
    { value: "AI/ML", label: "AI/ML" },
  ];

  const handleChange = (selectedOptions) => {
    setTag({ selectedOptions });
  };

  const handleCourseID = (selectedOptions) => {
    setCourseID(selectedOptions);
  };

  const tags = tag.selectedOptions?.map((items) => items.value);

  const selectedCourseID = courseID?._id;

  const handlePost = () => {
    dispatch(
      postDoubt(
        selectedCourseID,
        tags,
        currentUserData?.id,
        question,
        JSON.stringify(convertToRaw(editor.getCurrentContent())),
        user.displayName
      )
    );
  };

  return (
    <Container className={classes.root}>
      <Box className={classes.titleHeader}>
        <Typography variant="h2">Ask new question</Typography>
      </Box>
      <Paper className={classes.paper}>
        <Typography variant="h5" className={classes.titles}>
          Question title
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          onChange={(event) => setQuestion(event.target.value)}
        />
        <Typography variant="h5" className={classes.titles}>
          Elaborate your doubt
        </Typography>
        <Box className={classes.box}>
          <Editor
            editorState={editor}
            isMulti
            onEditorStateChange={onEditorStateChange}
            editorClassName={classes.editor}
            placeholder="Type away :)"
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
        <Select
          placeholder="Add Tags"
          closeMenuOnSelect={false}
          isMulti
          options={options}
          onChange={handleChange}
        />
        <Typography variant="h5" className={classes.titles}>
          Select Course for which you want ask doubt
        </Typography>
        <Select
          className={classes.selectCourse}
          getOptionLabel={(options) => options.name}
          getOptionValue={(options) => options._id}
          placeholder={<Typography>Select Course..</Typography>}
          cacheOptions
          options={courseCardData}
          onChange={handleCourseID}
          theme={(theme) => ({
            ...theme,
            borderRadius: 5,
            colors: {
              ...theme.colors,
              primary: "#3740A1",
            },
          })}
        />
      </Paper>

      <Button className={classes.postButton} onClick={() => (loading ? "" : handlePost())}>
        {loading ? <CircularProgress size={30} className={classes.progress} /> : `Post doubt`}
      </Button>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "80%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0px 4px 20px rgba(55, 64, 161, 0.1)",
    padding: theme.spacing(8),
  },
  titleHeader: {
    marginBottom: theme.spacing(4),
  },
  titles: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  postButton: {
    background: theme.palette.primary.main,
    marginTop: theme.spacing(4),
    color: "#fff",
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
  root: {
    maxWidth: "90%",
    margin: theme.spacing(8),
  },
  editor: {
    border: "0.5px solid #F1F1F1",
    minHeight: 200,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  progress: {
    color: "#fff",
  },
  selectCourse: {
    fontFamily: "Montserrat, sans-serif",
  },
}));

export default AskQuestion;
