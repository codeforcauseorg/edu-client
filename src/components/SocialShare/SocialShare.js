import { Box, Button, Divider, Drawer, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import AssignmentIcon from "@material-ui/icons/Assignment";
import {
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon,
  TelegramShareButton,
  TelegramIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import CopyToClipboard from "react-copy-to-clipboard";
import SnackBarComponent from "../SnackBar/SnackBar";
const useStyles = makeStyles((theme) => ({
  paper: {
    background: "#fff",
    textAlign: "center",
    padding: theme.spacing(1.5),
  },
  container: {
    padding: theme.spacing(1),
    margin: "4px, 4px",
    width: "100%",
    overflowX: "auto",
    overflowY: "hidden",
    whiteSpace: "nowrap",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  copyButton: {
    width: "100%",
    textTransform: "none",
    color: "#fff",
    padding: theme.spacing(1),
    marginTop: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  icons: {
    margin: theme.spacing(1),
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
  },
  assignmentIcon: {
    marginRight: theme.spacing(1),
  },
}));
function SocialShare({ open, message }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    opensnackbar: false,
    vertical: "top",
    horizontal: "center",
    playingIndex: -1,
  });

  const { vertical, horizontal, opensnackbar } = state;

  const handleClick = (newState) => () => {
    setState({ opensnackbar: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, opensnackbar: false });
  };

  return (
    <>
      <Drawer className={classes.drawer} anchor="bottom" open={open}>
        <Paper className={classes.paper}>
          <Box className={classes.title}>
            <Typography variant="h4">Share to</Typography>
          </Box>
          <Divider />
          <Box className={classes.container}>
            <TwitterShareButton url={message} className={classes.icons}>
              <TwitterIcon size={52} round />
            </TwitterShareButton>
            <WhatsappShareButton url={message} className={classes.icons}>
              <WhatsappIcon size={52} round />
            </WhatsappShareButton>
            <FacebookShareButton url={message} className={classes.icons}>
              <FacebookIcon size={52} round />
            </FacebookShareButton>
            <EmailShareButton url={message} className={classes.icons}>
              <EmailIcon size={52} round />
            </EmailShareButton>
            <TelegramShareButton url={message} className={classes.icons}>
              <TelegramIcon size={52} round />
            </TelegramShareButton>
            <LinkedinShareButton url={message} className={classes.icons}>
              <LinkedinIcon size={52} round />
            </LinkedinShareButton>
          </Box>
          <Divider />
          <Box>
            <CopyToClipboard text={message}>
              <Button
                className={classes.copyButton}
                style={{ background: "#3E4BAE" }}
                onClick={handleClick({ vertical: "top", horizontal: "center" })}
              >
                <Box className={classes.buttonContainer}>
                  <AssignmentIcon className={classes.assignmentIcon} />
                  <Typography>Copy to Clipboard</Typography>
                </Box>
              </Button>
            </CopyToClipboard>
          </Box>
        </Paper>
      </Drawer>
      <SnackBarComponent
        vertical={vertical}
        horizontal={horizontal}
        opensnack={opensnackbar}
        handleClose={handleClose}
        severity="success"
        message="Copied !"
        autoHideDuration={1500}
      />
    </>
  );
}

export default SocialShare;
