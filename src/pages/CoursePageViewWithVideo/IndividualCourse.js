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

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import CreateIcon from '@material-ui/icons/Create';
import Fab from "@material-ui/core/Fab";
import ScrollTop from "../../components/backTop/index";
// import { IonIcon } from '@ionic/react';
// import { heartOutline, playCircleOutline } from 'ionicons/icons'

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
  backtotop: {
    display: "flex",
    justifyContent: "center",
    marginTop: "160px",
  },
  inputBox: {
    marginTop: "1rem",
    padding: ".25rem .55rem",
    display: "flex",
    border: "2px solid darkgray",
    borderRadius: "20px",
  },
  icon: {
    color: "#AD0517",
  },
  input: {
    paddingLeft: ".5rem",
    width: "100%",
    border: "none",
    outline: "none",
  },
  buttonsave:{
    "borderTopLeftRadius": 12.5,
  "borderTopRightRadius": 12.5,
  "borderBottomRightRadius": 12.5,
  "borderBottomLeftRadius": 12.5,
  "display": "inline-block",
  "paddingTop":10,
  "paddingRight": 10,
  "paddingBottom": 10,
  "paddingLeft": 10, 
    backgroundImage: "linear-gradient(to right,#5f0403,#b80505,#d80805)", 
  }, 
}));

export default function CoursePageViewWithVideo(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        
        
        {/* <div className= "notes">
        
 
        <Typography variant="h3" padding-top="10px"><br/>Take Notes</Typography> */}

        <Typography variant="h3" >
          <span style={{ color: "#b30000" }}><br/>Take Notes</span>{" "}
        </Typography> 
        <div className={classes.inputBox}>
        
        < CreateIcon className={classes.icon} />
        <textarea
          className={classes.input}
          type="text"
          placeholder="Add a note"
        ></textarea>
        <button className={classes.buttonsave}
        >Save</button>
      </div>
          

    
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
        <TabPanel value={value} index={1}>
          Item Two
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
