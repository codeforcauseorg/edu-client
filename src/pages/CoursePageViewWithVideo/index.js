import {
  makeStyles,
  List,
  ListItem,
  Typography,
  AppBar,
  Toolbar,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import CourseCard from "../../components/courseCard/courseCard1";
import ScrollTop from "../../components/backTop/index";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles((theme) => ({
  root: { borderRadius: "10px", color: "#000", padding: theme.spacing(3, 0) },
  link: {
    textDecoration: "none",
  },
  backtotop: {
    minWidth: "100%",
    display: "flex",
    justifyContent: "center",
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
          <Typography variant="h6" color="inherit" className={classes.title}>
            Your Courses
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.root}>
        <ScrollTop />
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
        <div className={classes.backtotop}>
          <ScrollTop {...props}>
            <Fab color="secondary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </div>
      </Container>
    </>
  );
}
