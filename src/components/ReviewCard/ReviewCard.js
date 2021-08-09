import {
  Avatar,
  Box,
  Card,
  CardContent,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import Rating from "@material-ui/lab/Rating";

function ReviewCard() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Card className={classes.cardContainer}>
        <CardContent>
          <ListItem>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="h5">Adarsh Kumar Singh</Typography>
              <Typography variant="body1">Student</Typography>
            </ListItemText>
          </ListItem>
          <Rating defaultValue={4} precision={4} readOnly className={classes.rating} />
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
    width: 520,
    flex: "0 0 auto",
    [theme.breakpoints.down("md")]: {
      maxWidth: 390,
    },
  },
  cardContainer: {
    maxWidth: 500,
    boxShadow: "0px 4px 20px rgba(55, 64, 161, 0.25)",
    cursor: "pointer",
    transition: "0.5s",
    "&:hover": {
      boxShadow: "0px 4px 20px rgba(55, 64, 161, 0.1)",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: 350,
    },
  },
  description: {
    marginTop: theme.spacing(2),
  },
  rating: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
}));

export default ReviewCard;
