import React, { useState } from "react";
import {
  Box,
  Collapse,
  List,
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
  },
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  button: {
    textTransform: "none",
    borderRadius: 5,
    color: "#fff",
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  contestIcon: {
    height: 30,
    width: 30,
  },
  listItem: {
    paddingLeft: theme.spacing(1.5),
  },
  dateText: {
    paddingTop: theme.spacing(1),
  },
  description: {
    margin: theme.spacing(2),
  },
}));
function ContestsList({ date, contestTitle, ListTileColor }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      style={{ backgroundColor: ListTileColor }}
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <StarIcon
            style={{
              fontSize: "2.5rem",
              color: "gold",
            }}
          />
        </ListItemIcon>
        <ListItemText>
          <Box className={classes.listItem}>
            <Typography variant="h5">{contestTitle}</Typography>

            <Typography variant="body1" className={classes.date}>
              date : {date}
            </Typography>
          </Box>
        </ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box className={classes.flex}>
          <Typography className={classes.description}>
            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
            ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
          </Typography>
          <Box>
            <Button
              className={classes.button}
              variant="contained"
              style={{ background: "#160050" }}
            >
              Register
            </Button>
            <Button className={classes.button} variant="outlined" style={{ color: "#160050" }}>
              Know more
            </Button>
          </Box>
        </Box>
      </Collapse>
    </List>
  );
}

export default ContestsList;
