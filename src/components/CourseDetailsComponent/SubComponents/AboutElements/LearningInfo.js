import React from "react";
import {
  Box,
  Grid,
  makeStyles,
  Typography,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";

import CheckIcon from "@material-ui/icons/Check";

const listElement = [
  "Gain skills required to succeed in an entry-level IT job",
  "Learn to perform day-to-day IT support tasks including computer assembly, wireless networking, installing programs, and customer service",
  "Learn how to provide end-to-end customer support, ranging from identifying problems to troubleshooting and debugging",
  "Learn to use systems including Linux, Domain Name Systems, Command-Line Interface, and Binary Code",
];
function LearningInfo() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Typography variant="h4" color="textSecondary" gutterBottom>
          What you will learn
        </Typography>
        <Box>
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={2}>
              {listElement.map((items, index) => (
                <Grid key={index} item xs={6}>
                  <ListItem>
                    <ListItemAvatar className={classes.listItemAvatar}>
                      <Avatar className={classes.avatar}>
                        <CheckIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                      <Typography variant="subtitle1">{items}</Typography>
                    </ListItemText>
                  </ListItem>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    border: `2px solid ${theme.palette.text.secondary}`,
    borderRadius: "5px",
    marginRight: theme.spacing(2),
    background: "#fff",
  },
  container: {
    padding: theme.spacing(2),
  },
  avatar: {
    border: `2px dotted ${theme.palette.secondary.default}`,
    background: "#fff",
    color: theme.palette.secondary.default,
  },
}));

export default LearningInfo;
