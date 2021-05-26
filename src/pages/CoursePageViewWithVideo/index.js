import {
  makeStyles,
  List,
  ListItem,
  Typography,
  AppBar,
  IconButton,
  Toolbar,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import CourseCard from "../../components/courseCard/courseCard1";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  root: { borderRadius: "10px", color: "#000" },
  link: {
    textDecoration: "none",
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    background: "#160050",
  },
}));

export default function MyCourses(props) {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.backButton}
            color="inherit"
            onClick={() => history.goBack()}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
            Your Courses
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.root}>
        <List>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
            return (
              <ListItem key={index} className={classes.li}>
                <Link to="/mycourses/:coursename" className={classes.link}>
                  <CourseCard />
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Container>
    </>
  );
}
