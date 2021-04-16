import React, { useEffect, useRef, useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    minWidth: "90%",
    marginRight: theme.spacing(2),
    borderRadius: 15,
  },
  avatar: {
    height: 60,
    width: 60,
    marginRight: theme.spacing(3),
    border: "#000 solid",
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
  },
  timerContainer: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1.5),
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    "& .MuiTypography-caption": {
      color: "#9DA3A8 ",
    },
  },
  paper: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
    textAlign: "center",
    boxShadow: "none",
    display: "inline-block",
    border: " solid 1px",
  },
  countdownWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));
function ContestCard({ contestLogo, contestName, countdownDuration }) {
  const classes = useStyle();
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date(countdownDuration).getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Box className={classes.cardHeader}>
            <Avatar className={classes.avatar} src={contestLogo} />
            <Typography variant="h5">{contestName}</Typography>
          </Box>

          <Box className={classes.timerContainer}>
            <Typography variant="caption">ENDS IN</Typography>
            <Box component="div" className={classes.countdownWrapper}>
              <Grid container>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Typography variant="h1">{timerDays}</Typography>
                    <Typography variant="caption">Days</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Typography variant="h1">{timerHours}</Typography>
                    <Typography variant="caption">Hours</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Typography variant="h1">{timerMinutes}</Typography>
                    <Typography variant="caption">Minutes</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Typography variant="h1">{timerSeconds}</Typography>
                    <Typography variant="caption">Seconds</Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ContestCard;
