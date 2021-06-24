import React from "react";
import { makeStyles, AppBar, Tabs, Tab, Box, Hidden } from "@material-ui/core";
import NotesSection from "./NotesSection";
import CourseLessonList from "./CourseLessonList";

function TabComponents() {
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
          <Tab label="More" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}></TabPanel>
      <Hidden xlUp>
        <TabPanel value={value} index={1}>
          <CourseLessonList />
        </TabPanel>
      </Hidden>
      <TabPanel value={value} index={2}>
        <NotesSection />
      </TabPanel>
      <TabPanel value={value} index={3}></TabPanel>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  courseContentTab: {
    [theme.breakpoints.up("xl")]: {
      display: "none",
    },
  },
}));

export default TabComponents;
