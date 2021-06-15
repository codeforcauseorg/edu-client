import { Box, Button, makeStyles, Container } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/accountActions";
import ListComponent from "../../components/ProfilePageComponents/ListComponent";
import HeaderComponent from "../../components/ProfilePageComponents/HeaderComponent";

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
  wrapperContainer: {
    minWidth: "95%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
}));
function ProfilePage() {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <>
      <Container className={classes.wrapperContainer}>
        <HeaderComponent />
        <ListComponent />
        <Box className={classes.buttonwrapper}>
          <Button className={classes.button} variant="outlined" onClick={() => dispatch(logout)}>
            Log out
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default ProfilePage;
