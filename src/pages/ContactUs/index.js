import React from "react";
import { useHistory } from "react-router-dom";
import {
  makeStyles,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  IconButton,
  Link,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ButtonComponent from "../../components/Button/ButtonComponent";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EmailIcon from "@material-ui/icons/Email";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import { useForm } from "react-hook-form";

<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
  rel="stylesheet"
></link>;

const useStyles = makeStyles((theme) => ({
  body: {
    margin: "20px",
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  head: {
    flexGrow: 1,
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: "#0D0F44",
    fontWeight: "500",
    fontSize: "1.5rem",
    lineHeight: "1",
    margin: "20px",
  },
  title2: {
    marginTop: "20px",
    color: "white",
    fontSize: "1.3rem",
  },
  information: {
    display: "flex",
    color: "#555",
    margin: "0.2rem",
    alignItems: "center",
    fontSize: "0.95rem",
  },
  icons: {
    color: "#0D0F44",
    fontSize: "55px",
    padding: "12px",
    alignItems: "left",
  },
  textHead: {
    color: "#555",
    fontSize: "0.9rem",
    margin: "20px",
  },
  socialWrapper: {
    paddingBottom: "10px",
    paddingLeft: "10px",
  },
  socialIcons: {
    color: "#0D0F44",
    fontSize: "45px",
    paddingBottom: "10px",
    paddingLeft: "10px",
    cursor: "pointer",
    "&:hover": {
      color: "#22A7F0",
    },
  },
  contactForm: {
    backgroundColor: "#22A7F0",
    "& .MuiFormLabel-root": {
      color: "white !important ",
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: "white ",
    },
    "& .MuiInputBase-input": {
      color: "white !important ",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderWidth: "2px",
      borderColor: "white ",
      borderRadius: "25px",
    },
  },
  textFields: {
    marginLeft: "30px",
    marginRight: "30px",
    borderRadius: "20px !important",
    color: "white",
  },
  messageBox: {
    marginTop: "30px",
    marginLeft: "30px",
    marginRight: "30px",
  },
  button: {
    padding: "'0.6rem','1.3rem'",
    backgroundColor: "#fff",
    fontSize: "0.95rem",
    color: "#1abc9c",
    lineHeight: "1",
    borderRadius: "25px",
    transition: "0.3s",
    marginTop: "25px",
    marginLeft: "70px",
    marginRight: "70px",
    marginBottom: "30px",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#fff",
    },
  },
}));

function ContactUs(props) {
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
      <AppBar position="static">
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
            Contact Us
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit">
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div>
        <Typography className={classes.title} variant="h2" color="secondary">
          Let&apos;s get in touch
        </Typography>
        <Typography className={classes.textHead} variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum adipisci recusandae
          praesentium dicta!
        </Typography>
        <Grid container>
          <div>
            <div className={classes.information}>
              <LocationCityIcon className={classes.icons} />
              <Typography>92 Cherry Drive Uniondale, NY 11553</Typography>
            </div>
            <div className={classes.information}>
              <EmailIcon className={classes.icons} />
              <Typography>lorem@ipsum.com</Typography>
            </div>
            <div className={classes.information}>
              <PhoneInTalkIcon className={classes.icons} />
              <Typography>123-456-789</Typography>
            </div>
          </div>
        </Grid>
        <Typography className={classes.title} variant="h2" color="secondary">
          Connect with us :
        </Typography>
        <div className={classes.socialWrapper}>
          <Link href="https://www.facebook.com/codeforcauseorg">
            <FacebookIcon className={classes.socialIcons} />
          </Link>
          <Link href="https://twitter.com/codeforcauseIn">
            <TwitterIcon className={classes.socialIcons} />
          </Link>
          <Link href="https://www.instagram.com/codeforcause/">
            <InstagramIcon className={classes.socialIcons} />
          </Link>
          <Link href="https://www.linkedin.com/company/codeforcauseorg/">
            <LinkedInIcon className={classes.socialIcons} />
          </Link>
          <Link href="https://www.youtube.com/channel/UCfv8cds8AfIM3UZtAWOz6Gg">
            <YouTubeIcon className={classes.socialIcons} />
          </Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            className={classes.contactForm}
            container
            align="center"
            justify="center"
            alignItems="center"
            style={{ border: "2px solid white", borderRadius: "2px" }}
          >
            <Typography className={classes.title2} variant="h2" color="secondary">
              Contact Us
            </Typography>
            <TextField
              className={classes.textFields}
              variant="outlined"
              margin="normal"
              fullWidth
              id="contactUser"
              label="Firstname"
              name="firstname"
              {...register("firstname", { required: "*Firstname is required" })}
              error={Boolean(errors.firstname)}
              helperText={errors.firstname?.message}
              autoFocus
            />
            <TextField
              className={classes.textFields}
              variant="outlined"
              margin="normal"
              fullWidth
              id="contactUser"
              label="Lastname"
              name="lastname"
              {...register("lastname", { required: "*Lastname is required" })}
              error={Boolean(errors.lastname)}
              helperText={errors.lastname?.message}
              autoFocus
            />
            <TextField
              className={classes.textFields}
              variant="outlined"
              margin="normal"
              fullWidth
              multiline
              id="contactEmail"
              label="Email"
              name="Email"
              {...register("Email", { required: "*Email is required" })}
              error={Boolean(errors.Email)}
              helperText={errors.Email?.message}
              autoFocus
            />
            <TextField
              className={classes.textFields}
              variant="outlined"
              margin="normal"
              fullWidth
              multiline
              id="contactPhone"
              label="Phone"
              name="phone"
              {...register("Phone")}
              autoFocus
            />
            <TextField
              rowsMin={5}
              className={classes.messageBox}
              variant="outlined"
              margin="normal"
              fullWidth
              multiline
              id="contactMessage"
              label="Message"
              name="messageField"
              {...register("messageField", { required: "*Message is required" })}
              error={Boolean(errors.messageField)}
              helperText={errors.messageField?.message}
              rows={5}
              autoFocus
            />
            <ButtonComponent
              className={classes.button}
              variant="contained"
              title="Send"
              style={{ border: "2px solid white" }}
              type="submit"
            />
          </Grid>
        </form>
      </div>
    </>
  );
}
export default ContactUs;
