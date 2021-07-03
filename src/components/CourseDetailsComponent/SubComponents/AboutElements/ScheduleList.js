import {
  Hidden,
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
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import DateRangeIcon from "@material-ui/icons/DateRange";

import React from "react";

function ScheduleList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { scheduleInfo } = props;
  const {
    noOfLectures,
    sectionName,
    totalLectureDuration,
    shortDescription,
    lectureList,
  } = scheduleInfo;

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Paper className={classes.listItem} component="div">
      <ListItem onClick={() => handleClick()}>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <DateRangeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={sectionName} secondary={shortDescription} />
        <ListItemSecondaryAction className={classes.listItemSecondaryAction}>
          <Hidden smDown>
            <Typography>
              {noOfLectures} • {totalLectureDuration}
            </Typography>
          </Hidden>
          <IconButton edge="end" onClick={() => handleClick()}>
            {open ? <ExpandMoreIcon /> : <NavigateNextIcon />}
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {lectureList.map((items, index) => (
          <CollapseList key={index} lectureList={items} />
        ))}
      </Collapse>
    </Paper>
  );
}

function CollapseList(props) {
  const classes = useStyles();
  const { lectureList } = props;
  const { lectureTitle, lectureDuration } = lectureList;

  return (
    <List component="div">
      <ListItem button>
        <ListItemIcon>
          <PlayCircleOutlineIcon />
        </ListItemIcon>
        <ListItemText primary={lectureTitle} />
        <ListItemSecondaryAction className={classes.listItemSecondaryAction}>
          <Typography className={classes.lectureInfo}>{lectureDuration}</Typography>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}

const useStyles = makeStyles((theme) => ({
  listItem: {
    boxShadow: "0px 4px 20px 2px rgba(145, 180, 248, 0.15)",
    cursor: "pointer",
    marginBottom: theme.spacing(1),
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
}));

export default ScheduleList;
