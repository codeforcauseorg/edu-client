import React from "react";
import {
  makeStyles,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Avatar,
  Box,
  Button,
  Divider,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ShareIcon from "@material-ui/icons/Share";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
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

const useStyles = makeStyles((theme) => ({
  profiletitle: {
    padding: theme.spacing(2),
    "& .MuiTypography-root": {
      fontSize: "1.3rem",
      fontWeight: 400,
    },
  },
  avatar: {
    width: "70px",
    height: "70px",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: theme.spacing(4),
    marginTop: theme.spacing(3),
    color: "#000",
  },
  studentdetails: {
    marginLeft: "10px",
    padding: theme.spacing(1),
    "& .MuiTypography-h2": {
      fontSize: "15px",
      fontWeight: 400,
      marginBottom: theme.spacing(0.5),
    },
    "& .MuiTypography-h3": {
      fontSize: "12px",
      fontWeight: 400,
      marginBottom: theme.spacing(0.5),
    },
  },
  editbutton: {
    marginTop: "10px",
    background: "#fff",
    textTransform: "none",
    borderRadius: "30px",
    border: "2px solid black",
    padding: "0 16px 0 16px",
    fontSize: "0.8rem",
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    background: "#160050",
  },
  modal: {
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    width: 350,
    borderRadius: 15,
  },
  icons: {
    margin: "6%",
    textAlign: "center",
  },
}));

function HeaderComponent() {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.backButton} color="inherit" aria-label="menu">
            <ArrowBackIcon onClick={() => history.goBack()} />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
            Profile
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <ShareIcon onClick={handleOpen} />
            <Modal
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                  <Typography style={{ textAlign: "center" }}>Share with</Typography>
                  <Divider />
                  <br />
                  <div style={{ textAlign: "center" }}>
                    <TwitterShareButton url="https://github.com/" className={classes.icons}>
                      <TwitterIcon size={52} round />
                    </TwitterShareButton>
                    <WhatsappShareButton url="https://github.com/" className={classes.icons}>
                      <WhatsappIcon size={52} round />
                    </WhatsappShareButton>
                    <FacebookShareButton url="https://github.com/" className={classes.icons}>
                      <FacebookIcon size={52} round />
                    </FacebookShareButton>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <EmailShareButton url="https://github.com/" className={classes.icons}>
                      <EmailIcon size={52} round />
                    </EmailShareButton>
                    <TelegramShareButton url="https://github.com/" className={classes.icons}>
                      <TelegramIcon size={52} round />
                    </TelegramShareButton>
                    <LinkedinShareButton url="https://github.com/" className={classes.icons}>
                      <LinkedinIcon size={52} round />
                    </LinkedinShareButton>
                  </div>
                </div>
              </Fade>
            </Modal>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box className={classes.headerContainer}>
        <Avatar
          src="https://yt3.ggpht.com/ytc/AAUvwnhpLAOxx0GesrqkAMyNs3Fd3ZULf8yfNc8nTmMp=s900-c-k-c0x00ffffff-no-rj"
          className={classes.avatar}
        />
        <Box className={classes.studentdetails}>
          <Typography variant="h2">Code for Cause</Typography>
          <Typography variant="h3">team@codeforcause.org</Typography>
          <Button variant="outlined" className={classes.editbutton}>
            Edit Profile
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default HeaderComponent;
