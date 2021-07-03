import React from "react";
import { Avatar, Box, makeStyles, Typography, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import ProfileHeroLayout from "../ProfileHeroLayout";
import ProfileSkeleton from "../../skeleton/ProfileSkeleton";

function DashboardHero() {
  const classes = useStyles();
  const user = useSelector((state) => state.account.user);

  return (
    <>
      {user ? (
        <ProfileHeroLayout>
          <Avatar className={classes.avatar} src={user.photoURL} />
          <Box className={classes.infoContainer}>
            <Typography variant="h2" component="span" className={classes.span1}>
              Hello
            </Typography>
            <Typography variant="h2" component="span">
              {user.displayName}
            </Typography>
            <Box mt={2}>
              <Typography variant="body1">{user.email}</Typography>
            </Box>
            <Box mt={5}>
              <Button className={classes.editButton}>Edit profile</Button>
            </Box>
          </Box>
        </ProfileHeroLayout>
      ) : (
        <ProfileSkeleton />
      )}
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: 120,
    width: 120,
  },
  infoContainer: {
    color: "#fff",
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      marginLeft: theme.spacing(0),
      marginTop: theme.spacing(3),
    },
  },
  editButton: {
    color: "#fff",
    border: "1px solid #fff",
    textTransform: "none",
  },
  span1: {
    marginRight: theme.spacing(1),
    fontWeight: 200,
  },
  vec1: {
    position: "absolute",
  },
}));

export default DashboardHero;
