import React from "react";

import { Box, makeStyles } from "@material-ui/core";
import ScoreBoard from "./ScoreBoard";
import AssignmentsSection from "./AssignmentsSection";

function SecondarySection() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <ScoreBoard />
      <AssignmentsSection />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    marginLeft: theme.spacing(5),
    marginBottom: theme.spacing(5),
    boxShadow: "0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08)",
  },
}));
export default SecondarySection;
