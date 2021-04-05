import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import React, { useState } from "react";
import SubAssignmentTask from "./SubAssignmentTask";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
  },
  assignmentIcon: {
    height: 40,
    width: 40,
  },
  listItem: {
    paddingLeft: theme.spacing(1.5),
  },
  dateText: {
    paddingTop: theme.spacing(1),
  },
}));
function AssignmentList({
  courseAssignmentTitle,
  latesttaskdueDate,
  taskCount,
  ListTileColor,
  taskList,
  tasktilecolor,
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      style={{ backgroundColor: ListTileColor }}
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <img src="assets/icon/Assignment_Icon.png" className={classes.assignmentIcon} />
        </ListItemIcon>
        <ListItemText>
          <Box className={classes.listItem}>
            <Typography variant="h5">{courseAssignmentTitle}</Typography>
            <Typography variant="body1">Assignment ({taskCount})</Typography>
            <Typography variant="body1" className={classes.date}>
              Due {latesttaskdueDate}
            </Typography>
          </Box>
        </ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {taskList.map((items, index) => (
          <SubAssignmentTask
            key={index}
            id={items.taskId}
            taskTitle={items.taskTitle}
            dueDate={items.dueDate}
            tasktilecolor={tasktilecolor}
          />
        ))}
      </Collapse>
    </List>
  );
}

export default AssignmentList;
