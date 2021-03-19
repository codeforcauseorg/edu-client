import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Typography, Button, CircularProgress, makeStyles } from "@material-ui/core";

import { login } from "../../actions/accountActions";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(3, 0, 2),
    border: "4px solid white",
    borderRadius: "10px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
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
      {user ? (
        <CircularProgress size="24px" color="inherit" />
      ) : (
        <Typography component="h1" variant="subtitle1">
          Google
        </Typography>
      )}
    </Button>
  );
}

export default Login;
