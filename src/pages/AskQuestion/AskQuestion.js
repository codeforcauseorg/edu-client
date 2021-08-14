import React from "react";
import {
  Box,
  Button,
  Container,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import PostDescriptionEditor from "../../components/DoubtForumComponent/SubComponents/PostDescriptionEditor";
import Select from "react-select";

function AskQuestion() {
  const classes = useStyles();

  const options = [
    { value: "Web Development", label: "Web Development" },
    { value: "Mobile Development", label: "Mobile Development" },
    { value: "DSA", label: "DSA" },
    { value: "DevOps", label: "DevOps" },
    { value: "AI/ML", label: "AI/ML" },
  ];

  return (
    <Container className={classes.root}>
      <Box className={classes.titleHeader}>
        <Typography variant="h2">Ask new question</Typography>
      </Box>
      <Paper className={classes.paper}>
        <Typography variant="h5" className={classes.titles}>
          Question title
        </Typography>
        <TextField fullWidth variant="outlined" />
        <Typography variant="h5" className={classes.titles}>
          Elaborate your doubt
        </Typography>
        <PostDescriptionEditor />
        <Select placeholder="Add Tags" closeMenuOnSelect={false} isMulti options={options} />
      </Paper>
      <Button className={classes.postButton}>Post doubt</Button>
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
}));

export default AskQuestion;
