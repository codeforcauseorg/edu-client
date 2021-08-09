import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

function DescriptionContainer({ description }) {
  const classes = useStyles();

  return (
    <Box mt={8} className={classes.descriptionContainer}>
      <Typography variant="h2" className={classes.title}>
        Description
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" component="p" gutterBottom>
        {description}
      </Typography>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  descriptionContainer: {
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  title: {
    marginBottom: theme.spacing(5),
  },
}));

export default DescriptionContainer;
