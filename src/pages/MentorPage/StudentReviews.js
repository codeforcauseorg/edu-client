import { makeStyles, Typography, Box } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import React from "react";
import { deepPurple } from "@material-ui/core/colors";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  Buttons: {
    padding: "15px",
  },
  BoxSpaces: {
    padding: "15px",
  },
  info: {
    paddingLeft: "5px",
  },
}));

function StudentReviews({ data }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.margin}>
        <Grid container spacing={1}>
          <Grid>
            <Avatar className={classes.purple}>{data.name.slice(0, 1)}</Avatar>
          </Grid>
          <Box margin={1} fontStyle="italic">
            <div>
              <div>
                <Typography variant="body2" className={classes.info}>
                  {data.name}
                </Typography>
              </div>
              <div>
                <Rating defaultValue={4} precision={data.stars} readOnly />
              </div>
            </div>
          </Box>
          <Box className={classes.BoxSpaces}>
            <Typography variant="body2">{data.review}</Typography>
          </Box>
        </Grid>
      </div>
      <Divider />
    </>
  );
}

export default StudentReviews;
