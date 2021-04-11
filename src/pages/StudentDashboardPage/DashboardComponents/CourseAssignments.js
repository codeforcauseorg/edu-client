import { Box, Button, Container, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import AssignmentList from "./AssignmentComponents/AssignmentList";
import assignments from "../../../data/assignmentsDetails.json";
const useStyle = makeStyles((theme) => ({
  root: {},
  buttonContainer: {
    marginTop: theme.spacing(1),
  },
  button: {
    textTransform: "none",
    borderRadius: 5,
    color: "#fff",
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  assignmentContainer: {
    marginTop: theme.spacing(3),
  },
}));
const active = assignments[0].active;
const pending = assignments[0].pending;
const completed = assignments[0].completed;

function CourseAssignments() {
  const classes = useStyle();
  const buttonItems = [
    {
      status: "Active",
    },
    {
      status: "Pending",
    },
    {
      status: "Completed",
    },
  ];
  const [status, setStatus] = useState("Active");
  const setStatusFilter = (status) => {
    setStatus(status);
  };
  return (
    <Container className={classes.root}>
      <Box>
        <Typography variant="h3">
          Course Assignments{" "}
          <Typography variant="h3" component="span" style={{ color: "#808080" }}>
            (
            {(() => {
              switch (status) {
                case "Active":
                  return active.length != null ? active.length : 0;
                case "Pending":
                  return pending.length != null ? pending.length : 0;
                default:
                  return completed.length != null ? completed.length : 0;
              }
            })()}
            )
          </Typography>
        </Typography>
      </Box>
      <Box className={classes.buttonContainer}>
        {buttonItems.map((items, index) => (
          <Button
            key={index}
            className={classes.button}
            variant="contained"
            style={{ background: status === items.status ? "#150051" : "#8A80A8" }}
            onClick={() => setStatusFilter(items.status)}
          >
            <Typography variant="caption">{items.status}</Typography>
          </Button>
        ))}
      </Box>
      <Box className={classes.assignmentContainer}>
        {(() => {
          switch (status) {
            case "Active":
              return active.map((items, index) => (
                <AssignmentList
                  key={index}
                  courseAssignmentTitle={items.courseAssignmentTitle}
                  latestTaskDueDate={items.latestTaskDueDate}
                  taskCount={items.taskCount}
                  ListTileColor="#EEF7FB"
                  taskList={items.taskList}
                  taskTileColor="#DAE9F0"
                />
              ));
            case "Pending":
              return pending.map((items, index) => (
                <AssignmentList
                  key={index}
                  courseAssignmentTitle={items.courseAssignmentTitle}
                  latestTaskDueDate={items.latestTaskDueDate}
                  taskCount={items.taskCount}
                  ListTileColor="#FEF7EF"
                  taskList={items.taskList}
                  taskTileColor="#F7E6D3"
                />
              ));
            default:
              return completed.map((items, index) => (
                <AssignmentList
                  key={index}
                  courseAssignmentTitle={items.courseAssignmentTitle}
                  latestTaskDueDate={items.latestTaskDueDate}
                  taskCount={items.taskCount}
                  ListTileColor="#EBFDF5"
                  taskList={items.taskList}
                  taskTileColor="#C8EEDD"
                />
              ));
          }
        })()}
      </Box>
    </Container>
  );
}

export default CourseAssignments;
