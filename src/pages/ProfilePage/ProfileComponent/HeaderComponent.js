import { Avatar, Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  profiletitle: {
    padding: theme.spacing(2),
    "& .MuiTypography-root": {
      fontSize: "1.3rem",
      fontWeight: 400,
    },
  },
  avatar: {
    width: "70px",
    height: "70px",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: theme.spacing(4),
    color: "#000",
  },
  studentdetails: {
    marginLeft: "10px",
    padding: theme.spacing(1),
    "& .MuiTypography-h2": {
      fontSize: "15px",
      fontWeight: 400,
      marginBottom: theme.spacing(0.5),
    },
    "& .MuiTypography-h3": {
      fontSize: "12px",
      fontWeight: 400,
      marginBottom: theme.spacing(0.5),
    },
  },
  editbutton: {
    marginTop: "10px",
    background: "#fff",
    textTransform: "none",
    borderRadius: "30px",
    border: "2px solid black",
    padding: "0 16px 0 16px",
    fontSize: "0.8rem",
  },
}));
function HeaderComponent() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.profiletitle}>
        <Typography variant="h2">Profile</Typography>
      </Box>
      <Box className={classes.headerContainer}>
        <Avatar
          src="https://yt3.ggpht.com/ytc/AAUvwnhpLAOxx0GesrqkAMyNs3Fd3ZULf8yfNc8nTmMp=s900-c-k-c0x00ffffff-no-rj"
          className={classes.avatar}
        />
        <Box className={classes.studentdetails}>
          <Typography variant="h2">Code for Cause</Typography>
          <Typography variant="h3">team@codeforcause.org</Typography>
          <Button variant="outlined" className={classes.editbutton}>
            Edit Profile
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default HeaderComponent;
