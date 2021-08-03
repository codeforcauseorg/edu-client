import { Container, makeStyles, Hidden } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import MainSection from "../../../components/DashboardComponents/MainSection";
import SecondarySection from "../../../components/DashboardComponents/SecondarySection";
import UserLogoutState from "../../../components/UserLogoutState";
// import useSWR from "swr";

function Dashboard() {
  const classes = useStyles();
  const user = useSelector((state) => state.account.user);
  // const { data: currentUserData } = useSWR("/user/get");
  // console.log(currentUserData);

  return (
    <Container className={classes.root}>
      {user ? (
        <Container className={classes.innerContainer} disableGutters>
          <MainSection />
          <Hidden lgDown>
            <SecondarySection />
          </Hidden>
        </Container>
      ) : (
        <UserLogoutState />
      )}
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  innerContainer: { display: "flex", maxWidth: "100%", marginTop: theme.spacing(5) },
  root: {
    maxWidth: "94%",
  },
  textBox: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
}));

export default Dashboard;
