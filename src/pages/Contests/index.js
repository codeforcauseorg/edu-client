import { Box, Button, Container, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import ContestsList from "./ContestsList";
import contests from "../../data/contestsDetails.json";
const useStyle = makeStyles((theme) => ({
  root: {
    margin: "5px",
  },
  buttoncontainer: {
    marginTop: theme.spacing(1),
  },
  trophyIcon: {
    height: 30,
    width: 30,
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
      status: "ongoing",
    },
    {
      status: "upcoming",
    },
    {
      status: "completed",
    },
  ];
  const [status, setStatus] = useState("Active");
  const setStatusFilter = (status) => {
    setStatus(status);
  };
  return (
    <Container className={classes.root}>
      <Box className={classes.titlecontainer}>
        <Typography variant="h1">
          Contests
          <span>
            {" "}
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
            case "ongoing":
              return ongoing.map((items, index) => (
                <ContestsList
                  key={index}
                  ContestTitle={items.ContestTitle}
                  date={items.Date}
                  ListTileColor="#EEF7FB"
                  tasktilecolor="#DAE9F0"
                />
              ));
            case "upcoming":
              return upcoming.map((items, index) => (
                <ContestsList
                  key={index}
                  ContestTitle={items.ContestTitle}
                  date={items.Date}
                  ListTileColor="#FEF7EF"
                  tasktilecolor="#F7E6D3"
                />
              ));
            default:
              return completed.map((items, index) => (
                <ContestsList
                  key={index}
                  ContestTitle={items.ContestTitle}
                  date={items.Date}
                  ListTileColor="#EBFDF5"
                  tasktilecolor="#C8EEDD"
                />
              ));
          }
        })()}
      </Box>
    </Container>
  );
}

export default Contests;
