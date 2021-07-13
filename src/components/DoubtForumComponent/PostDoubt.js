import {
  Box,
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

function PostDoubt({ open, onClose }) {
  const classes = useStyles();

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
}));
export default PostDoubt;
