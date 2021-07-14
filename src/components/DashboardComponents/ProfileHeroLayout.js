import React from "react";
import { makeStyles, CardMedia } from "@material-ui/core";

function ProfileHeroLayout({ children }) {
  const classes = useStyles();
  return (
    <CardMedia image="assets/img/profileBanner.svg" className={classes.heroSection}>
      {children}
    </CardMedia>
  );
}

const useStyles = makeStyles((theme) => ({
  heroSection: {
    minHeight: 200,
    borderRadius: "5px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 35,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

export default ProfileHeroLayout;
