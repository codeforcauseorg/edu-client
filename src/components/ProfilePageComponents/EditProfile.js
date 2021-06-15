import React from "react";
import { useHistory } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
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
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Accordion = withStyles({
  root: {
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

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
    marginTop: theme.spacing(1),
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

  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
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
                  {...register("image")}
                />
                <label htmlFor="image">
                  <Button
                    variant="contained"
                    color="default"
                    component="span"
                    startIcon={<CloudUploadIcon />}
                  >
                    Change Profile Picture
                  </Button>
                </label>
              </Grid>
              <Grid item xs={12} style={{ padding: "4%" }}>
                <TextField
                  autoComplete="fname"
                  name="name"
                  variant="outlined"
                  fullWidth
                  id="name"
                  label="User Name"
                  {...register("name")}
                  error={Boolean(errors.name)}
                  helperText={errors.name?.message}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6} style={{ padding: "4%" }}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="User Email"
                  name="email"
                  autoComplete="email"
                  {...register("email")}
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6} style={{ padding: "4%" }}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="phone"
                  {...register("phone")}
                  error={Boolean(errors.phone)}
                  helperText={errors.phone?.message}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} style={{ padding: "4%" }}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="website"
                  label="Website"
                  name="website"
                  autoComplete="website"
                  {...register("website")}
                  error={Boolean(errors.website)}
                  helperText={errors.website?.message}
                  autoFocus
                />
              </Grid>
              <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography variant="h4" color="inherit">
                    Contact Settings
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2}>
                    <Grid item xs={12} style={{ padding: "4%" }}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="linkedin"
                        label="LinkedIn URL"
                        name="linkedin"
                        autoComplete="linkedin"
                        {...register("linkedin")}
                        error={Boolean(errors.linkedin)}
                        helperText={errors.linkedin?.message}
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} style={{ padding: "4%" }}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="github"
                        label="GitHub URL"
                        name="github"
                        autoComplete="github"
                        {...register("github")}
                        error={Boolean(errors.github)}
                        helperText={errors.github?.message}
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} style={{ padding: "4%" }}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="twitter"
                        label="Twitter Handle"
                        name="twitter"
                        autoComplete="twitter"
                        {...register("twitter")}
                        error={Boolean(errors.twitter)}
                        helperText={errors.twitter?.message}
                        autoFocus
                      />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
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
