import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import AskedQuestion from "../SubComponents/AskedQuestion";

function DoubtsSection() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.headerContainer}>
        <Box className={classes.titleSection}>
          <Typography variant="h4" className={classes.title} gutterBottom>
            Forum
          </Typography>
          <Typography variant="h5" className={classes.subtitle}>
            Your questions on forum
          </Typography>
        </Box>
        <Box className={classes.askQuestion}>
          <Button className={classes.button}>
            <Typography variant="h6" className={classes.buttonLabel}>
              Ask A Question
            </Typography>
            <EditIcon />
          </Button>
        </Box>
      </Box>
      <Grid container className={classes.grid}>
        {[1, 2, 3, 4, 5].map((items, index) => (
          <Grid items key={index} xs={12} lg={4}>
            <AskedQuestion />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#F5F8FB",
    borderRadius: "5px",
    padding: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  title: {
    textTransform: "uppercase",
  },
  subtitle: {
    textTransform: "uppercase",
  },
  buttonLabel: {
    marginRight: theme.spacing(2),
  },
  button: {
    color: theme.palette.primary.main,
  },
  grid: {
    marginTop: theme.spacing(5),
  },
  titleSection: {
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  },
  askQuestion: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(4),
  },
}));
export default DoubtsSection;
