import React from "react";
import { Avatar, Box, Link, Grid, Typography, makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
  rel="stylesheet"
></link>;

const backgroundColor = "#F2F7FF";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor,
    paddingTop: "30px",
    textAlign: "center",
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  teamName: {
    marginTop: theme.spacing(2),
    textDecoration: "none",
    fontSize: "1rem",
  },
  avatar: {
    height: 70,
    width: 70,
  },
  member: {
    backgroundColor,
    border: "none",
    boxShadow: "none",
  },
  pointer: {
    cursor: "pointer",
  },
}));

function Team({ mentors }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" align="center" color="textPrimary">
        Our Team
      </Typography>
      <Grid align="center" container justify="center">
        {mentors.map((mentor) => (
          <Grid item key={mentor.id} xs={6}>
            <Card className={classes.member}>
              <CardContent>
                <Box display="flex" alignItems="center" flexDirection="column" textAlign="center">
                  <Avatar
                    className={classes.avatar}
                    component="a"
                    target="_blank"
                    href={mentor.linkedin}
                    src={mentor.avatar}
                  />
                  <Link
                    component="a"
                    className={classes.teamName}
                    color="textPrimary"
                    underline="none"
                    href={mentor.linkedin}
                    target="_blank"
                  >
                    {mentor.name}
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Team;
