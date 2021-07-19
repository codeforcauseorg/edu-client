import React from "react";
import { makeStyles, Box } from "@material-ui/core";

function ProfileHeroLayout({ children }) {
  const classes = useStyles();
  return <Box className={classes.heroSection}>{children}</Box>;
}

const useStyles = makeStyles((theme) => ({
  heroSection: {
    minHeight: 200,
    background: "linear-gradient(269.98deg, #3740A1 -4.96%, #2ECDFF 203.33%)",
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
