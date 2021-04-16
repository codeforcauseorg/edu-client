import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 200,
    background: "#F3F3F3",
    boxShadow: "none",
    margin: theme.spacing(2.5),
    position: "relative",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(1),
  },
  avatar: {
    height: 55,
    width: 55,
  },
  paper: {
    boxShadow: "none",
    background: "#F3F3F3",
  },
  textElement: {
    color: "#9A9C9F",
    fontWeight: 500,
    marginBottom: theme.spacing(0.5),
  },
  statsButton: {
    position: "absolute",
    right: 20,
    bottom: 20,

    textTransform: "none",
    border: "#000 solid 1px",
  },
}));
function StatsComponent({ total, won, bestPosition }) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Box className={classes.cardHeader}>
          <Typography variant="h3">Code for Cause</Typography>
          <Avatar
            className={classes.avatar}
            src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
          />
        </Box>
        <Grid container spacing={2} className={classes.statsContainer}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography variant="h4" className={classes.textElement}>
                Total
              </Typography>
              <Typography variant="h2">{total}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} className={classes.statsElement}>
            <Paper className={classes.paper}>
              <Typography variant="h4" className={classes.textElement}>
                Won
              </Typography>
              <Typography variant="h2">{won}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography variant="h4" className={classes.textElement}>
                Best position
              </Typography>
              <Typography variant="h2">{bestPosition}</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Button className={classes.statsButton} onClick={() => history.push("/statistics")}>
          Previous stats
        </Button>
      </CardContent>
    </Card>
  );
}

export default StatsComponent;
