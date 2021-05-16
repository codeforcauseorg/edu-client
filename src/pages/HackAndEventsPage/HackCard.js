import React, { useEffect, useRef, useState } from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Grid,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
  rel="stylesheet"
></link>;

const useStyle = makeStyles((theme) => ({
  root: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  card: {
    margin: 20,
    width: 300,
    boxShadow: "0 1px 1px 0 rgb(159 167 194 / 60%)",
    borderRadius: "3px",
  },
  media: {
    height: 160,
  },
  compDetails: {
    color: "white",
  },
  compIcon: {
    width: "35px",
    marginRight: "20px",
  },
  compWrapper: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    padding: "10px",
    paddingLeft: "80px",
    background: "linear-gradient(left,rgba(0,0,0,0.8) 0,rgba(0,0,0,0.15) 40%,rgba(0,0,0,0) 70%)",
  },
  participantDiv: {
    background: "#fff",
    padding: "6px 14px",
    borderRadius: "3px",
    fontSize: "13px",
    whiteSpace: "nowrap",
    marginTop: "80px",
    color: "#f49020",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxwidth: "80%",
    boxsizing: "border-box",
    display: "flex",
    marginLeft: "100px",
    marginRight: "100px",
    wordSpacing: 0,
    flexGrow: 1,
    alignItems: "center",
  },
  personSvg: {
    width: "18px",
    marginRight: "6px",
    marginBottom: "2px",
  },
  eveType: {
    letterSpacing: "5px",
    fontWeight: 600,
    fontSize: "10px",
    textTransform: "uppercase",
    margin: "7px",
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
  },
  dots: {
    marginBottom: "14px",
  },
  end: {
    fontWeight: 600,
    fontSize: "10px",
    textTransform: "uppercase",
    marginTop: "10px",
  },
  countdownWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "rgb(21, 0, 81)",
    fontSize: "0.85rem",
    transition: "0.3s",
    marginTop: "10px",
    marginBottom: "15px",
    "&:hover": {
      backgroundColor: "rgb(138, 128, 168)",
    },
  },
}));

const HackCard = (item) => {
  const classes = useStyle();
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date(item.countdownDuration).getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
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
    <>
      <Grid container alignItems="center" justify="center">
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia className={classes.media} image={item.preview}>
              <Box className={classes.compWrapper}>
                <img src={item.icon} className={classes.compIcon}></img>
                <Typography variant="caption" className={classes.compDetails}>
                  {item.orgName}
                </Typography>
              </Box>
              <Box className={classes.participantDiv}>
                <PersonIcon className={classes.personSvg} />
                <Typography>{item.participants}</Typography>
              </Box>
            </CardMedia>
            <Box className={classes.timerContainer}>
              <Typography variant="caption" className={classes.eveType}>
                {item.eveType}
              </Typography>
              <Typography variant="h5">{item.name}</Typography>
              <Typography variant="caption" className={classes.end}>
                ENDS IN
              </Typography>
              <Box component="div" className={classes.countdownWrapper}>
                <Grid container alignItems="center" justify="center">
                  <Grid>
                    <Paper className={classes.paper}>
                      <Typography variant="h3">{timerDays}</Typography>
                      <Typography variant="caption">Days</Typography>
                    </Paper>
                  </Grid>
                  <Typography variant="h2" className={classes.dots}>
                    :
                  </Typography>
                  <Grid>
                    <Paper className={classes.paper}>
                      <Typography variant="h3">{timerHours}</Typography>
                      <Typography variant="caption">Hours</Typography>
                    </Paper>
                  </Grid>
                  <Typography variant="h2" className={classes.dots}>
                    :
                  </Typography>
                  <Grid>
                    <Paper className={classes.paper}>
                      <Typography variant="h3">{timerMinutes}</Typography>
                      <Typography variant="caption">Minutes</Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => console.log("start now")}
            >
              START NOW
            </Button>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default HackCard;
