import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(5),
  },
  winnerStatus: {
    background: "#F0F4F8",
    marginBottom: theme.spacing(1),
    borderTopLeftRadius: 12,
  },
  currentUserStatus: {
    background: "#F3F3F3",
    borderBottomLeftRadius: 12,
  },
  profileAvatar: {
    marginRight: theme.spacing(2),
    height: 50,
    width: 50,
  },
  textElement: {
    marginRight: theme.spacing(4),
  },
  spanText: {
    marginLeft: theme.spacing(3),
  },
  scorePointContainer: {
    marginTop: theme.spacing(0.5),
  },
}));
function LeaderboardComponent({
  winnerProfileAvatar,
  winnerName,
  winnerScore,
  winnerPosition,
  currentUserScore,
  currentUserPosition,
}) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <List className={classes.winnerStatus}>
        <ListItem>
          <Avatar src={winnerProfileAvatar} className={classes.profileAvatar} />
          <ListItemText>
            <Typography variant="h5">{winnerName}</Typography>
            <Box className={classes.scorePointContainer}>
              <Typography variant="body1">
                Score Points
                <Typography variant="body1" component="span" className={classes.spanText}>
                  {winnerScore}
                </Typography>
              </Typography>
            </Box>
          </ListItemText>
          <ListItemSecondaryAction>
            <Typography variant="body2">{winnerPosition}</Typography>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
      <List className={classes.currentUserStatus}>
        <ListItem>
          <Typography variant="h5" className={classes.textElement}>
            You
          </Typography>
          <ListItemText>
            <Typography variant="body1">
              Score Points
              <Typography variant="body1" component="span" className={classes.spanText}>
                {currentUserScore}
              </Typography>
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <Typography variant="body2">{currentUserPosition}</Typography>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </Box>
  );
}

export default LeaderboardComponent;
