import { makeStyles, Box, Typography, List } from "@material-ui/core";
import React from "react";
import AssignmentList from "../SubComponents/AssignmentList";

function AssignmentsSection({ userCourse }) {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography variant="h4" className={classes.heading}>
        {`Active Assignments (${userCourse?.length})`}
      </Typography>
      <List container spacing={4}>
        {userCourse?.map((items, index) => (
          <AssignmentList key={index} props={items} />
        ))}
      </List>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
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
