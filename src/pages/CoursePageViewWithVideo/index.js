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
import { Link, useHistory } from "react-router-dom";
import CourseCard from "../../components/courseCard/courseCard1";
import ScrollTop from "../../components/backTop/index";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
<<<<<<< HEAD
=======
import MoreVertIcon from "@material-ui/icons/MoreVert";
>>>>>>> Header style changes

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
  const history = useHistory();

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense">
<<<<<<< HEAD
          <IconButton
            edge="start"
            className={classes.backButton}
            color="inherit"
            onClick={() => history.goBack()}
          >
            <ArrowBackIcon />
=======
<<<<<<< HEAD
          <IconButton edge="start" className={classes.backButton} color="inherit">
=======
          <IconButton edge="start" className={classes.backButton} color="inherit" aria-label="menu">
>>>>>>> Header style changes
            <ArrowBackIcon onClick={() => history.goBack()} />
>>>>>>> e860b69... Header style changes
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
            Your Courses
          </Typography>
<<<<<<< HEAD
=======
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <MoreVertIcon />
          </IconButton>
>>>>>>> Header style changes
        </Toolbar>
      </AppBar>
      <Container className={classes.root}>
        <ScrollTop />
<<<<<<< HEAD
=======
        {/* <Typography variant="h2" align="center">
        Your Courses
      </Typography> */}
>>>>>>> Header style changes
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
