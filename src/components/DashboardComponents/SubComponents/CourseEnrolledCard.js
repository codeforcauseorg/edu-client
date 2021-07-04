import React from "react";
import {
  Card,
  CardHeader,
  makeStyles,
  CardActionArea,
  CardContent,
  Typography,
  LinearProgress,
  Box,
  Chip,
} from "@material-ui/core";
import { useHistory } from "react-router";

function CourseEnrolledCard() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card
      className={classes.card}
      onClick={() =>
        history.push(`/course/full-stack-webdevelopment/lecture/${125154558}#overview`)
      }
    >
      <CardActionArea>
        <CardHeader
          className={classes.cardMedia}
          style={{
            backgroundImage: `url(https://codeforcause.org/static/temp/rn.jpeg)`,
            backgroundSize: "cover",
          }}
        />
        <CardContent className={classes.cardContent}>
          <Box classes={classes.tagSection}>
            <Chip variant="outlined" size="small" className={classes.tag} label="Android" />
            <Chip size="small" className={classes.price} label="₹1200" />
          </Box>
          <Box mt={2}>
            <Typography>12/65 lessons Completed</Typography>
          </Box>
          <Box mt={2}>
            <LinearProgress variant="determinate" value={40} />
          </Box>
          <Box className={classes.cardActions}>
            <Typography variant="h6" className={classes.title}>
              Full stack Web application Development Course By Code for Cause
            </Typography>
          </Box>
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
  tag: {
    border: " 1px solid #3740A1",
    borderRadius: "5px",
    background: "#fff",
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  price: {
    background: theme.palette.primary.main,
    borderRadius: "5px",
    color: "#fff",
  },
}));

export default CourseEnrolledCard;
