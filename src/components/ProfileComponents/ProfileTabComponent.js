import React from "react";
import { makeStyles, Typography, Tab, Tabs, Box, AppBar } from "@material-ui/core";
import Activity from "../../components/ProfileComponents/Activity";
import Achevement from "../../components/ProfileComponents/Achevement";

function ProfileTabComponent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const tabElements = [
    {
      title: "Activity",
      component: Activity,
    },
    {
      title: "Achevement",
      component: Achevement,
    },
  ];

  return (
    <Box className={classes.root}>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto">
          {tabElements.map((items, index) => (
            <Tab key={index} label={items.title} />
          ))}
        </Tabs>
      </AppBar>
      {tabElements.map((items, index) => (
        <TabPanel key={index} value={value} index={index}>
          <items.component />
        </TabPanel>
      ))}
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  appBar: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.spacing(0.4),
    color: "#fff",
  },
}));

export default ProfileTabComponent;
