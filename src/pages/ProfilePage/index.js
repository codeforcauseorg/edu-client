import { Box, Button, Container, makeStyles } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/accountActions";
import FooterComponent from "./ProfileComponent/FooterComponent";
import ScoreBoardComponent from "./ProfileComponent/ScoreBoardComponent";
import ListComponent from "./ProfileComponent/ListComponent";
import HeaderComponent from "./ProfileComponent/HeaderComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  logoutButton: {
    display: "flex",
    flexDirection: "column",
    border: "2px solid #9B0000",
    margin: "10px 30px 0px 30px",
    padding: "3px",
    borderRadius: "10px",
    "& .MuiButton-label": {
      color: "#9B0000",
      fontWeight: 600,
    },
  },
}));
function ProfilePage() {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <HeaderComponent />
      <ScoreBoardComponent />
      <ListComponent />
      <Box className={classes.logoutButton}>
        <Button onClick={() => dispatch(logout)}>Logout</Button>
      </Box>
      <FooterComponent />
    </Container>
  );
}

export default ProfilePage;
