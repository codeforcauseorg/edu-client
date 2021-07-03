import React from "react";

import { Box, makeStyles } from "@material-ui/core";
import ScoreBoard from "./ScoreBoard";
import AssignmentsSection from "./AssignmentsSection";
import PopularTopics from "./PopularTopics";
import FactsSection from "./FactsSection";

function SecondarySection() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <ScoreBoard />
        <AssignmentsSection />
        <PopularTopics />
        <FactsSection />
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    background: "#000",
    flex: 2,
  },
  container: {
    margin: theme.spacing(5),
    flex: 2,
    background: "#F8F9FD",
    borderRadius: "5px",
  },
}));
export default SecondarySection;
