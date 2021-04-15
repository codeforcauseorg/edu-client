import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";
import { AppBar, Container, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import HeaderComponent from "./ContestComponents/HeaderComponent";
import TitleComponent from "./ContestComponents/TitleComponent";
const useStyle = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  appBar: {
    background: "#160050",
  },
}));
function Contests() {
  const classes = useStyle();
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
      <TitleComponent
        title="Your stats"
        subTitle="Personal Overall statistics"
        textButton={false}
      />
    </Container>
  );
}

export default Contests;
