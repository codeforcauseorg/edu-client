import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CardContainer from "../../cardContainer/cardContainer";
import ChallengesCard from "../SubComponents/ChallengesCard";

function ChallengesSection() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Challenges
      </Typography>
      <CardContainer>
        {[1, 2, 3, 4, 5, 6].map((items, index) => (
          <ChallengesCard key={index} />
        ))}
      </CardContainer>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
  },
  title: {
    textTransform: "uppercase",
    marginBottom: theme.spacing(5),
  },
}));

export default ChallengesSection;
