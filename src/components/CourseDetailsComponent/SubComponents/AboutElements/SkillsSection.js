import { makeStyles, Box, Typography, Chip } from "@material-ui/core";
import React from "react";

function SkillsSection() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        Skills you will gain
      </Typography>
      <Box className={classes.container}>
        {[1, 2, 3, 4, 5].map((items, index) => (
          <Chip key={index} className={classes.chip} label="Cloud Databases" />
        ))}
      </Box>
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
    marginTop: theme.spacing(5),
  },
  chip: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderRadius: "5px",
    background: "#D4F1FF",
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
}));

export default SkillsSection;
