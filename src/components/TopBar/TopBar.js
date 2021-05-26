import { useState } from "react";
import { useHistory } from "react-router-dom";
import Fade from "@material-ui/core/Fade";
import Menu from "@material-ui/core/Menu";
import Modal from "@material-ui/core/Modal";
import ShareIcon from "@material-ui/icons/Share";
import Backdrop from "@material-ui/core/Backdrop";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { makeStyles, Toolbar, Typography, Divider } from "@material-ui/core";
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
  toolBar: {
    display: "flex",
    background: "#160050",
  },
  title: {
    marginLeft: theme.spacing(2),
    flexGrow: 1,
    color: "white",
  },
  modal: {
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 400,
  },
  icons: {
    margin: "6%",
    textAlign: "center",
  },
}));

function TopBar({ title, share, more, moreOptions, ...rest }) {
  const classes = useStyles();
  const history = useHistory();

  const [modal, setModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Toolbar position="sticky" className={classes.toolBar}>
        <ArrowBackIcon style={{ color: "f4f4f4" }} onClick={() => history.goBack()} />
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        {share && <ShareIcon style={{ color: "f4f4f4" }} onClick={handleOpenModal} />}
        <Modal
          aria-labelledby="transition-modal-title"
          className={classes.modal}
          open={modal}
          onClose={handleCloseModal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={modal}>
            <div className={classes.paper}>
              <Typography style={{ textAlign: "center" }}>Share with</Typography>
              <Divider />
              <br />
              <div style={{ textAlign: "center" }}>
                <FacebookShareButton url="https://github.com/" className={classes.icons}>
                  <FacebookIcon size={52} round />
                </FacebookShareButton>
                <WhatsappShareButton url="https://github.com/" className={classes.icons}>
                  <WhatsappIcon size={52} round />
                </WhatsappShareButton>
                <TwitterShareButton url="https://github.com/" className={classes.icons}>
                  <TwitterIcon size={52} round />
                </TwitterShareButton>
              </div>
              <div style={{ textAlign: "center" }}>
                <LinkedinShareButton url="https://github.com/" className={classes.icons}>
                  <LinkedinIcon size={52} round />
                </LinkedinShareButton>
                <TelegramShareButton url="https://github.com/" className={classes.icons}>
                  <TelegramIcon size={52} round />
                </TelegramShareButton>
                <EmailShareButton url="https://github.com/" className={classes.icons}>
                  <EmailIcon size={52} round />
                </EmailShareButton>
              </div>
            </div>
          </Fade>
        </Modal>

        {more && <MoreVertIcon onClick={handleOpenPopover} style={{ color: "f4f4f4" }} />}
        <div>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClosePopover}
          >
            {moreOptions &&
              moreOptions.map((item, i) => (
                <MenuItem key={i} onClick={handleClosePopover}>
                  {item.name}
                </MenuItem>
              ))}
          </Menu>
        </div>
      </Toolbar>
    </>
  );
}

export default TopBar;
