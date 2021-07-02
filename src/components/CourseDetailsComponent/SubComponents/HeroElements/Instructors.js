import React from "react";
import {
  Box,
  Avatar,
  Typography,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";

function Instructors(props) {
  const { mentors } = props;

  return (
    <Box mt={4}>
      <Grid container item xs={12} spacing={2}>
        {mentors.map((items, index) => (
          <Box key={index}>
            <ListItem>
              <ListItemAvatar>
                <Avatar src={items.mentorPicture} alt={items.mentorName} />
              </ListItemAvatar>
              <ListItemText>
                <Typography>{items.mentorName}</Typography>
                <Typography>Instructor</Typography>
              </ListItemText>
            </ListItem>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default Instructors;
