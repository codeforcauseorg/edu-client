import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Typography, Button, CircularProgress, makeStyles } from "@material-ui/core";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { login } from "../../actions/accountActions";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(3, 0, 2),
    border: "4px solid white",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    backgroundColor: theme.palette.secondary.main,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
}));

function Login() {
  const user = useSelector((state) => state.account.user);
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleLoginOpen = () => {
    try {
      dispatch(login());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.container}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={handleLoginOpen}
          style={{
            textTransform: "capitalize",
          }}
        >
          {user === undefined ? (
            <CircularProgress size="24px" color="inherit" />
          ) : (
            <Typography component="h1" variant="subtitle1">
              Login With Google
            </Typography>
          )}
        </Button>
      </Container>
    </div>
  );
}

export default Login;
