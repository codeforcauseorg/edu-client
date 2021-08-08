import { AppBar, Box, Button, Hidden, Toolbar, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";
import OnboardingSection from "../../components/AuthComponent/OnboardingSection";
import SignupSection from "../../components/AuthComponent/SignupSection";

const LandingPage = (props) => {
  const classes = useStyles(props);

  const history = useHistory();

  return (
    <>
      <Container className={classes.container} disableGutters>
        <Box className={classes.boxContainer}>
          <AppBar className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
              <Container className={classes.wrapper} disableGutters>
                <Typography variant="h3" color="textPrimary">
                  Logo
                </Typography>
                <Box flexGrow={1} />
                <Button outline className={classes.authbutton}>
                  Sign In
                </Button>
                <Button className={classes.explorebutton} onClick={() => history.push("/home")}>
                  Explore
                </Button>
              </Container>
            </Toolbar>
          </AppBar>
          <Box className={classes.loginContainer}>
            <Container maxWidth="xs">
              <SignupSection />
            </Container>
          </Box>
          <Hidden mdDown>
            <Box className={classes.onboarding}>
              <OnboardingSection />
            </Box>
          </Hidden>
        </Box>
      </Container>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "100%",
    backgroundColor: "#fff",
    width: "100vw",
    height: "100vh",
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    maxWidth: "80%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
  appBar: {
    backgroundColor: "rgba(255,255,255,0)",
  },

  boxContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    content: "center",
    height: "100%",
    width: "auto",
  },
  loginContainer: {
    flex: 5,
    backgroundColor: "#fff",
    height: "100%",
    [theme.breakpoints.down("lg")]: {
      flex: 7,
    },
  },
  onboarding: {
    flex: 8,
    clipPath: "polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)",
    backgroundColor: "#F2F7FA",
    height: "100%",
    [theme.breakpoints.down("lg")]: {
      clipPath: "none",
    },
  },
  explorebutton: {
    color: "#fff",
    textTransform: "none",
    margin: theme.spacing(0, 1),
    padding: theme.spacing(1, 3),
    background: theme.palette.primary.main,
    "&:hover": {
      background: theme.palette.primary.main,
    },
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(0, 1),
      padding: theme.spacing(0.6, 1),
    },
  },
  authbutton: {
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    textTransform: "none",
    margin: theme.spacing(0, 1),
    padding: theme.spacing(1, 3),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(0, 1),
      padding: theme.spacing(0.5, 1),
    },
  },
}));

export default LandingPage;
