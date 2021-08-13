import React from "react";
import {
  Box,
  Avatar,
  Typography,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router";

function Instructors({ mentors }) {
  const history = useHistory();

  const classes = useStyles();

  return (
    <Box mt={4}>
      <Grid container item xs={12} spacing={2}>
        {mentors.map((items, index) => (
          <Box
            key={index}
            onClick={() => history.push(`/mentor/${items._id}`)}
            className={classes.root}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar src={items.mentorPhoto} alt={items.name} />
              </ListItemAvatar>
              <ListItemText>
                <Typography>{items.name}</Typography>
                <Typography>Instructor</Typography>
              </ListItemText>
            </ListItem>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer",
  },
}));

export default Instructors;
