import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Login from "../../components/auth/Login";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "rgba(227, 236, 246,1)",
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    alignItems: "center",
  },
  topWave: {
    position: "absolute",
    top: "0",
  },
  graphics: {
    position: "absolute",
    top: "auto",
    bottom: 0,
    width: "100%",
  },
  card: {
    backgroundColor: "rgba(227, 236, 246,1)",
    position: "relative",
    overflow: "visible",
    top: "30%",
    width: "80%",
    height: "35%",
    display: "flex",
    borderRadius: "15px",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "-5px -5px 10px rgba(255,255,255,1),5px 5px 10px rgba(0,0,0,0.2)",
  },
  logoDiv: {
    position: "absolute",
    overflow: "visible",
    top: "-50%",
    transform: "translate(0%,40%)",
    width: "10rem",
    height: "10rem",
    borderRadius: "50%",
    boxShadow: "-5px -5px 10px rgba(255,255,255,1),5px 5px 10px rgba(0,0,0,0.2)",
  },
  logo: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  },
  subtitle: {
    position: "relative",
    top: "50%",
    fontSize: "1rem",
    color: theme.palette.primary.main,
  },
  loginButton: {
    position: "absolute",
    top: "auto",
    bottom: 20,
    width: "50%",
  },
}));

const LandingPage = (props) => {
  const classes = useStyles(props);

  return (
    <Container className={classes.container} component="main" maxWidth="xs">
      <CssBaseline />
      <img className={classes.topWave} src="/assets/img/LandingPageWave.svg" alt="top-wave" />
      <Card className={classes.card}>
        <Card className={classes.logoDiv}>
          <img className={classes.logo} src="/assets/img/codeForCause.jpg" alt="logo" />
        </Card>
        <Typography variant="h3" className={classes.subtitle}>
          LOGIN WITH
        </Typography>
        <div className={classes.loginButton}>
          <Login />
        </div>
      </Card>
      <img className={classes.graphics} src="/assets/img/LandingPageGraphics.svg" alt="graphics" />
    </Container>
  );
};

export default LandingPage;
