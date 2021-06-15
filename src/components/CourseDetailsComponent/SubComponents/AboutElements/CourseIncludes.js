import React from "react";
import {
  Box,
  makeStyles,
  Typography,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  List,
} from "@material-ui/core";

const listElement = [
  {
    title: "Shareable Certificate",
    subtitle: "Earn a Certificate upon completion",
  },
  {
    title: "100% online courses",
    subtitle: "Start instantly and learn at your own schedule.",
  },
  {
    title: "Flexible Schedule",
    subtitle: "Set and maintain flexible deadlines.",
  },
  {
    title: "Beginner Level",
    subtitle: "No degree or prior experience required",
  },
  {
    title: "Approximately 6 months to complete",
    subtitle: "Suggested pace of 10 hours/week",
  },
  {
    title: "English",
    subtitle: "Subtitles: English",
  },
];

function CourseIncludes() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <List>
        {listElement.map((items, index) => (
          <ListItem key={index}>
            <ListItemAvatar className={classes.listItemAvatar}>
              <Avatar className={classes.avatar}></Avatar>
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="h4">{items.title}</Typography>
              <Typography color="textSecondary" variant="subtitle1">
                {items.subtitle}
              </Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: 500,
    width: 435,
  },
}));

export default CourseIncludes;
