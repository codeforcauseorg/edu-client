import { makeStyles, Typography, Box } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import React from "react";
import { deepOrange, deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

function Discussion({ data }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item xs={2}>
            <Avatar className={classes.purple}>{data.name.slice(0, 1)}</Avatar>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" style={{ display: "inline-block" }}>
              ( 27/03/2021 )<br></br>
              by {data.name}
            </Typography>
          </Grid>
          <Box style={{ padding: "10px" }}>
            <Typography variant="body2">
              Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of
              document or a typeface without relying on meaningful content.
            </Typography>
          </Box>
        </Grid>
      </div>
      <Divider />
    </React.Fragment>
  );
}

export default Discussion;
