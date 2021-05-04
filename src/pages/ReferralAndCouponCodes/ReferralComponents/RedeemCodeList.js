import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: theme.spacing(3),
  },
  avatar: {
    borderRadius: 5,
  },
  listItem: {
    background: "#FFFFFF",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
  },
}));
function RedeemCodeList({ title, subtitle, image }) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <List>
        <ListItem button className={classes.listItem}>
          <ListItemAvatar>
            <Avatar className={classes.avatar} src={image} />
          </ListItemAvatar>
          <ListItemText>
            <Typography variant="h4">{title}</Typography>
            <Typography>{subtitle}</Typography>
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );
}

export default RedeemCodeList;
