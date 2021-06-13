import React from "react";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function LoginSection() {
  const classes = useStyles();

  return (
    <>
      <Box my={18}>
        <Typography variant="subtitle2" color="textPrimary" className={classes.subtitle}>
          Start Learning
        </Typography>
        <Typography color="textPrimary" className={classes.title}>
          Login
        </Typography>
        <TextField fullWidth margin="normal" label="Email" variant="outlined" />
        <TextField fullWidth margin="normal" label="Password" variant="outlined" />
        <Button fullWidth className={classes.loginButton}>
          <Typography variant="body2">Log in</Typography>
        </Button>
      </Box>{" "}
      <Box my={18}></Box>
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
  loginButton: {
    background: theme.palette.primary.main,
    color: "#fff",
    textTransform: "none",
    "&:hover": {
      background: theme.palette.primary.main,
    },
    padding: theme.spacing(2, 0),
    marginTop: theme.spacing(3),
  },
}));

export default LoginSection;
