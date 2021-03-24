import { Box, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  Scorboard: {
    background: "#150051",
    borderRadius: "16px",
    margin: `${theme.spacing(3)}px`,
  },
  Scorboard__details: {
    "& .MuiTypography-h4": {
      color: "#fff",
      fontSize: "15px",
      fontWeight: 400,
      marginTop: "15px",
    },
    "& .MuiTypography-h2": {
      color: "#fff",
      fontSize: "20px",
      fontWeight: 400,
      marginTop: "10px",
    },
  },
  paper: {
    height: 80,
    width: 80,
    background: "#150051",
    textAlign: "center",
    boxShadow: "none",
  },
}));
function ScoreBoardComponent() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box component="div" className={classes.Scorboard}>
        <Box className={classes.Scorboard__details}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={1}>
              <Grid item>
                <Paper className={classes.paper}>
                  <Typography variant="h4">Answered</Typography>
                  <Typography variant="h2">20</Typography>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.paper}>
                  <Typography variant="h4">Score</Typography>
                  <Typography variant="h2">300</Typography>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.paper}>
                  <Typography variant="h4">Rank</Typography>
                  <Typography variant="h2">7</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default ScoreBoardComponent;
