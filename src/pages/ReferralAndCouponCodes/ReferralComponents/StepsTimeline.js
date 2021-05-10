import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  avatar: {
    background: "#FFFFFF",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.12)",
  },
  stepNumber: {
    color: "#000",
  },
  dottedLine: {
    position: "absolute",
    left: 20,
    border: "none",
    borderLeft: "1px dashed #000",
    color: "#fff",
    backgroundColor: "#fff",
    height: 50,
    width: 20,
  },
  listItem: {
    paddingLeft: 0,
  },
}));
function StepsTimeline({ title, subtitle, value }) {
  const classes = useStyles();
  return (
    <List>
      <ListItem className={classes.listItem}>
        <ListItemAvatar>
          <Box>
            <Avatar className={classes.avatar}>
              <Typography
                variant="h3"
                className={classes.stepNumber}
                style={{ color: value === 3 ? "#1EA01C" : "#000" }}
              >
                {value}
              </Typography>
            </Avatar>
            {value <= 2 ? <Box className={classes.dottedLine} /> : <Box />}
          </Box>
        </ListItemAvatar>
        <ListItemText>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body1">{subtitle}</Typography>
        </ListItemText>
      </ListItem>
    </List>
  );
}

export default StepsTimeline;
