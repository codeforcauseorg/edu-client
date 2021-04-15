import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  taskIcon: {
    height: 30,
    width: 30,
  },
  listitemText: {
    paddingLeft: theme.spacing(1.5),
  },
}));
function SubAssignmentTask({ id, taskTitle, dueDate, taskTileColor }) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <List
      component="div"
      disablePadding
      style={{ background: taskTileColor }}
      className={classes.root}
    >
      <ListItem
        button
        className={classes.nested}
        onClick={() => history.push(`/dashboard/assignment/${id}`)}
      >
        <ListItemIcon>
          <img src="assets/icon/task-planning_Icon.png" className={classes.taskIcon} />
        </ListItemIcon>
        <ListItemText>
          <Box className={classes.listitemText}>
            <Typography>{taskTitle}</Typography>
            <Typography>Due {dueDate}</Typography>
          </Box>
        </ListItemText>
      </ListItem>
    </List>
  );
}

export default SubAssignmentTask;
