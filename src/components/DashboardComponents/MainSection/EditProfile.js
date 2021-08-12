import {
  Box,
  Button,
  CardMedia,
  IconButton,
  makeStyles,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { useDispatch } from "react-redux";
import { editUser } from "../../../services/userService";

function EditProfile({ open, onClose }) {
  const classes = useStyles();

  const [image, setImage] = useState(null);

  const [firstName, setFirstName] = React.useState(null);

  const [lastName, setLastName] = React.useState(null);

  const [number, setNumber] = React.useState(null);

  const [description, setDescription] = React.useState(null);

  const [address, setAddress] = React.useState(null);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    dispatch(editUser(firstName, lastName, number, description, address, image));
  };

  return (
    <Modal open={open} onClose={onClose} className={classes.modal}>
      <Paper className={classes.paper}>
        <CardMedia
          image={image === null ? "assets/img/profileBanner.svg" : URL.createObjectURL(image)}
          className={classes.cardMedia}
        >
          <Box className={classes.shadder} />
          <input
            accept="image/*"
            className={classes.input}
            id="icon-button-file"
            type="file"
            onChange={handleChange}
          />
          <label htmlFor="icon-button-file">
            <IconButton component="span" className={classes.iconButton}>
              <AddAPhotoIcon />
            </IconButton>
            <Typography className={classes.headerSize} component="span">
              1500 x 500
            </Typography>
          </label>
        </CardMedia>
        <Box className={classes.formContainer}>
          <form noValidate autoComplete="off">
            <TextField
              margin="normal"
              size="small"
              label="First Name"
              variant="outlined"
              className={classes.textFieldMargin}
              onChange={(event) => setFirstName(event.target.value)}
            />
            <TextField
              margin="normal"
              size="small"
              label="Last Name"
              variant="outlined"
              className={classes.textFieldMargin}
              onChange={(event) => setLastName(event.target.value)}
            />
            <TextField
              margin="normal"
              size="small"
              label="Phone Name"
              variant="outlined"
              type="number"
              onChange={(event) => setNumber(event.target.value)}
            />
            <TextField
              fullWidth
              size="small"
              margin="normal"
              label="Description"
              variant="outlined"
              multiline
              rows={4}
              onChange={(event) => setDescription(event.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              size="small"
              label="Address"
              variant="outlined"
              multiline
              rows={4}
              onChange={(event) => setAddress(event.target.value)}
            />
          </form>
        </Box>
        <Box className={classes.buttonContainer}>
          <Button className={classes.cancleButton} onClick={onClose}>
            Cancle
          </Button>
          <Button className={classes.postButton} onClick={() => handleSubmit()}>
            Submit
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    width: "55%",
    height: "80%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardMedia: {
    position: "relative",
    background: theme.palette.primary.main,
    height: "35%",
    width: "100%",
    objectFit: "cover",
    backgroundRepeat: "no-repeat",
  },
  postButton: {
    background: theme.palette.primary.main,
    color: "#fff",
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
  cancleButton: {
    marginRight: theme.spacing(2),
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    right: 50,
  },
  iconButton: {
    position: "absolute",
    background: "#333",
    padding: 8,
    right: 15,
    bottom: 10,
    color: "#fff",
  },
  headerSize: {
    position: "absolute",
    left: 15,
    bottom: 10,
    color: "#fff",
    opacity: 0.8,
  },
  addAPhotoIcon: {
    height: 20,
    width: 20,
  },
  formContainer: {
    margin: theme.spacing(2, 8),
  },
  textFieldMargin: {
    marginRight: 10,
  },
  input: {
    display: "none",
  },
  shadder: {
    background: "linear-gradient(180deg, rgba(24, 24, 24, 0.03) 0%, rgba(24, 24, 24, 0.68) 100%)",
    height: "100%",
  },
}));

export default EditProfile;
