import { Box, Card, CardContent, ListItemText, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Rating from "@material-ui/lab/Rating";

function ReviewCard() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.imageFrame}>
        <img
          className={classes.profileImage}
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
      </Box>
      <Card className={classes.cardContainer}>
        <CardContent>
          <ListItemText className={classes.listItemText}>
            <Typography variant="h5">Adarsh Kumar Singh</Typography>
            <Typography variant="body1">Student</Typography>
            <Rating defaultValue={4} precision={4} readOnly className={classes.rating} />
          </ListItemText>
          <Typography variant="h4">“Greate Mentor. Absolutely brilliant.”</Typography>
          <Typography className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: 800,
  },
  profileImage: {
    height: 300,
    width: 250,
  },
  imageFrame: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
  },
  cardContainer: {
    bottom: 20,
    left: 250,
    position: "absolute",
    maxWidth: 500,
    boxShadow: "0px 4px 20px rgba(55, 64, 161, 0.25)",
    cursor: "pointer",
    transition: "0.5s",
    "&:hover": {
      boxShadow: "0px 4px 20px rgba(55, 64, 161, 0.1)",
    },
    border: "2px solid #000",
  },
  description: {
    marginTop: theme.spacing(2),
  },
  listItemText: {
    marginBottom: theme.spacing(2),
  },
  rating: {
    marginTop: theme.spacing(1),
  },
}));

export default ReviewCard;
