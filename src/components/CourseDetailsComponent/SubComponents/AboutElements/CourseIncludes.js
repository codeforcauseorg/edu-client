import React from "react";
import {
  Box,
  Typography,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

const listElement = [
  {
    title: "Shareable Certificate",
    subtitle: "Earn a Certificate upon completion",
    icon: "/assets/icon/CourseIcon/quality.png",
  },
  {
    title: "100% online courses",
    subtitle: "Start instantly and learn at your own schedule.",
    icon: "/assets/icon/CourseIcon/play.png",
  },
  {
    title: "Flexible Schedule",
    subtitle: "Set and maintain flexible deadlines.",
    icon: "/assets/icon/CourseIcon/calendar.png",
  },
  {
    title: "Beginner Level",
    subtitle: "No degree or prior experience required",
    icon: "/assets/icon/CourseIcon/next-level.png",
  },
  {
    title: "Approximately 6 months to complete",
    subtitle: "Suggested pace of 10 hours/week",
    icon: "/assets/icon/CourseIcon/duration.png",
  },
  {
    title: "English",
    subtitle: "Subtitles: English",
    icon: "/assets/icon/CourseIcon/linguistics.png",
  },
];

function CourseIncludes() {
  const classes = useStyles();

  return (
    <Box>
      {listElement.map((items, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar className={classes.icon} src={items.icon} />
          </ListItemAvatar>
          <ListItemText>
            <Typography variant="h4">{items.title}</Typography>
            <Typography color="textSecondary" variant="subtitle1">
              {items.subtitle}
            </Typography>
          </ListItemText>
        </ListItem>
      ))}
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    padding: theme.spacing(0.5),
  },
}));

export default CourseIncludes;
