import { Container, makeStyles, List, ListItem, Typography } from "@material-ui/core";
import CourseCard from "../../components/courseCard/courseCard1";
import Recommended from "./Courses";
import Search from "../../components/Search/Search";

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
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
}));

const data = ["Web", "coding", "Programming", "Android", "Kotlin", "C/C++", "Python"];

export default function NonHero(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h3">Continue Learning</Typography>
        <List className={classes.list}>
          {[1].map((item, index) => {
            return (
              <ListItem key={index}>
                <CourseCard />
              </ListItem>
            );
          })}
        </List>
        <Search data={data} placeholder="Search courses, categories or mentors" />
        <Recommended />
      </Container>
    </div>
  );
}
