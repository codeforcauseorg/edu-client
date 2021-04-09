import React from "react";
import { useHistory } from "react-router-dom";
import ScrollToTop from "../../utils/ScrollToTop";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Typography, TextField } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import ScrollTop from "../../components/backTop/index";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import ButtonComponent from "../../components/Button/ButtonComponent";
import Grid from "@material-ui/core/Grid";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const useStyles = makeStyles((theme) => ({
  navigation: {
    widht: "100%",
    height: "100px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 10px",
    backgroundColor: "white" /* For browsers that do not support gradients */,
    backgroundImage: "linear-gradient(#4C0098, white)",
  },
  purpleText: {
    color: "#4C0098",
  },
  button: {
    marginTop: "50px",
    marginRight: "10px",
    marginLeft: "10px",
  },
  title: {
    fontWeight: "700",
    margin: "10px",
  },
  title2: {
    marginTop: "40px",
    marginLeft: "10px",
  },
  body: {
    margin: "10px",
  },
  feedback: {
    marginTop: "80px",
    marginLeft: "10px",
    marginRight: "10px",
  },
  rating: {
    marginTop: "40px",
  },
  subTitle: {
    margin: "0 10px",
  },
  svg: {
    color: "white",
    cursor: "pointer",
  },
  backtotop: {
    minWidth: "100%",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "24px",
  },
}));

function CourseDetail(props) {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <>
      <div id="back-to-top-anchor"></div>
      <ScrollToTop />
      <div className={classes.navigation}>
        <ArrowBackIcon className={classes.svg} onClick={() => history.goBack()} />
      </div>
      <div>
        <Typography className={classes.title} variant="h2" color="secondary">
          Welcome to CFC feeds
        </Typography>
        <Typography className={classes.body} variant="body2">
          Help Us make a better learning experience for everyone.
          <span className={classes.purpleText}>&nbsp; Help us Helping Everyone!!</span>
        </Typography>
        <Typography className={classes.body} variant="body2">
          Feedback Time
          <span className={classes.purpleText}>&nbsp; less than 1 min.</span>
        </Typography>
        <Typography className={classes.title2} variant="h3" color="secondary">
          Rate our Course Mentor
        </Typography>
        <Grid
          container
          className={classes.rating}
          align="center"
          justify="center"
          alignItems="center"
        >
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
          />
          {value !== null && (
            <Box ml={2}>
              <Typography variant="body2">{labels[hover !== -1 ? hover : value]}</Typography>
            </Box>
          )}
          <TextField
            rowsMin={5}
            className={classes.feedback}
            variant="outlined"
            margin="normal"
            fullWidth
            multiline
            id="feedback"
            label="Any feedback?"
            name="text"
            rows={5}
            autoFocus
          />
          <ButtonComponent
            className={classes.button}
            variant="contained"
            color="secondary"
            title="Submit Feedback"
          />
        </Grid>
        <div className={classes.backtotop}>
          <ScrollTop {...props}>
            <Fab color="secondary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </div>
      </div>
    </>
  );
}

export default CourseDetail;
