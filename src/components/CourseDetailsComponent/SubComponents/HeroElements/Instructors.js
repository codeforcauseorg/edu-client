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
  // const { mentors } = props;

  return (
    <Box mt={4}>
      <Grid container item xs={12} spacing={2}>
        {[1, 2].map((items, index) => (
          <Box key={index}>
            <ListItem>
              <ListItemAvatar>
                <Avatar src="assets/members/anuj.png" alt="Anuj Garg" />
              </ListItemAvatar>
              <ListItemText>
                <Typography>Anuj Garg</Typography>
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
