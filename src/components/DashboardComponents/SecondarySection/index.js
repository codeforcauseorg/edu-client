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
      <ScoreBoard />
      <AssignmentsSection />
      <PopularTopics />
      <FactsSection />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1.5,
    height: "100%",
    marginLeft: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
}));
export default SecondarySection;
