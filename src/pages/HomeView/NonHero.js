import { Container, makeStyles, List, ListItem, Typography } from "@material-ui/core";
import React from "react";
import CourseCard from "../../components/courseCard/courseCard1";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "-80px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    color: "#000",
    padding: theme.spacing(5, 0),
  },
  list: {
    display: "flex",
    overflowX: "scroll",
    "&::-webkit-scrollbar": {
      backgroundColor: "#F5F5F5",
      height: "8px",
    },
    "&::-webkit-scrollbar-track": {
      "&::-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.3)",
      backgroundColor: "#a2a6ab",
      borderRadius: "12px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#332928",
      borderRadius: "12px",
      margin: "16px",
    },
  },
}));

export default function NonHero(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h3">Continue Learning</Typography>
        <List className={classes.list}>
          {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
            return (
              <ListItem key={index} className={classes.li}>
                <CourseCard />
              </ListItem>
            );
          })}
        </List>
      </Container>
    </div>
  );
}
