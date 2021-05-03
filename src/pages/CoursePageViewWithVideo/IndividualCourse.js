import React, { useState } from "react";
import Sheet from "react-modal-sheet";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Typography,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import TextField from "@material-ui/core/TextField";
import Tab from "@material-ui/core/Tab";
import { useHistory } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import { Player, ControlBar } from "video-react";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  tabroot: {
    textTransform: "capitalize",
    "& .MuiTab-root": {
      textTransform: "capitalize",
      flex: "auto",
    },
    "& .MuiTab-textColorSecondary": {
      color: "#a60000",
    },
  },
  centred: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "100px",
  },
  button: {
    margin: theme.spacing(3),
    padding: 10,
  },
  paper: {
    boxShadow: "2px 1px 4px 1px lightgray",
    padding: theme.spacing(1),
    borderRadius: "10px",
    margin: "5px",
    display: "flex",
    flexDirection: "column",
  },
  tabBackground: {
    width: "100%",
    height: "100%",
    background: "#F5F5F5",
  },
  addnote: {
    display: "flex",
    float: "right",
    margin: "20px",
  },
  menuItems: {
    padding: "2%",
    fontFamily: "Montserrat",
  },
  selectedVideo: {
    color: "white",
    backgroundColor: "rgb(21,0,81)",
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

export default function CoursePageViewWithVideo(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [isopen, setisOpen] = React.useState(false);

  const history = useHistory();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
    playingIndex: -1,
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
    setisOpen(false);
  };
  const [subMenu, setSubMenu] = React.useState(false);
  const handleOpenSubMenu = () => {
    setSubMenu(!subMenu);
  };
  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const playVideo = (index) => {
    setState({ ...state, playingIndex: index });
  };

  const [clicked, setClicked] = useState("");
  const handleLike = () => {
    const clickedIcon = clicked ? "" : <FavoriteBorderIcon />;
    setClicked(clickedIcon);
  };

  const menuOptions = [
    {
      id: 1,
      title: "Anouncements",
      onPress: () => console.log("Anouncements"),
    },
    {
      id: 2,
      title: "Doubt resolutions",
      onPress: () => console.log("Doubt resolutions"),
    },
    {
      id: 3,
      title: "Links & Resources",
      onPress: () => history.push("/resources/:coursename"),
    },
    {
      id: 4,
      title: "About Course",
      onPress: () => console.log("About Course"),
      collapse: true,
    },
    {
      id: 5,
      title: "About Mentor",
      onPress: () => {
        history.push("/mentorPage");
      },
    },
    {
      id: 6,
      title: "Rate the Mentor",
      onPress: () => {
        history.push("/ratementor/:coursename");
      },
    },
    {
      id: 7,
      title: "Share with friends",
      onPress: () => console.log("Share with friends"),
    },
  ];

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
            Course Name
          </Typography>
          <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleLike}
          >
            {clicked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <div id="back-to-top-anchor"></div>
      <div>
        <Player
          className={classes.centered}
          src="https://firebasestorage.googleapis.com/v0/b/codeforcauseorg.appspot.com/o/course%2Fzoom_0.mp4?alt=media&token=01f3ed1e-8d39-4fde-b945-f3bfe677b6df"
        >
          <ControlBar autoHide={true} className="my-class" />
        </Player>
        <Box mt={2} ml={2}>
          <Typography variant="h3">Full Stack Development Course by Code For Cause</Typography>
          <Typography variant="body1">
            <i>
              Duration <span style={{ color: "#4C0098" }}>1hr 45min</span>
            </i>
          </Typography>
        </Box>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          centered
          classes={{
            root: classes.tabroot,
          }}
        >
          <Tab label="35 Classes, 75 Resources" />
          <Tab label="More Options" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <List style={{ margin: 0, padding: 0 }}>
            {[1, 2, 3, 4, 5].map((item, index) => {
              return (
                <ListItem
                  key={index}
                  className={index === state.playingIndex ? classes.selectedVideo : null}
                  onClick={() => playVideo(index)}
                  style={{ cursor: "pointer" }}
                >
                  <ListItemText
                    primary={
                      <Typography variant="body2" style={{ marginBottom: "4px" }}>{`Chapter ${
                        index + 1
                      }: How to start With WD`}</Typography>
                    }
                    secondary={
                      <Typography variant="caption">
                        <i>
                          50 Minutes by Anuj Garg{" "}
                          <span
                            style={{
                              color: `${index === state.playingIndex ? "white" : "#4C0098"}`,
                              fontWeight: "700",
                            }}
                          >
                            Available in 2 days
                          </span>{" "}
                        </i>
                      </Typography>
                    }
                  />

                  <ListItemSecondaryAction>
                    <IconButton>{/* <IonIcon src={playCircleOutline} /> */}</IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            key={vertical + horizontal}
          >
            <Alert onClose={handleClose} severity="success">
              Note Added!
            </Alert>
          </Snackbar>
          <div className={classes.addnote}>
            <Fab color="primary" aria-label="add" type="button" onClick={() => setisOpen(true)}>
              <EditIcon />
            </Fab>
            <Sheet isOpen={isopen} onClose={() => setisOpen(false)}>
              <Sheet.Container>
                <Sheet.Header />
                <Sheet.Content>
                  {" "}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div>
                      <TextField
                        id="filled-search"
                        variant="filled"
                        label="Add a Note"
                        multiline
                        style={{ width: "90vw" }}
                        rows={35}
                      />
                    </div>
                    <div>
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                        onClick={handleClick({ vertical: "top", horizontal: "center" })}
                      >
                        Save
                      </Button>
                      <Button
                        variant="contained"
                        color="default"
                        size="small"
                        className={classes.button}
                        onClick={() => setisOpen(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </Sheet.Content>
              </Sheet.Container>

              <Sheet.Backdrop />
            </Sheet>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.tabBackground}>
          <Box>
            {menuOptions.map((items) => (
              <Box key={items.id}>
                <ListItem button onClick={items.collapse ? handleOpenSubMenu : items.onPress}>
                  <ListItemText secondary={items.title} className={classes.menuItems} />
                  {subMenu && items.collapse ? (
                    <KeyboardArrowDownIcon />
                  ) : (
                    <KeyboardArrowRightIcon />
                  )}
                </ListItem>
                {subMenu && items.collapse && (
                  <ListItem>
                    <ListItemText className={classes.menuItems} />
                    <Typography>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, nesciunt
                      necessitatibus? Laboriosam, eum aut explicabo dolores reprehenderit corporis
                      porro provident deleniti nesciunt nostrum? Lorem ipsum dolor, sit amet
                      consectetur adipisicing elit. Aliquam, nesciunt necessitatibus? Laboriosam,
                      eum aut explicabo dolores reprehenderit corporis porro provident deleniti
                      nesciunt nostrum
                    </Typography>
                  </ListItem>
                )}
              </Box>
            ))}
          </Box>
        </TabPanel>
      </div>
    </>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}
