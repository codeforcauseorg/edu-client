import { useState } from "react";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Fab from "@material-ui/core/Fab";
import ScrollTop from "../../components/backTop/index";

import { Player, ControlBar } from "video-react";

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
  tabBackground: {
    width: "100%",
    height: "100%",
    background: "#F5F5F5",
  },

  menuItems: {
    padding: "2%",
    fontFamily: "Montserrat",
  },

  backtotop: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
  },
}));

export default function CoursePageViewWithVideo(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
      title: "Resources",
      onPress: () => console.log("Resources"),
    },
    {
      id: 4,
      title: "Links",
      onPress: () => console.log("Links"),
    },
    {
      id: 5,
      title: "About Course",
      onPress: () => console.log("About Course"),
    },
    {
      id: 6,
      title: "Share with friends",
      onPress: () => console.log("Share with friends"),
    },
  ];

  return (
    <>
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
                <ListItem key={index}>
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
                          <span style={{ color: "#4C0098" }}>Available in 2 days</span>{" "}
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
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.tabBackground}>
          <Box>
            {menuOptions.map((items) => (
              <ListItem button key={items.id} onClick={items.onPress}>
                <ListItemText secondary={items.title} className={classes.menuItems} />
                <ChevronRightIcon />
              </ListItem>
            ))}
          </Box>
        </TabPanel>
        <div className={classes.backtotop}>
          <ScrollTop {...props}>
            <Fab color="secondary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </div>
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
