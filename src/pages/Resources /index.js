import React from "react";
import {
  IconButton,
  Toolbar,
  makeStyles,
  Typography,
  AppBar,
  Card,
  CardActionArea,
  Button,
  Box,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import GetAppIcon from "@material-ui/icons/GetApp";
import CallMadeIcon from "@material-ui/icons/CallMade";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import copy from "copy-to-clipboard";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";

const useStyle = makeStyles((theme) => ({
  card: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 20,
  },
  media: {
    height: 180,
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    background: "#160050",
  },

  Icon: {
    height: 30,
    width: 30,
  },
}));

const RESOURCES = [
  {
    link: "https://github.com/codeforcauseorg",
    name: "Backtracking",
  },
  {
    name: "Chapter 5.pdf",
    preview:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80g",
  },
  {
    link: "https://github.com/codeforcauseorg",
    preview: "https://images.hdqwalls.com/download/landscape-lake-mountains-4k-zg-2560x1080.jpg",
    name: "Kruskal's Algorithm",
  },
  {
    link: "https://github.com/codeforcauseorg",
    name: "Backtracking",
  },
  {
    name: "Chapter 2.docx",
    preview:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

const Resources = () => {
  const classes = useStyle();
  const [copyText, setCopyText] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const copyToClipboard = (link) => {
    setCopyText(`${link}`);
    copy(copyText);
    setOpen(true);
  };

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
          <Typography variant="h6" color="inherit" className={classes.title}>
            Links & Resources 🔗
          </Typography>
        </Toolbar>
      </AppBar>
      <Box>
        {RESOURCES.map((item) => (
          <Card className={classes.card} key={item.name}>
            <CardActionArea>
              {item.preview && (
                <CardMedia className={classes.media} image={item.preview} title={item.name} />
              )}
              <CardContent>
                <Box
                  display="flex"
                  width="100%"
                  justifyContent="space-between"
                  alignItems={"center"}
                >
                  <Box>
                    <Typography variant="h6" color="inherit" className={classes.title}>
                      {item.name} &nbsp; {item.link ? " 🔗 " : "📑"}
                    </Typography>
                    {item.link && (
                      <Typography variant="caption">
                        {item.link} &nbsp;{" "}
                        <FileCopyIcon
                          onClick={() => {
                            copyToClipboard(`${item.link}`);
                          }}
                          button
                          style={{ fontSize: "15px" }}
                        />{" "}
                      </Typography>
                    )}
                  </Box>
                  <Box>
                    <Button>
                      {!item.link ? (
                        <GetAppIcon />
                      ) : (
                        <a href={item.link} target="_blank" rel="noreferrer">
                          <CallMadeIcon />
                        </a>
                      )}
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message=" Copied to Clipboard!"
          action={
            <>
              <Button color="secondary" size="small" onClick={handleClose}>
                Close
              </Button>
              <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          }
        />
      </Box>
    </>
  );
};

export default Resources;
