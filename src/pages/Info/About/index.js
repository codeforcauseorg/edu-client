import React from "react";
// import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Typography, Container, Box } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useHistory } from "react-router-dom";
import ScrollToTop from "../../././../utils/ScrollToTop";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import Link from "@material-ui/core/Link";

// const Content = lazy(() => import("!babel-loader!mdx-loader!./About.mdx"));

const useStyles = makeStyles((theme) => ({
  img: {
    width: "130%",
    background: "#ddd",
  },
  btn: {
    margin: "0 auto",
    width: "7rem",
    fontSize: ".9rem",
    textTransform: "none",
    backgroundColor: "#ba000d",
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    background: "#160050",
  },
  root: {
    flexGrow: 1,
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  card: {
    padding: "5%",
  },
  icon: {
    float: "right",
    color: "red",
  },
}));

function About() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.backButton} color="inherit" aria-label="menu">
            <ArrowBackIcon onClick={() => history.goBack()} />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
            About Us
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* <Suspense fallback={null}>
        <Content />
        <img
          className={classes.img}
          src="https://automattic.files.wordpress.com/2018/02/a8c_2017gm.jpg"
        />
        <Button variant="contained" color="secondary">
          Say Hello!
        </Button>
      </Suspense> */}
      <Container>
        <ScrollToTop />
        <div style={{ padding: "5%" }}>
          <Box>
            <Typography variant="h4" style={{ textAlign: "center", padding: "2%" }}>
              Code for Cause
            </Typography>
          </Box>
          <br />
          <Grid container spacing={3}>
            <Grid item xs={8}>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
              maximus est, id dignissim quam.
            </Grid>
            <Grid item xs={4}>
              <img className={classes.img} src="/assets/img/team.jpg" />
            </Grid>
          </Grid>
        </div>
        <div style={{ padding: "5%" }}>
          <Box>
            <Typography variant="h4" style={{ textAlign: "center", padding: "2%" }}>
              Our Vision
            </Typography>
            <br />
            <Grid container spacing={3} style={{ textAlign: "center" }}>
              <Grid item xs={12}>
                Grow Up Your Workflow Speed.
                <br />
                Join our team and become a part of that believe in open education for all.
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={3} style={{ textAlign: "center", color: "blue" }}>
              <Grid item xs={4}>
                <Typography variant="h4" style={{ textAlign: "center" }}>
                  27,889
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h4" style={{ textAlign: "center" }}>
                  90%
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h4" style={{ textAlign: "center" }}>
                  70,592
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </div>
        <br />
        <div>
          <Box>
            <Typography variant="h4" style={{ textAlign: "center", padding: "2%" }}>
              Our Team
            </Typography>
          </Box>
          <br />
          <Grid container spacing={3}>
            <Grid item xs={4} className={classes.card}>
              <Avatar
                alt="Remy Sharp"
                src="https://www.w3schools.com/w3images/team1.jpg"
                className={classes.large}
              />
              <br />
              <Typography variant="body2" component="p" style={{ float: "left" }}>
                Jane Doe
              </Typography>
              <Typography variant="body2" component="p">
                <Link href="mailto:lorem@ipsum.com?body=Hello Friends" className={classes.icon}>
                  <EmailOutlinedIcon />
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={4} className={classes.card}>
              <Avatar
                alt="Remy Sharp"
                src="https://www.w3schools.com/w3images/team1.jpg"
                className={classes.large}
              />
              <br />
              <Typography variant="body2" component="p" style={{ float: "left" }}>
                Jane Doe
              </Typography>
              <Typography variant="body2" component="p">
                <Link href="mailto:lorem@ipsum.com?body=Hello Friends" className={classes.icon}>
                  <EmailOutlinedIcon />
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={4} className={classes.card}>
              <Avatar
                alt="Remy Sharp"
                src="https://www.w3schools.com/w3images/team1.jpg"
                className={classes.large}
              />
              <br />
              <Typography variant="body2" component="p" style={{ float: "left" }}>
                Jane Doe
              </Typography>
              <Typography variant="body2" component="p">
                <Link href="mailto:lorem@ipsum.com?body=Hello Friends" className={classes.icon}>
                  <EmailOutlinedIcon />
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}

export default About;
