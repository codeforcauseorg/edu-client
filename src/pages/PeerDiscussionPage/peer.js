import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  makeStyles,
  Box,
  Typography,
} from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import PostCard from "./PostCard";
import ScrollToTop from "../../utils/ScrollToTop";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Modal from "@material-ui/core/Modal";
import PostAddIcon from "@material-ui/icons/PostAdd";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "rgb(21, 0, 81)",
    fontSize: "0.85rem",
    transition: "0.3s",
    marginTop: "15px",
    marginBottom: "10px",
    "&:hover": {
      backgroundColor: "rgb(138, 128, 168)",
    },
  },
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  head: {
    flexGrow: 1,
  },
  post: {
    boxShadow: "1px 1px 3px 1px lightgray",
    borderRadius: "7px",
    margin: theme.spacing(2),
    padding: "15px",
  },
  postContent: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    margin: theme.spacing(0.5),
  },
  paper: {
    marginTop: "70px",
    width: 330,
    backgroundColor: theme.palette.background.paper,
    borderRadius: "7px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  upload: {
    boxShadow: "1px 1px 3px 1px lightgray",
    borderRadius: "10px",
    border: "4px dashed gray",
    margin: theme.spacing(2),
    padding: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  appBar: {
    background: "#160050",
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
  aboutText: {
    color: "#555",
  },
  socialWrapper: {
    paddingBottom: "10px",
    paddingLeft: "10px",
  },
  socialIcons: {
    color: "#0D0F44",
    fontSize: "35px",
    paddingBottom: "10px",
    cursor: "pointer",
    "&:hover": {
      color: "#e59819",
    },
  },
  body: {
    margin: "15px",
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  profiletitle: {
    padding: theme.spacing(2),
    fontSize: "20px",
    fontWeight: 400,
    color: "#0D0F44",
  },
  margin: {
    margin: theme.spacing(2),
  },
  BoxSpaces: {
    padding: "15px",
  },
}));

function PeerPage(props) {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [open, setOpen] = React.useState(false);
  const [file, setFile] = useState(null);

  const handlemodalOpen = () => {
    setOpen(true);
  };
  function handleSelect(event) {
    setFile(event.target.files[0]);
  }

  const handlemodalClose = () => {
    setOpen(false);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Discussion = [
    {
      id: 1,
      person: "John Doe",
      text:
        "Lorem ipsum dolor sit amet, consecteturunt ut labore et dolore magna aliqua. consecteturunt ut labore et dolore magna aliqua.consecteturunt ",
      date: "5 May",
    },
    {
      id: 2,
      person: "Harry potter",
      text:
        "Lorem e et dolore magna aliqua.ut labore et dolore magna aliqua.consecteturunt ut labore et dolore magna aliqua.",
      date: "14 Apr",
      media: "/assets/img/learning.jpg",
    },
    {
      id: 3,
      person: "Kim",
      text: "Lorem ipsum dolor sit amet, consectetur et dolore magna aliqua.",
      date: "3 Jan",
      material: "Graphs.pdf",
    },
    {
      id: 4,
      person: "lane xyz",
      text: "Lorem ipsum dolor sit amet, consectetur et dolore magna aliqua.",
      date: "3 Jan",
      media: "/assets/img/learning.jpg",
    },
    {
      id: 5,
      person: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur et dolore magna aliqua.",
      date: "3 Jan",
      material: "lorem.docx",
    },
    {
      id: 6,
      person: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur et dolore magna aliqua.",
      date: "3 Jan",
    },
  ];
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
            Discussion Forum
          </Typography>
          <div>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Filter by Hastags</MenuItem>
              <MenuItem onClick={handleClose}>Sort By Time</MenuItem>
              <MenuItem onClick={handleClose}>Sort By Name</MenuItem>
            </Menu>
          </div>
          <IconButton
            onClick={handleClick}
            edge="end"
            className={classes.menuButton}
            color="inherit"
          >
            <FilterListIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container>
        <div id="back-to-top-anchor"></div>
        <ScrollToTop />
        <Modal
          open={open}
          onClose={handlemodalClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <Container maxWidth="xs" className={classes.paper}>
            <Typography align="center" id="simple-modal-title" variant="body2">
              Post Something!
            </Typography>
            <div id="simple-modal-description">
              <form style={{ width: "100%" }}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="topic"
                  label="Topic"
                  name="topic"
                  type="text"
                  autoComplete="item"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  name="text"
                  label="Write here.."
                  type="text"
                  multiline
                  rows={8}
                  id="margin-normal"
                  autoComplete="number"
                />

                <label className={classes.upload}>
                  {file && (
                    <Typography variant="body2" style={{ padding: 5 }}>
                      {file.name}
                    </Typography>
                  )}
                  {!file && (
                    <>
                      <div className={classes.flex}>
                        <svg
                          height="auto"
                          width="20%"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>

                        <Typography variant="body2">Upload a File</Typography>
                      </div>
                      <TextField
                        style={{ visibility: "hidden" }}
                        type="file"
                        name="file"
                        onChange={handleSelect}
                      />
                    </>
                  )}
                </label>

                <Button type="submit" fullWidth variant="contained" color="secondary">
                  Post
                </Button>
              </form>
            </div>
          </Container>
        </Modal>

        <div className={classes.post} onClick={handlemodalOpen}>
          <div className={classes.postContent}>
            <PostAddIcon />
            <Typography variant="body2" style={{ marginLeft: 10 }}>
              Share something to discuss...
            </Typography>
          </div>
        </div>
        <div>
          <Box className={classes.BoxSpaces}>
            {Discussion.map((data, index) => {
              return <PostCard data={data} key={index} />;
            })}
          </Box>
        </div>
      </Container>
    </>
  );
}

export default PeerPage;
