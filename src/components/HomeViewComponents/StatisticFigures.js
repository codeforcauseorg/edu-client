import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import FadeReveal from "../Animation";

function StatisticFigures() {
  const classes = useStyles();
  return (
    <Box mt={10} className={classes.root}>
      <Container className={classes.titleContainer}>
        <FadeReveal>
          <Box>
            <Typography variant="h1">Our Impact</Typography>
          </Box>
        </FadeReveal>
      </Container>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 600,
  },
  titleContainer: {
    textAlign: "center",
  },
}));

export default StatisticFigures;
