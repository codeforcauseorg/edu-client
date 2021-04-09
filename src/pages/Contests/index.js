import {
  AppBar,
  IconButton,
  Toolbar,
  Box,
  Button,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ContestsList from "./ContestsList";
import contests from "../../data/contestsDetails.json";
import { useHistory } from "react-router-dom";
const useStyle = makeStyles((theme) => ({
  root: {
    margin: "5px",
  },
  buttoncontainer: {
    marginTop: theme.spacing(1),
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    background: "#160050",
  },
  trophyIcon: {
    height: 30,
    width: 30,
  },
  titlecontainer: {
    textAlign: "center",
    marginTop: "5px",
  },
  button: {
    textTransform: "none",
    borderRadius: 5,
    color: "#fff",
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(3),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  contestContainer: {
    marginTop: theme.spacing(3),
  },
}));
const ongoing = contests[0].ongoing;
const upcoming = contests[0].upcoming;
const completed = contests[0].completed;

function Contests() {
  const classes = useStyle();
  const buttonItems = [
    {
      status: "Ongoing",
    },
    {
      status: "Upcoming",
    },
    {
      status: "Completed",
    },
  ];
  const [status, setStatus] = useState("Active");
  const setStatusFilter = (status) => {
    setStatus(status);
  };
  const history = useHistory();
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
          <Typography variant="h6" color="inherit" className={classes.title}>
            Contests & Statistics
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit">
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="xs" className={classes.root}>
        <Box className={classes.titlecontainer}>
          <Typography variant="h1">
            Contests
            <span>
              <img src="assets/icon/trophy.png" className={classes.trophyIcon} />
            </span>
          </Typography>
        </Box>
        <Box className={classes.buttoncontainer}>
          <div>
            <Button className={classes.button} variant="outlined" style={{ color: "#160050" }}>
              My Past Perfomance Statistics
            </Button>
          </div>
          {buttonItems.map((items, index) => (
            <Button
              key={index}
              className={classes.button}
              variant="contained"
              style={{ background: status === items.status ? "#a70202" : "#160050" }}
              onClick={() => setStatusFilter(items.status)}
            >
              <Typography variant="caption">{items.status}</Typography>
            </Button>
          ))}
        </Box>
        <Box className={classes.assignmentContainer}>
          {(() => {
            switch (status) {
              case "Ongoing":
                return ongoing.map((items, index) => (
                  <ContestsList
                    key={index}
                    contestTitle={items.contestTitle}
                    date={items.date}
                    ListTileColor="#EEF7FB"
                    tasktilecolor="#DAE9F0"
                  />
                ));
              case "Upcoming":
                return upcoming.map((items, index) => (
                  <ContestsList
                    key={index}
                    contestTitle={items.contestTitle}
                    date={items.date}
                    ListTileColor="#FEF7EF"
                    tasktilecolor="#F7E6D3"
                  />
                ));
              default:
                return completed.map((items, index) => (
                  <ContestsList
                    key={index}
                    contestTitle={items.contestTitle}
                    date={items.date}
                    ListTileColor="#EBFDF5"
                    tasktilecolor="#C8EEDD"
                  />
                ));
            }
          })()}
        </Box>
      </Container>
    </>
  );
}

export default Contests;
