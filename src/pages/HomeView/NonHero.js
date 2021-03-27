import { Container, makeStyles, List, ListItem, Typography } from "@material-ui/core";

import CourseCard from "../../components/courseCard/courseCard1";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "-80px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    color: "#000",
    padding: theme.spacing(5, 0),
  },
}));

export default function NonHero(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h3">Continue Learning</Typography>

        <List>
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
