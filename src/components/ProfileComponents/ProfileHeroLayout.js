import React from "react";
import { makeStyles, Box } from "@material-ui/core";

function ProfileHeroLayout({ children }) {
  const classes = useStyles();
  return <Box className={classes.heroSection}>{children}</Box>;
}

const useStyles = makeStyles((theme) => ({
  heroSection: {
    minHeight: 200,
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing(10),
    borderRadius: "5px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 35,
    borderTop: `4px solid #333`,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

export default ProfileHeroLayout;
