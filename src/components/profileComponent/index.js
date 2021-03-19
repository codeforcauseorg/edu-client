import React, { Fragment } from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import CoreCard from "./recentlyviewed/index";
import { Box, Button, Grid } from "@material-ui/core";
import { logout } from "./../.././actions/accountActions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  avatar: {
    width: "7.5rem",
    height: "7.5rem",
    padding: 0,
    margin: 0,
  },
  profileContainer: {
    marginBottom: "1.5rem",
    backgroundColor: "#8EC5FC",
    backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
    flexGrow: 1,
    maxHeight: "100%",
    minWidth: "100%",
    borderRadius: "20px",
  },
  titleContainer: {
    backgroundColor: "#8BC6EC",
    backgroundImage: "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
    padding: "1rem",
    paddingLeft: "1.5rem",
    width: "100%",
  },
  bigTitle: {
    fontSize: "1.5rem",
    fontWeight: 700,
    display: "flex",
    justifyContent: "center",
  },
  smallTitle: {
    fontSize: "1.25rem",
    fontWeight: 700,
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1rem",
    fontWeight: 400,
    marginBottom: "1rem",
    minWidth: "100%",
  },
  block: {
    padding: "2rem",
    paddingLeft: "1.5rem",
    maxHeight: "100%",
    minWidth: "100%",
  },
  center: {
    backgroundColor: "rebeccapurple",
    color: "white",
  },
  logout: {
    "@media(max-width: 508px)": {
      marginBottom: "8px",
    },
  },
  centersmall: {
    "@media(max-width: 508px)": {
      display: "flex",
      justifyContent: "center",
      marginBottom: "8px",
    },
  },
  emphasis: {
    display: "flex",
    justifyContent: "space-between",
    "@media(max-width: 508px)": {
      display: "flex",
      justifyContent: "center",
      padding: "10px",
      width: "100%",
      textAlign: "center",
      flexDirection: "column-reverse",
    },
  },
});

const ProfileComponent = ({ recent }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Fragment>
      <div>
        <Box className={classes.profileContainer}>
          <div className={classes.titleContainer}>
            <div className={classes.bigTitle}>
              <h2>Welcome, User!</h2>
            </div>
          </div>

          <div className={classes.block}>
            <div style={{ paddingBottom: "1rem" }}>
              <center>
                <Avatar
                  alt="profile img"
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                  className={classes.avatar}
                />
              </center>
            </div>

            <div>
              <center className={classes.smallTitle}>Name Here</center>
            </div>
            <div className={classes.emphasis}>
              <div className={classes.centersmall}>
                <Button className={classes.center}>
                  <b>Recently Played</b>
                </Button>
              </div>
              <div className={classes.logout} style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  style={{ backgroundColor: "#8B0000", display: "flex", justifyContent: "center" }}
                  onClick={() => dispatch(logout)}
                >
                  <b style={{ color: "white" }}>Logout</b>
                </Button>
              </div>
            </div>
            <Grid container spacing={3} style={{ paddingBottom: "2rem" }}>
              {recent.slice(0, 5).map((courseinfo, index) => (
                <CoreCard courseinfo={courseinfo} index={index} key={index} />
              ))}
            </Grid>
          </div>
        </Box>
      </div>
    </Fragment>
  );
};

export default ProfileComponent;
