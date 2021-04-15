import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(3),
    display: "flex",
  },
  headingContainer: {
    flexGrow: 1,
  },
  button: {
    textTransform: "none",
  },
}));
function TitleComponent({ title, subTitle, onClick, textButton }) {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.headingContainer}>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="body1">{subTitle}</Typography>
      </Box>
      <Box>
        {textButton ? (
          <Button className={classes.button} onClick={onClick}>
            <Typography variant="h6">View all</Typography>
          </Button>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
}

export default TitleComponent;
