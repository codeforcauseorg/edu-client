/* eslint-disable camelcase */
import { Box, makeStyles, Paper, Hidden } from "@material-ui/core";
import React from "react";
import SkeletonElement from "./SkeletonElement";

function DoubtQuestionListSkeleton() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Hidden mdDown>
        <Box className={classes.avatarContainer}>
          <SkeletonElement variant="circle" height={50} width={50} />
        </Box>
      </Hidden>
      <Box className={classes.infoContainer}>
        <Box className={classes.innerContainer}>
          <SkeletonElement variant="text" component="h1" />
          <Box className={classes.statusContainer}>
            <SkeletonElement
              variant="text"
              component="h1"
              className={classes.moment}
              height={30}
              width={50}
            />
            <SkeletonElement variant="text" component="h1" height={30} width={50} />
          </Box>
          {[1, 2, 3].map((index) => (
            <SkeletonElement key={index} variant="text" component="h6" width={800} />
          ))}
        </Box>
      </Box>
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: "5px",
    display: "flex",
    margin: theme.spacing(2),
    boxShadow: "0px 4px 20px rgba(55, 64, 161, 0.1)",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(0),
      marginBottom: theme.spacing(2),
    },
  },
  infoContainer: {
    padding: theme.spacing(2),
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  resolvedChip: {
    background: theme.palette.success.main,
    color: "#fff",
    borderRadius: "5px",
  },
  activeChip: {
    background: theme.palette.secondary.main,
    color: "#fff",
    borderRadius: "5px",
  },
  moment: {
    marginRight: theme.spacing(2),
  },
  statusContainer: {
    display: "flex",
    alignItems: "center",
  },
  chip: {
    borderRadius: "5px",
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
    background: "#E6F3FF",
    color: theme.palette.primary.main,
  },
  avatarContainer: {
    margin: theme.spacing(2),
  },
  questionDescription: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  flex: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
  actionContainer: {
    flex: 2,
    paddingTop: theme.spacing(4),
    marginLeft: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(0),
    },
  },
  innerContainer: {
    flex: 8,
  },
  icons: {
    marginRight: theme.spacing(2),
  },
}));

export default DoubtQuestionListSkeleton;
