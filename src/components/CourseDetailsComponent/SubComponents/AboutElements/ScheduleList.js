import {
  //   Box,
  Typography,
  List,
  ListItem,
  Collapse,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import DateRangeIcon from "@material-ui/icons/DateRange";

import React from "react";

function ScheduleList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box className={classes.listItem} component="div" onClick={() => handleClick()}>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <DateRangeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Chapter 1" secondary="Lorem ipsum dolor sit amet, consectetur" />
        <ListItemSecondaryAction className={classes.listItemSecondaryAction}>
          <Typography className={classes.lectureInfo}>11 lectures • 1h 25m</Typography>
          <IconButton edge="end" onClick={() => handleClick()}>
            {open ? <ExpandMoreIcon /> : <NavigateNextIcon />}
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {[1, 2].map((items, index) => (
          <CollapseList key={index} />
        ))}
      </Collapse>
    </Box>
  );
}

function CollapseList() {
  const classes = useStyles();
  return (
    <List component="div">
      <ListItem button className={classes.nested}>
        <ListItemIcon>
          <PlayCircleOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="Introduction" />
        <ListItemSecondaryAction className={classes.listItemSecondaryAction}>
          <Typography className={classes.lectureInfo}> 12:25</Typography>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}

const useStyles = makeStyles((theme) => ({
  listItem: {
    border: `2px dotted ${theme.palette.text.secondary}`,
    cursor: "pointer",
  },
  avatar: {
    borderRadius: "5px",
    background: "#fff",
    color: theme.palette.primary.main,
  },
  listItemSecondaryAction: {
    display: "flex",
    alignItems: "center",
  },
  lectureInfo: {
    marginRight: theme.spacing(2),
  },
}));

export default ScheduleList;
