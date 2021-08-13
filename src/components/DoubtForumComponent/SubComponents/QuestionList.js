/* eslint-disable camelcase */
import { Box, makeStyles, Paper, Avatar, Typography, Chip, Hidden } from "@material-ui/core";
import React from "react";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { useHistory } from "react-router";
import moment from "moment";

function QuestionList({ questionListItem }) {
  const classes = useStyles();

  const history = useHistory();

  const { answers, question, tags, createdAt, is_resolved } = questionListItem;

  return (
    <Paper className={classes.paper} onClick={() => history.push(`/doubt-forum/${0}`)}>
      <Hidden mdDown>
        <Box className={classes.avatarContainer}>
          <Avatar
            className={classes.avatar}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
          />
        </Box>
      </Hidden>
      <Box className={classes.infoContainer}>
        <Box className={classes.innerContainer}>
          <Typography variant="h5" className={classes.title} gutterBottom>
            {question}
          </Typography>
          <Box className={classes.statusContainer}>
            <Typography variant="subtitle2" gutterBottom className={classes.moment}>
              {moment(createdAt).fromNow()}
            </Typography>
            {is_resolved === true ? (
              <Chip label="Resolved" size="small" className={classes.resolvedChip} />
            ) : (
              <Chip label="Active" size="small" className={classes.activeChip} />
            )}
          </Box>
          <Typography variant="body1" gutterBottom className={classes.questionDescription}>
            I have seen many react native devs using android/ios emulators with vs code. Can I also
            use the android/ios emulator with my react project (not react-native)? If Yes, then can
            someone pls advise me on ...
          </Typography>
          {tags.map((items, index) => (
            <Chip key={index} label={items} className={classes.chip} />
          ))}
        </Box>
        <Box className={classes.actionContainer}>
          <Box className={classes.flex}>
            <ChatBubbleOutlineIcon className={classes.icons} />
            <Typography>{answers.length} Answers</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: "5px",
    display: "flex",
    margin: theme.spacing(2),
    boxShadow: "0px 4px 20px rgba(55, 64, 161, 0.1)",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(0),
      marginBottom: theme.spacing(2),
    },
  },
  infoContainer: {
    padding: theme.spacing(2),
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  resolvedChip: {
    background: theme.palette.success.main,
    color: "#fff",
    borderRadius: "5px",
  },
  activeChip: {
    background: theme.palette.secondary.main,
    color: "#fff",
    borderRadius: "5px",
  },
  moment: {
    marginRight: theme.spacing(2),
  },
  statusContainer: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    height: 50,
    width: 50,
  },
  title: {
    fontWeight: 600,
  },
  chip: {
    borderRadius: "5px",
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
    background: "#E6F3FF",
    color: theme.palette.primary.main,
  },
  avatarContainer: {
    margin: theme.spacing(2),
  },
  questionDescription: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  flex: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
  actionContainer: {
    flex: 2,
    paddingTop: theme.spacing(4),
    marginLeft: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(0),
    },
  },
  innerContainer: {
    flex: 8,
  },
  icons: {
    marginRight: theme.spacing(2),
  },
}));

export default QuestionList;
