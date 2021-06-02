import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

function ReviewCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5">“Greate Mentor. Absolutely brilliant.”</Typography>
        <Box mt={4}>
          <Typography>
            have learn a lot in the bootcamp , the mentors were extremely helpful and dedicated , it
            was the great learning. each and every concept so clearly and you can ask as many doubts
            as you have.
          </Typography>
        </Box>
        <CardActionArea className={classes.cardFooter}>
          <ListItem>
            <ListItemAvatar>
              <Avatar src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
            </ListItemAvatar>
            <ListItemText primary="Adarsg Kumar Singh" secondary="Student" />
          </ListItem>
        </CardActionArea>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    marginRight: "25px",
    borderRadius: "5px",
    flex: "0 0 auto",
    boxShadow: "0px 4px 20px rgba(55, 64, 161, 0.25)",
    "&:hover": {
      transition: "all 0.2s ease-out",
      boxShadow: "0px 4px 8px rgba(55, 64, 161, 0.2)",
    },
  },
}));

export default ReviewCard;
