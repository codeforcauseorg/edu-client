import React from "react";
import { makeStyles, AppBar, Tabs, Tab, Box, Hidden } from "@material-ui/core";
import NotesSection from "./NotesSection";
import CourseLessonList from "./CourseLessonList";
import Announcements from "./Announcements";
import Overview from "./Overview";
import QuestionAndAnswer from "./QuestionAndAnswer";

function TabComponents({ courseInfo }) {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} {...other}>
        {value === index && <Box>{children}</Box>}
      </div>
    );
  }

  return (
    <Box>
      <AppBar position="static" className={classes.appBar}>
        <Tabs value={value} onChange={handleChange} variant="scrollable">
          <Tab label="Overview" />
          <Tab label="Course Content" className={classes.courseContentTab} />
          <Tab label="Notes" />
          <Tab label="Q&A" />
          <Tab label="Announcements" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Overview courseInfo={courseInfo} />
      </TabPanel>
      <Hidden xlUp>
        <TabPanel value={value} index={1}>
          <CourseLessonList courseInfo={courseInfo} />
        </TabPanel>
      </Hidden>
      <TabPanel value={value} index={2}>
        <NotesSection />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <QuestionAndAnswer courseInfo={courseInfo} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Announcements courseInfo={courseInfo} />
      </TabPanel>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  courseContentTab: {
    [theme.breakpoints.up("xl")]: {
      display: "none",
    },
  },
  appBar: {
    backgroundColor: "#fff",
    color: theme.palette.text.primary,
    borderBottom: "1px solid #333",
  },
}));

export default TabComponents;
