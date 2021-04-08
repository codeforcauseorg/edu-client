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
} from "@material-ui/core";
import { ArrowBack, Assignment, Delete } from "@material-ui/icons";
import React from "react";
import ControlPointOutlinedIcon from "@material-ui/icons/ControlPointOutlined";
import { useHistory } from "react-router";
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
}));

function AssignmentSubmission() {
  const classes = useStyles();
  const history = useHistory();
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
          <ControlPointOutlinedIcon />
        </IconButton>
      </Box>
      <Box>
        {[1, 2, 3, 4].map((items, index) => (
          <List key={index} component="nav" className={classes.list} aria-label="contacts">
            <ListItem>
              <ListItemIcon>
                <Assignment />
              </ListItemIcon>
              <ListItemText primary="Assignment1.pdf" />
              <ListItemIcon>
                <IconButton>
                  <Delete />
                </IconButton>
              </ListItemIcon>
            </ListItem>
          </List>
        ))}
      </Box>
    </Container>
  );
}

export default AssignmentSubmission;
