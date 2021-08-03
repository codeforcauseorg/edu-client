import { makeStyles, Box, Typography, Chip, Avatar } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import React from "react";

function Prerequisites({ prerequisitesInfo }) {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h2" className={classes.title}>
        Prerequisites
      </Typography>
      <Box>
        {prerequisitesInfo.map((items, index) => (
          <Chip
            className={classes.chip}
            key={index}
            avatar={
              <Avatar>
                <CheckCircleIcon className={classes.icon} />
              </Avatar>
            }
            label={items}
          />
        ))}
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
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
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
  icon: {
    color: "#fff",
  },
}));

export default Prerequisites;
