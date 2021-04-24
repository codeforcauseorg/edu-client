import React from "react";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import StarIcon from "@material-ui/icons/Star";
import PeopleIcon from "@material-ui/icons/People";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { Container, Avatar, Box, Grid, Typography, makeStyles } from "@material-ui/core";
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
  rel="stylesheet"
></link>;

const useStyles = makeStyles((theme) => ({
  aboutInst: {
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    margin: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  information: {
    display: "flex",
    color: "#555",
    alignItems: "center",
  },
  body: {
    margin: "20px",
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  icons: {
    color: "#e59819",
    fontSize: "35px",
    padding: "8px",
    alignItems: "left",
  },
  large: {
    width: theme.spacing(17),
    height: theme.spacing(17),
  },
}));

function Stats({ data }) {
  const classes = useStyles();

  return (
    <>
      <Container>
        <div className={classes.aboutInst}>
          <Typography variant="h3" color="secondary">
            {data.mentorName}
          </Typography>
          <Typography variant="subtitle2">{data.desc}</Typography>
        </div>
      </Container>
      <Grid container align="center" justify="center" spacing={1} alignItems="center">
        <Grid>
          <Avatar className={classes.large} />
        </Grid>
        <Box margin={2} fontStyle="italic">
          <div>
            <div className={classes.information}>
              <StarIcon className={classes.icons} />
              <Typography>{data.overallRating}</Typography>
            </div>
            <div className={classes.information}>
              <VerifiedUserIcon className={classes.icons} />
              <Typography>{data.TotalReviews}</Typography>
            </div>
            <div className={classes.information}>
              <PeopleIcon className={classes.icons} />
              <Typography>{data.TotalStudents}</Typography>
            </div>
            <div className={classes.information}>
              <PlayCircleFilledWhiteIcon className={classes.icons} />
              <Typography>{data.courses}</Typography>
            </div>
          </div>
        </Box>
      </Grid>
      <Container />
    </>
  );
}

export default Stats;
