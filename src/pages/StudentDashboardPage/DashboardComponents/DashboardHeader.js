import { Avatar, Box, IconButton, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CameraIcon from "@material-ui/icons/Camera";
const useStyles = makeStyles((theme) => ({
  wrapperContainer: {
    minHeight: 200,
    backgroundImage: `url("https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  },
  nameContainer: {
    position: "absolute",
    color: "white",
    display: "flex",
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    bottom: 0,
  },
  cameraIcon: {
    position: "absolute",
    color: "rgba(255, 255, 255, 0.5)",
    marginRight: 10,
    right: 0,
    bottom: 0,
  },
  avatar: {
    position: "absolute",
    bottom: "45%",
    left: "42%",
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  spantext: {
    fontWeight: 300,
    paddingRight: 8,
  },
  fadeBottom: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "linear-gradient(180deg, rgba(156, 153, 153, 0.09) 0%, #000000 100%)",
  },
}));
function DashboardHeader() {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.wrapperContainer}>
      <Box className={classes.fadeBottom} />
      <Avatar
        className={classes.avatar}
        src="data:image/png;base64,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"
      />
      <Box className={classes.nameContainer}>
        <Typography variant="h5">
          <Typography component="span" variant="h5" className={classes.spantext}>
            Hi
          </Typography>
          Code For Cause
        </Typography>
        <Typography variant="subtitle2">career@codeforcause.org</Typography>
      </Box>
      <IconButton className={classes.cameraIcon}>
        <CameraIcon />
      </IconButton>
    </Box>
  );
}

export default DashboardHeader;
