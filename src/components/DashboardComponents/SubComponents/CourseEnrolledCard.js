import React from "react";
import {
  Card,
  CardHeader,
  makeStyles,
  CardActionArea,
  CardContent,
  Typography,
  LinearProgress,
} from "@material-ui/core";

function CourseEnrolledCard() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.cardMedia}
        style={{
          backgroundImage: `url(https://d2slcw3kip6qmk.cloudfront.net/marketing/techblog/how-to-plan-a-programming-competition-header@2x.png)`,
          backgroundSize: "cover",
        }}
      />
      <CardActionArea>
        <CardContent className={classes.cardContent}>
          <LinearProgress variant="determinate" value={45} />
          <Typography className={classes.title}>Data Structures and Algorithms</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  card: {
    position: "relative",
    top: 0,
    boxShadow: "0px 4px 15px rgba(55, 64, 161, 0.05)",
    transition: "0.5s",
    cursor: "pointer",
    maxWidth: 350,
    borderRadius: "5px",
    flex: "0 0 auto",
    marginRight: theme.spacing(2),
    "&:hover": {
      boxShadow: "0px 4px 15px rgba(55, 64, 161, 0.25)",
      top: "-10px",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: 320,
      marginRight: "10px",
    },
  },
  cardMedia: {
    height: 150,
  },
  cardContent: {
    // height: 120,
  },
  title: {
    marginTop: theme.spacing(1),
  },
}));

export default CourseEnrolledCard;
