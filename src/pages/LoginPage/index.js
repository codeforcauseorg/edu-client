import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import FooterSection from "../../components/HomeViewComponents/FooterSection";
import Login from "../../components/auth/Login";
const LandingPage = (props) => {
  const classes = useStyles(props);

  return (
    <>
      <Container className={classes.container}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h3" color="textPrimary" className={classes.title}>
              Code for Cause
            </Typography>
            <Box flexGrow={1} />
            <Login />
          </Toolbar>
        </AppBar>
        <Box my={10} className={classes.boxContainer}></Box>
      </Container>
      <FooterSection />
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "100%",
    backgroundColor: "#F0F8FF",
    width: "100vw",
    height: "100vh",
  },
  toolbar: {
    margin: theme.spacing(0, 25),
  },
  appBar: {
    backgroundColor: "#F0F8FF",
    // boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: 800,
    cursor: "pointer",
  },
  boxContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
}));

export default LandingPage;
