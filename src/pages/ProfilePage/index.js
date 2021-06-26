import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ProfileHero from "../../components/ProfileComponents/ProfileHero";
import ProfileTabComponent from "../../components/ProfileComponents/ProfileTabComponent";

function ProfilePage() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <ProfileHero />
      <Typography className={classes.title} variant="h2" color="textPrimary">
        Profile & settings
      </Typography>
      <ProfileTabComponent />
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "90%",
  },
  title: {
    marginTop: theme.spacing(8),
  },
}));

export default ProfilePage;
