import { makeStyles, Box, Typography, List } from "@material-ui/core";
import React from "react";
import AssignmentList from "../SubComponents/AssignmentList";

function AssignmentsSection() {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography variant="h4" className={classes.heading}>
        Assignments (2)
      </Typography>
      <List container className={classes.grid} spacing={4}>
        {[1, 2].map((items, index) => (
          <AssignmentList key={index} />
        ))}
      </List>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#F8F9FD",
    borderRadius: "5px",
    padding: theme.spacing(4),
  },
  heading: {
    textTransform: "uppercase",
    color: theme.palette.text.primary,
    padding: theme.spacing(2),
  },
  divider: {
    width: "20%",
    height: "5px",
    marginTop: theme.spacing(1),
    borderRadius: "5px",
  },
}));
export default AssignmentsSection;
