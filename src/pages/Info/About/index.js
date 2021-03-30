import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1.2rem",
  },
  mainHeading: {
    margin: "1rem 0",
    fontSize: "1.5rem",
  },
  subHeading: {
    margin: "1.5rem 0 .75rem 0",
    fontSize: "1.2rem",
  },
  content: {
    margin: ".75rem 0",
    fontSize: "1rem",
  },
  join: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  img: {
    margin: ".75rem auto",
    width: "100%",
    background: "#ddd",
  },
  quote: {
    margin: "1rem 0",
    fontSize: "1rem",
    textAlign: "center",
  },
  btn: {
    margin: "0 auto",
    width: "7rem",
    fontSize: ".9rem",
    textTransform: "none",
  },
}));

function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.mainHeading} variant="h1" color="textPrimary" component="h1">
        About Us
      </Typography>
      <Typography className={classes.content}>
        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus
        est, id dignissim quam. Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
        Aliquam eget maximus est, id dignissim quam. Nulla facilisi. Phasellus sollicitudin nulla et
        quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.
      </Typography>
      <Typography className={classes.content}>
        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus
        est, id dignissim quam. Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
        Aliquam eget maximus est, id dignissim quam. Nulla facilisi. Phasellus sollicitudin nulla et
        quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.
      </Typography>
      <Typography className={classes.subHeading} variant="h2" color="textPrimary" component="h1">
        Our Vision
      </Typography>
      <Typography className={classes.content}>
        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus
        est, id dignissim quam. Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
        Aliquam eget maximus est, id dignissim quam. Nulla facilisi. Phasellus sollicitudin nulla et
        quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.
      </Typography>
      <Typography className={classes.subHeading} variant="h2" color="textPrimary" component="h1">
        Our Team
      </Typography>
      <div className={classes.join}>
        <img
          className={classes.img}
          src="https://automattic.files.wordpress.com/2018/02/a8c_2017gm.jpg"
        />
        <Typography className={classes.quote}>
          Join our team and become a part of that believe in open education for all.
        </Typography>
        <Button className={classes.btn} variant="contained" color="secondary">
          Say Hello!
        </Button>
      </div>
    </div>
  );
}

export default About;
