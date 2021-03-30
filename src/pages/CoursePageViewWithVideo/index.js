import { Container, makeStyles, List, ListItem, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import CourseCard from "../../components/courseCard/courseCard1";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    color: "#000",
    padding: theme.spacing(5, 0),
  },
  link: {
    textDecoration: "none",
  },
}));

export default function MyCourses(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h2" align="center">
          Your Classes
        </Typography>
        <List>
          {[1, 2].map((item, index) => {
            return (
              <ListItem key={index} className={classes.li}>
                <Link to="/mycourses/each" className={classes.link}>
                  <CourseCard />
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Container>
    </div>
  );
}
