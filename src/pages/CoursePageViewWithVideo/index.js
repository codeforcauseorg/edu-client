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
import React from "react";
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
}));

export default function CoursePageViewWithVideo() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Player
        className={classes.centered}
        src="https://firebasestorage.googleapis.com/v0/b/codeforcauseorg.appspot.com/o/course%2Fzoom_0.mp4?alt=media&token=01f3ed1e-8d39-4fde-b945-f3bfe677b6df"
      >
        <ControlBar autoHide={true} className="my-class" />
      </Player>
      <Box mt={2} ml={2}>
        <Typography variant="h3">Full Stack Development Course by Code For Cause</Typography>
        <Typography variant="caption">
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
          {[0, 1, 2].map((item, index) => {
            return (
              <ListItem key={index}>
                <ListItemText
                  primary={
                    <Typography variant="h3" style={{ marginBottom: "4px" }}>{`Chapter ${
                      index + 1
                    }: How to start With WD`}</Typography>
                  }
                  secondary={
                    <Typography>
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
    </div>
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
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
