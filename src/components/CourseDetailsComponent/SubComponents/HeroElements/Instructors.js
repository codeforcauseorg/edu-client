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

const instructorList = [
  {
    name: "Anuj Garg",
    image: "assets/members/anuj.png",
  },
  {
    name: "Ganga Chaturvedi",
    image: "assets/members/ganga.png",
  },
];

function Instructors() {
  return (
    <Box mt={4}>
      <Grid container item xs={12} spacing={2}>
        {instructorList.map((items, index) => (
          <Box key={index}>
            <ListItem>
              <ListItemAvatar>
                <Avatar src={items.image} />
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

export default Instructors;
