import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Container,
  Divider,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import HeaderComponent from "./ContestComponents/HeaderComponent";
import TitleComponent from "./ContestComponents/TitleComponent";
import LeaderboardComponent from "./ContestComponents/LeaderboardComponent";
import StatsComponent from "./ContestComponents/StatsComponent";
const useStyle = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  appBar: {
    background: "#160050",
  },
  divider: {
    margin: theme.spacing(3),
  },
}));
function Contests() {
  const classes = useStyle();
  const history = useHistory();
  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.backButton}
            color="inherit"
            onClick={() => history.goBack()}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Contests
          </Typography>{" "}
        </Toolbar>
      </AppBar>
      <HeaderComponent />
      <TitleComponent
        title="Leaderboard"
        subTitle="Last contest’s winner"
        onClick={() => console.log("View Laderboard")}
        textButton={true}
      />
      <LeaderboardComponent
        winnerProfileAvatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        winnerName="Abhishek Kumar"
        winnerScore="800"
        winnerPosition="1st"
        currentUserScore="50"
        currentUserPosition="128st"
      />
      <Divider className={classes.divider} />
      <TitleComponent
        title="Your stats"
        subTitle="Personal Overall statistics"
        textButton={false}
      />
      <StatsComponent total="10" won="2" bestPosition="1st" />
    </Container>
  );
}

export default Contests;
