import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

function DescriptionContainer() {
  const classes = useStyles();

  return (
    <Box mt={8} className={classes.descriptionContainer}>
      <Typography variant="h2" gutterBottom>
        Description
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" component="p" gutterBottom>
        This is not a beginners course, and you should have a solid grasp of both the Dart language
        and a beginners understanding of Flutter. This course picks up where my Flutter for
        beginners course left off. In this course you will learn some of the more complex flutter
        widgets, along with using charts, navigation and routing, and state management from building
        your own to using Redux. I highly recommend you take my existing Dart and Flutter courses
        before attempting this one.
      </Typography>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  descriptionContainer: {
    width: "80%",
  },
}));

export default DescriptionContainer;
