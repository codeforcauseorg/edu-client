import { makeStyles, Box, Typography, Tooltip } from "@material-ui/core";
import React from "react";
import DescriptionIcon from "@material-ui/icons/Description";

function Overview() {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography variant="h2" gutterBottom>
        About this class
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Learn how to build full-stack mobile apps using React Native, Redux, React Navigation with
        Node.js on the backend.
      </Typography>
      <Typography variant="h4" className={classes.attachementsTitle}>
        Important Attachements
      </Typography>
      <Box mt={6} mb={4}>
        {[1, 2].map((items, index) => (
          <Tooltip title="React Basic Notes" key={index}>
            <DescriptionIcon className={classes.icons} />
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(3),
    },
  },
  attachementsTitle: {
    marginTop: theme.spacing(4),
  },
  icons: {
    height: 60,
    width: 60,
    cursor: "pointer",
    color: "#CA5454",
  },
}));

export default Overview;
