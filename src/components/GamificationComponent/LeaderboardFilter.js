import { makeStyles, NativeSelect, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import LeaderboardSection from "../../components/GamificationComponent/LeaderboardSection";

const filterList = ["Descending", "Ascending"];

function LeaderboardFilter([filter, leaderBoard]) {
  const classes = useStyles();

  const [state, setState] = useState("all");

  const handleChange = (event) => {
    setState(event.target.value);
    filter(state);
  };

  return (
    <>
      <Paper className={classes.root}>
        <Typography className={classes.title} variant="h6">
          Sort List
        </Typography>
        <NativeSelect className={classes.dropdown} value={state} onChange={handleChange}>
          <option value="" disabled>
            Filter
          </option>
          {filterList.map((items, index) => (
            <option key={index} value={items}>
              {items}
            </option>
          ))}
        </NativeSelect>
      </Paper>
      <LeaderboardSection leaderboardElement={leaderBoard} />
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08)",
    marginBottom: theme.spacing(4),
    display: "flex",
    alignItems: "center",
  },
  dropdown: {
    margin: theme.spacing(1),
    textTransform: "none",
    padding: theme.spacing(1),
    borderRadius: "5px",
    "&.MuiInput-underline:before": {
      display: "none",
    },
    "&.MuiInput-underline:after": {
      display: "none",
    },
  },
  title: {
    marginLeft: theme.spacing(4),
  },
}));

export default LeaderboardFilter;
