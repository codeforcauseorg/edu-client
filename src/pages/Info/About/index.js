import React from "react";
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

const useStyles = makeStyles((theme) => ({
  img: {
    width: "100%",
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
    margin: "auto",
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  icon: {
    float: "right",
    color: "red",
  },
}));

function About() {
  const classes = useStyles();
  const history = useHistory();

  const Items = [
    {
      id: 1,
      src: "https://www.w3schools.com/w3images/team1.jpg",
      text: "Jane Doe",
      mailto: "lorem@ipsum.com",
    },
    {
      id: 2,
      src: "https://www.w3schools.com/w3images/team1.jpg",
      text: "Jane Doe",
      mailto: "lorem@ipsum.com",
    },
    {
      id: 3,
      src: "https://www.w3schools.com/w3images/team1.jpg",
      text: "Jane Doe",
      mailto: "lorem@ipsum.com",
    },
    {
      id: 4,
      src: "https://www.w3schools.com/w3images/team1.jpg",
      text: "Jane Doe",
      mailto: "lorem@ipsum.com",
    },
    {
      id: 5,
      src: "https://www.w3schools.com/w3images/team1.jpg",
      text: "Jane Doe",
      mailto: "lorem@ipsum.com",
    },
    {
      id: 6,
      src: "https://www.w3schools.com/w3images/team1.jpg",
      text: "Jane Doe",
      mailto: "lorem@ipsum.com",
    },
  ];

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.backButton}
            color="inherit"
            onClick={() => history.goBack()}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
            About Us
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit">
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container>
        <ScrollToTop />
        <div>
          <Box>
            <Typography variant="h4" style={{ textAlign: "center", padding: "5%" }}>
              Code for Cause
            </Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Typography variant="inherit">
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                maximus est, id dignissim quam.
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img className={classes.img} src="/assets/img/team.jpg" />
            </Grid>
          </Grid>
        </div>
        <div>
          <Box>
            <Typography
              variant="h4"
              style={{ textAlign: "center", padding: "5%", marginTop: "2%" }}
            >
              Our Vision
            </Typography>
            <Grid container spacing={3} style={{ textAlign: "center" }}>
              <Grid item xs={12}>
                <Typography variant="inherit">Grow Up Your Workflow Speed.</Typography>
                <br />
                <Typography variant="inherit">
                  Join our team and become a part of that believe in open education for all.
                </Typography>
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
            <Typography variant="h4" style={{ textAlign: "center", padding: "5%" }}>
              Our Team
            </Typography>
          </Box>
          <br />
          <div>
            <Grid container spacing={3}>
              {Items.map((items) => (
                <Grid item xs={4} key={items.id}>
                  <Avatar alt={items.text} src={items.src} className={classes.large} />
                  <br />
                  <Typography variant="body2" component="p" style={{ float: "left" }}>
                    {items.text}
                  </Typography>
                  <Link
                    href={"mailto:" + items.mailto + "?body=Hello Friends"}
                    className={classes.icon}
                  >
                    <EmailOutlinedIcon />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </Container>
    </>
  );
}

export default About;
