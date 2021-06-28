import {
  makeStyles,
  Box,
  ListItem,
  List,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";

function Announcements() {
  const classes = useStyles();

  return (
    <Box>
      <List>
        {[1, 2].map((item, index) => (
          <Box key={index} className={classes.container}>
            <ListItem>
              <ListItemAvatar>
                <Avatar src="assets/members/anuj.png" />
              </ListItemAvatar>
              <ListItemText>
                <Typography color="textPrimary" variant="subtitle2">
                  Anuj Garg
                </Typography>
                <Typography color="textPrimary" variant="subtitle2">
                  8 months ago
                </Typography>
              </ListItemText>
            </ListItem>
            <Box className={classes.infoBox}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                Course Completely REDONE for 2020! Massive Update
              </Typography>
              <Typography variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </Typography>
            </Box>
          </Box>
        ))}
      </List>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    borderBottom: "0.5px solid black",
  },
  infoBox: {
    padding: theme.spacing(2),
  },
}));

export default Announcements;
