import {
  AppBar,
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
  Divider,
} from "@material-ui/core";
import { ArrowBack, Assignment, Delete } from "@material-ui/icons";
import Link from "@material-ui/core/Link";
import React from "react";
import ControlPointOutlinedIcon from "@material-ui/icons/ControlPointOutlined";
import { useHistory } from "react-router";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useFileUpload } from "use-file-upload";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    background: "#fff",
    color: "#000",
    "& .MuiTypography-h6": {
      flexGrow: 1,
    },
    "& .MuiButton-root": {
      color: "#246A89",
    },
  },
  chip: {
    background: "#246A89",
    color: "#fff",
  },
  chipcontainer: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(1),
  },
  titlecontainer: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(3),
    "& .MuiTypography-root": {
      color: "#808080",
    },
    "& .MuiTypography-subtitle2": {
      marginTop: theme.spacing(0.5),
    },
  },
  description: {
    margin: theme.spacing(3),
  },
  submissionsection: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: theme.spacing(3),
  },
  list: {
    background: "#F2F2F2",
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  modal: {
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 400,
  },
  icons: {
    margin: "6%",
    textAlign: "center",
  },
  img: {
    width: "100px",
    padding: "1em",
  },
}));

function AssignmentList({ items }) {
  const classes = useStyles();

  return items
    ? items.map((file, index) => (
        <List key={index} component="nav" className={classes.list} aria-label="contacts">
          <Link href={file.source} color="inherit" target="_blank" underline="none">
            <ListItem>
              <ListItemIcon>
                <Assignment />
              </ListItemIcon>
              <ListItemText primary={file.name} />
              <span> Size: {file.size} bytes </span>
              <ListItemIcon>
                <IconButton>
                  <Delete />
                </IconButton>
              </ListItemIcon>
            </ListItem>
          </Link>
        </List>
      ))
    : [1, 2, 3].map((file, index) => (
        <List key={index} component="nav" className={classes.list} aria-label="contacts">
          <ListItem>
            <ListItemIcon>
              <Assignment />
            </ListItemIcon>
            <ListItemText primary="Assignments.pdf" />
            <ListItemIcon>
              <IconButton>
                <Delete />
              </IconButton>
            </ListItemIcon>
          </ListItem>
        </List>
      ));
}

function AssignmentSubmission() {
  const classes = useStyles();
  const history = useHistory();

  const [files, selectFiles] = useFileUpload();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange = () => {
    selectFiles({ multiple: true }, (files) => {
      files.map(({ file, source, name, size }) => console.log({ source, name, size, file }));
    });
    setOpen(false);
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.backButton}
            color="inherit"
            onClick={() => history.goBack()}
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Android Programming
          </Typography>
          <Button>
            <Typography>IN HAND</Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <Box className={classes.chipcontainer}>
        <Chip size="small" label="Active" className={classes.chip} />
      </Box>
      <Box className={classes.titlecontainer}>
        <Typography variant="h1">Assignment 1</Typography>
        <Typography variant="subtitle2">Due 30 March 2021 23:59</Typography>
      </Box>
      <Box className={classes.description}>
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industr standard dummy text ever since the 1500s, when an unknown printer took a
          galley of type and scrambled it to make a type specimen book.
        </Typography>
      </Box>
      <Box className={classes.submissionsection}>
        <Typography variant="h5">My Submission</Typography>
        <IconButton>
          <ControlPointOutlinedIcon onClick={handleOpen} />
          <Modal
            aria-labelledby="transition-modal-title"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <Typography style={{ textAlign: "center" }}>Upload Assignment</Typography>
                <Divider />
                <br />
                <div style={{ textAlign: "center" }}>
                  <Button
                    variant="contained"
                    color="default"
                    component="span"
                    startIcon={<AddIcon />}
                    onClick={onChange}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </Fade>
          </Modal>
        </IconButton>
      </Box>
      <Box>
        <AssignmentList items={files} />
      </Box>
    </Container>
  );
}

export default AssignmentSubmission;
