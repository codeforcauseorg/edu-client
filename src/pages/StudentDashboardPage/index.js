import {
  AppBar,
  Container,
  Fade,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import DashboardHeader from "./DashboardComponents/DashboardHeader";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ProgressCourse from "./DashboardComponents/ProgressCourse";
import CourseAssignments from "./DashboardComponents/CourseAssignments";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  title: {
    flexGrow: 1,
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    background: "#50407C",
  },
}));
function StudentDashboard() {
  const history = useHistory();
  const classes = useStyles();
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };
  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <AppBar position="sticky" className={classes.appBar}>
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
            Dashboard
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit">
            <MoreVertIcon onClick={handleClick} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DashboardHeader />
      <ProgressCourse />
      <CourseAssignments />
      <Menu
        id="fade-menu"
        anchorEl={anchor}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => history.push("/job-openings")}>
          <Typography>Jobs Openings</Typography>
        </MenuItem>
      </Menu>
    </Container>
  );
}

export default StudentDashboard;
