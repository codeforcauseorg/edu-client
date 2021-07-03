import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import EditIcon from "@material-ui/icons/Edit";

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
            Questions on forum
          </Typography>
        </Box>
        <Box>
          <Button className={classes.button}>
            <Typography variant="h6" className={classes.buttonLabel}>
              Ask A Question
            </Typography>
            <EditIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#F5F8FB",
    height: 150,
    borderRadius: "5px",
    padding: theme.spacing(4),
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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
}));
export default DoubtsSection;
