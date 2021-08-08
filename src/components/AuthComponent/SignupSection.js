import React from "react";
import { Box, Button, Grid, TextField, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import authService from "../../services/authService";

function SignupSection() {
  const dispatch = useDispatch();

  const handleLoginAction = () => {
    try {
      dispatch(authService.login());
    } catch (err) {
      console.log(err);
    }
  };

  const classes = useStyles();

  return (
    <>
      <Box my={18}>
        <Typography variant="subtitle2" color="textPrimary" className={classes.subtitle}>
          Start Learning
        </Typography>
        <Typography color="textPrimary" className={classes.title}>
          Create an account
        </Typography>
        <TextField fullWidth margin="normal" label="First & Last name" variant="outlined" />
        <TextField fullWidth margin="normal" label="Email" variant="outlined" />
        <TextField fullWidth margin="normal" label="Password" variant="outlined" />
        <Button fullWidth className={classes.signupButton}>
          <Typography variant="body2">Sign up</Typography>
        </Button>
        <Button fullWidth className={classes.googleSignup} onClick={() => handleLoginAction()}>
          <img className={classes.googleIcon} src="assets/icon/social icons/google_icon.svg" />
          <Typography variant="body2"> Sign up with google</Typography>
        </Button>
        <Box my={6}>
          <Grid container justify="center">
            <Grid item>
              <Link href="#" variant="body2">
                {"Already have an account? Log In"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "1.8rem",
    fontWeight: 800,
    cursor: "pointer",
  },
  subtitle: {
    textTransform: "uppercase",
  },
  signupButton: {
    background: theme.palette.primary.main,
    color: "#fff",
    textTransform: "none",
    "&:hover": {
      background: theme.palette.primary.main,
    },
    padding: theme.spacing(2, 0),
    marginTop: theme.spacing(3),
  },
  googleSignup: {
    color: theme.palette.primary.main,
    textTransform: "none",
    padding: theme.spacing(1.5, 0),
    marginTop: theme.spacing(2),
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
  },
  googleIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default SignupSection;
