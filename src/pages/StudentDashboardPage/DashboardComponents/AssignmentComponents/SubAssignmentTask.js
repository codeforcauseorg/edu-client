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
function SubAssignmentTask({ taskTitle, dueDate, tasktilecolor }) {
  const classes = useStyles();
  return (
    <List
      key
      component="div"
      disablePadding
      style={{ background: tasktilecolor }}
      className={classes.root}
    >
      <ListItem button className={classes.nested}>
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
