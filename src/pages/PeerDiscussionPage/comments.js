import { makeStyles, IconButton, Toolbar, Typography, Box, AppBar } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import React from "react";
import { deepPurple } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(3),
  },
  appBar: {
    background: "#160050",
  },
  head: {
    flexGrow: 1,
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  Buttons: {
    padding: "15px",
  },
  BoxSpaces: {
    padding: "15px",
  },
  info: {
    paddingLeft: "5px",
  },
}));
const Data = [
  {
    id: 1,
    name: "John",
    cmt: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual document",
    date: "15:20 12 Apr",
  },
  {
    id: 2,
    name: "Sam",
    cmt: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual document",
    date: "15:20 12 Apr",
  },
  {
    id: 3,
    name: "Anny",
    cmt: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual document",
    date: "15:20 12 Apr",
  },
  {
    id: 4,
    name: "Lnny",
    cmt: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual document",
    date: "15:20 12 Apr",
  },
  {
    id: 5,
    name: "Mnny",
    cmt: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual document",
    date: "15:20 12 Apr",
  },
  {
    id: 5,
    name: "Cnny",
    cmt: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual document",
    date: "15:20 12 Apr",
  },
];
function Comment() {
  const classes = useStyles();
  const history = useHistory();
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
          <Typography variant="h6" color="inherit" className={classes.head}>
            Comments
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit">
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {Data.map((data) => (
        <div key={data.id}>
          <div className={classes.margin}>
            <Grid container spacing={1}>
              <Grid>
                <Avatar className={classes.purple}>{data.name.slice(0, 1)}</Avatar>
              </Grid>
              <Box margin={1} fontStyle="italic">
                <div>
                  <div>
                    <Typography variant="body2" className={classes.info}>
                      {data.name}
                    </Typography>
                    <Typography variant="body1" className={classes.info}>
                      {data.date}
                    </Typography>
                  </div>
                </div>
              </Box>
              <Box className={classes.BoxSpaces}>
                <Typography variant="body1">{data.cmt}</Typography>
              </Box>
            </Grid>
          </div>
          <Divider />
        </div>
      ))}
    </>
  );
}

export default Comment;
