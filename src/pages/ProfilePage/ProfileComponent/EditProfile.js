import React from "react";
import { useHistory } from "react-router-dom";
import {
  makeStyles,
  Typography,
  AppBar,
  IconButton,
  Toolbar,
  Container,
  Grid,
  Button,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Avatar from "@material-ui/core/Avatar";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#160050",
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: "auto",
    width: "90px",
    height: "90px",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    display: "none",
  },
}));

export default function EditProfile() {
  const classes = useStyles();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
            Edit Profile
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="xs">
        <div>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} style={{ textAlign: "center", padding: "7%" }}>
                <Avatar
                  className={classes.avatar}
                  src="https://yt3.ggpht.com/ytc/AAUvwnhpLAOxx0GesrqkAMyNs3Fd3ZULf8yfNc8nTmMp=s900-c-k-c0x00ffffff-no-rj"
                />
                <input
                  accept="image/*"
                  className={classes.input}
                  multiple
                  type="file"
                  name="image"
                  id="image"
                  {...register("image", { required: "*Image is required" })}
                />
                <label htmlFor="image">
                  <Button
                    variant="contained"
                    color="default"
                    component="span"
                    startIcon={<CloudUploadIcon />}
                  >
                    Change Picture
                  </Button>
                </label>
              </Grid>
              <Grid item xs={12} style={{ padding: "6%" }}>
                <TextField
                  autoComplete="fname"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Organisation Name"
                  {...register("name", { required: "*Name is required" })}
                  error={Boolean(errors.name)}
                  helperText={errors.name?.message}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} style={{ padding: "6%" }}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Organisation Email"
                  name="email"
                  autoComplete="email"
                  {...register("email", { required: "*Email is required" })}
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                  autoFocus
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
}
