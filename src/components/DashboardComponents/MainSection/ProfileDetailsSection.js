import { Box, makeStyles, Typography, TextField, Grid, Button } from "@material-ui/core";
import React from "react";

function ProfileDetailsSection() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Add few details
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={6} lg={4}>
          <TextField id="outlined-basic" label=" Phone Number" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={6} lg={4}>
          <TextField
            id="outlined-basic"
            label=" Description"
            fullWidth
            multiline
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} lg={4}>
          <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth multiline />
        </Grid>
      </Grid>
      <Button className={classes.button}>Submit</Button>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
  },
  title: {
    textTransform: "uppercase",
    marginBottom: theme.spacing(5),
  },
  button: {
    background: theme.palette.text.primary,
    color: "#fff",
    width: 120,
    marginTop: theme.spacing(4),
    "&:hover": {
      background: theme.palette.text.primary,
    },
  },
}));

export default ProfileDetailsSection;
