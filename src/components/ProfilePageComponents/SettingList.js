import {
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiSwitch-root": {
      overflow: "visible",
    },
    "& .MuiListItemIcon-root": {
      margin: "0px 10px 0px 10px",
    },
  },
  primary: {
    marginBottom: theme.spacing(0.5),
  },
}));

function SettingList({ listItemIcon, primary, secondary, onPress }) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <ListItem button onClick={onPress}>
        <ListItemIcon>
          <img src={listItemIcon} />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="h5" className={classes.primary}>
            {primary}
          </Typography>
          <Typography variant="body1">{secondary}</Typography>
        </ListItemText>
        <KeyboardArrowRightIcon />
      </ListItem>
    </Box>
  );
}

export default SettingList;
