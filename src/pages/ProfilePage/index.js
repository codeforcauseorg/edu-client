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
    overflow: "hidden",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  buttonwrapper: {
    display: "flex",
    flexDirection: "column",
    margin: "10px 30px 0px 30px",
    padding: "8px",
  },
  button: {
    color: "#9B0000",
    fontWeight: 600,
    textTransform: "none",
    border: "2px solid rgb(155,0,0,0.7)",
    borderRadius: "10px",
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
      <Box className={classes.buttonwrapper}>
        <Button className={classes.button} variant="outlined" onClick={() => dispatch(logout)}>
          Log out
        </Button>
      </Box>
      <FooterComponent />
    </Container>
  );
}

export default ProfilePage;
