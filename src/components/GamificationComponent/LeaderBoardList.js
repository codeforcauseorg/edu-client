import { makeStyles, Avatar, Box, Paper, Typography } from "@material-ui/core";
import React from "react";

function LeaderBoardList({ leaderboardElement }) {
  const classes = useStyles();

  return (
    <>
      {leaderboardElement.map((items, index) => (
        <Paper key={index} className={classes.paper}>
          <Avatar className={classes.avata}>
            <Typography>{items.id}</Typography>
          </Avatar>
          <Avatar className={classes.profileAvatar} src={items.profilePic} />
          <Box className={classes.infoContainer}>
            <Box className={classes.infoWrapper}>
              <Typography variant="h5" gutterBottom>
                {items.name}
              </Typography>
              <Typography variant="h6">{items.occupation}</Typography>
            </Box>
            <Box className={classes.score}>
              <Typography variant="h4">{items.score}</Typography>
            </Box>
          </Box>
        </Paper>
      ))}
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    boxShadow: "0px 4px 20px rgba(84, 109, 222, 0.25)",
    marginBottom: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    borderRadius: "10px",
    cursor: "pointer",
  },
  avata: {
    borderRadius: "10px",
    margin: theme.spacing(2),
    height: 30,
    width: 30,
    background: theme.palette.text.primary,
  },
  profileAvatar: {
    height: 80,
    width: 80,
    margin: theme.spacing(2),
  },
  infoContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
  },
  score: {
    marginRight: theme.spacing(3),
  },
}));

export default LeaderBoardList;
