import React from "react";
import {
  Card,
  CardHeader,
  makeStyles,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";

function ChallengesCard() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.cardMedia}
        style={{
          backgroundImage: `url(https://internationaljournalofresearch.files.wordpress.com/2020/06/coding-vs-programming-2.jpg)`,
          backgroundSize: "cover",
        }}
      />
      <CardActionArea>
        <CardContent className={classes.cardContent}>
          <Typography className={classes.title} variant="h6">
            Long Challenge
          </Typography>
          <Typography className={classes.title} variant="h5">
            Data Structures and Algorithms
          </Typography>
          <Typography className={classes.title}>Rank - 4th </Typography>
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
  title: {
    marginTop: theme.spacing(1),
  },
}));

export default ChallengesCard;
