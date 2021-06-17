import { makeStyles, Box, Typography, Chip, Avatar } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import React from "react";

function Prerequisites() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        Prerequisites
      </Typography>
      <Typography variant="h4" color="textSecondary">
        Basic
      </Typography>
      <Box className={classes.container}>
        {[1, 2, 3].map((items, index) => (
          <Chip
            className={classes.chip}
            key={index}
            avatar={
              <Avatar>
                <CheckCircleIcon className={classes.icon} />
              </Avatar>
            }
            label="Javascript"
          />
        ))}
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(5),
  },
  chip: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
    background: theme.palette.primary.main,
    color: "#fff",
  },
  icon: {
    color: "#fff",
  },
}));

export default Prerequisites;
