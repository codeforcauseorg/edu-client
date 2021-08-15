import { Container, makeStyles, Hidden, CircularProgress, Box } from "@material-ui/core";
import React from "react";
import useSWR from "swr";
import MainSection from "../../../components/DashboardComponents/MainSection";
import SecondarySection from "../../../components/DashboardComponents/SecondarySection";
import { GET_USER_ENDPOINT } from "../../../constants/apiEndpoints";
import { loadData } from "../../../services/apiService";

function Dashboard() {
  const classes = useStyles();

  const { data: currentUserData } = useSWR(GET_USER_ENDPOINT, loadData, {
    revalidateOnFocus: false,
    dedupingInterval: 10000,
  });

  return (
    <Container className={classes.root}>
      {currentUserData === undefined ? (
        <Box className={classes.loadingContainer}>
          <CircularProgress size={50} />
        </Box>
      ) : (
        <Container className={classes.innerContainer} disableGutters>
          <MainSection userInfo={currentUserData} />
          <Hidden lgDown>
            <SecondarySection userInfo={currentUserData} />
          </Hidden>
        </Container>
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
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(20),
  },
}));

export default Dashboard;
