import React from "react";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { AppBar, IconButton, Toolbar, makeStyles, Box, Typography } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PostCard from "./PostCard";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "rgb(21, 0, 81)",
    fontSize: "0.85rem",
    transition: "0.3s",
    marginTop: "15px",
    marginBottom: "10px",
    "&:hover": {
      backgroundColor: "rgb(138, 128, 168)",
    },
  },
  head: {
    flexGrow: 1,
  },
  appBar: {
    background: "#160050",
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
  aboutText: {
    color: "#555",
  },
  socialWrapper: {
    paddingBottom: "10px",
    paddingLeft: "10px",
  },
  socialIcons: {
    color: "#0D0F44",
    fontSize: "35px",
    paddingBottom: "10px",
    cursor: "pointer",
    "&:hover": {
      color: "#e59819",
    },
  },
  body: {
    margin: "20px",
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  profiletitle: {
    padding: theme.spacing(2),
    fontSize: "20px",
    fontWeight: 400,
    color: "#0D0F44",
  },
  margin: {
    margin: theme.spacing(2),
  },
  BoxSpaces: {
    padding: "15px",
  },
}));

function CourseAnnouncement() {
  const classes = useStyles();
  const history = useHistory();
  const Announcement = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consecteturunt ut labore et dolore magna aliqua.",
      date: "5 May",
      material: "LinkedList.pdf",
    },
    {
      id: 2,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "14 Apr",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur et dolore magna aliqua.",
      date: "3 Jan",
      material: "Graphs.doc",
    },
  ];
  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.backButton}
            color="inherit"
            onClick={() => history.goBack()}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.head}>
            Course Announcement
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit">
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div>
        <Box className={classes.BoxSpaces}>
          {Announcement.map((data, index) => {
            return <PostCard data={data} key={index} />;
          })}
        </Box>
      </div>
    </>
  );
}

export default CourseAnnouncement;
