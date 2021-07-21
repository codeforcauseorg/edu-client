import {
  Box,
  Button,
  Divider,
  IconButton,
  makeStyles,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import PostDescriptionEditor from "./SubComponents/PostDescriptionEditor";
import Select from "react-select";
import makeAnimated from "react-select/animated";

function PostDoubt({ open, onClose }) {
  const classes = useStyles();
  const animatedComponents = makeAnimated();

  const options = [
    { value: "Web Development", label: "Web Development" },
    { value: "Mobile Development", label: "Mobile Development" },
    { value: "DSA", label: "DSA" },
    { value: "DevOps", label: "DevOps" },
    { value: "AI/ML", label: "AI/ML" },
  ];

  return (
    <Modal open={open} onClose={onClose} className={classes.modal}>
      <Paper className={classes.paper}>
        <Box className={classes.titleHeader}>
          <Typography variant="h3">New Question</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider className={classes.divider} />
        <Typography variant="h5" className={classes.titles}>
          Question title
        </Typography>
        <TextField fullWidth variant="outlined" />
        <Typography variant="h5" className={classes.titles}>
          Elaborate your doubt
        </Typography>
        <PostDescriptionEditor />
        <Select
          placeholder="Add Tags"
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={options}
        />
        <Button className={classes.postButton} onClick={onClose}>
          Post doubt
        </Button>
      </Paper>
    </Modal>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "40%",
    height: "95%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  titleHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  titles: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  postButton: {
    background: theme.palette.primary.main,
    color: "#fff",
    position: "absolute",
    bottom: 50,
    right: 50,
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
}));
export default PostDoubt;
