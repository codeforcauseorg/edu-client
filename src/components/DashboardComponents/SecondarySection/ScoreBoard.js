import { makeStyles, Box, Typography, Grid, Paper, Divider } from "@material-ui/core";
import React from "react";

const scoreBoardList = [
  { title: "Score", value: "500", color: "#F0B1B6" },
  { title: "Challenges", value: "4", color: "#6FE1E4" },
  { title: "Recent rank", value: "1st", color: "#E6BFC4" },
  { title: "Question Answred", value: "20", color: "#C379E6" },
];

function ScoreBoard() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography variant="h4" className={classes.heading}>
        Score Board
      </Typography>
      <Grid container className={classes.grid} spacing={4}>
        {scoreBoardList.map((items, index) => (
          <Grid item key={index} xs={12} lg={6} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h5" className={classes.title}>
                {items.title}
              </Typography>
              <Divider className={classes.divider} style={{ background: items.color }} />
              <Typography variant="h2" className={classes.value}>
                {items.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#F8F9FD",
    borderRadius: "5px",
    padding: theme.spacing(4),
  },
  heading: {
    textTransform: "uppercase",
    color: theme.palette.text.primary,
    padding: theme.spacing(2),
  },
  grid: {
    padding: theme.spacing(2),
  },
  paper: {
    minWidth: 150,
    boxShadow: "none",
    background: "#F8F9FD",
  },
  divider: {
    width: "20%",
    height: "5px",
    marginTop: theme.spacing(1),
    borderRadius: "5px",
  },
  value: {
    marginTop: theme.spacing(1),
  },
}));
export default ScoreBoard;
