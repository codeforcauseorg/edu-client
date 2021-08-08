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

function ScheduleList({ scheduleInfo, index }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const { chapterName, lectureNumber, time, lecture, description } = scheduleInfo;

  return (
    <Paper className={classes.listItem} component="div">
      <ListItem onClick={() => handleClick()}>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <DateRangeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Typography>Chapter {index}</Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom className={classes.title}>
            {chapterName}
          </Typography>
          <Typography variant="body2" className={classes.subtitle}>
            {description}
          </Typography>
        </ListItemText>
        <ListItemSecondaryAction className={classes.listItemSecondaryAction}>
          <Hidden smDown>
            <Typography>
              {lectureNumber} lecture • {time}
            </Typography>
          </Hidden>
          <IconButton edge="end" onClick={() => handleClick()}>
            {open ? <ExpandMoreIcon /> : <NavigateNextIcon />}
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {lecture.map((items, index) => (
          <CollapseList key={index} lectureList={items} />
        ))}
      </Collapse>
    </Paper>
  );
}

function CollapseList({ lectureList }) {
  const classes = useStyles();

  const { lectureName, description, time } = lectureList;

  return (
    <List component="div">
      <ListItem button>
        <ListItemIcon>
          <PlayCircleOutlineIcon />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body1" color="textSecondary" gutterBottom className={classes.title}>
            {lectureName}
          </Typography>
          <Typography variant="body2" className={classes.subtitle}>
            {description}
          </Typography>
        </ListItemText>
        <ListItemSecondaryAction className={classes.listItemSecondaryAction}>
          <Typography className={classes.lectureInfo}>{time}</Typography>
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
  title: {
    fontSize: 16,
    fontWeight: 600,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 500,
  },
}));

export default ScheduleList;
