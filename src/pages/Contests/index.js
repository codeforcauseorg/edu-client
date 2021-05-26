import { useState } from "react";
import { Link } from "react-router-dom";
import ContestsList from "./ContestsList";
import TopBar from "../../components/TopBar/TopBar";
import contests from "../../data/contestsDetails.json";
import { Box, Button, Container, makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  buttoncontainer: {
    marginTop: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  Icon: {
    height: 25,
    width: 25,
  },
  trophyIcon: {
    height: 30,
    width: 30,
  },
  titlecontainer: {
    textAlign: "center",
    marginTop: theme.spacing(2),
  },
  btn: {
    width: "100%",
    textTransform: "none",
    borderRadius: 5,
    color: "#fff",
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(3),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
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
  assignmentContainer: {
    margin: "1rem 0",
    width: "100%",
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
  const [status, setStatus] = useState("Ongoing");
  const setStatusFilter = (status) => {
    setStatus(status);
  };
  return (
    <>
      <TopBar title="Discussion Forum" share={false} more={false} />
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
            <Link to="/statistics" style={{ textDecoration: "none" }}>
              <Button className={classes.btn} variant="outlined" style={{ color: "#160050" }}>
                My Past Performance Statistics &nbsp;{" "}
                <span>
                  <img src="assets/icon/stats.png" className={classes.Icon} />
                </span>
              </Button>
            </Link>
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
                    ListTileColor="#4791db22"
                    tasktilecolor="#DAE9F0"
                  />
                ));
              case "Upcoming":
                return upcoming.map((items, index) => (
                  <ContestsList
                    key={index}
                    contestTitle={items.contestTitle}
                    date={items.date}
                    ListTileColor="#e3337122"
                    tasktilecolor="#F7E6D3"
                  />
                ));
              default:
                return completed.map((items, index) => (
                  <ContestsList
                    key={index}
                    contestTitle={items.contestTitle}
                    date={items.date}
                    ListTileColor="#81c78433"
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
