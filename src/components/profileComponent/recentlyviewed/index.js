import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { IconButton, Card, Grid, CardActions } from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const useStyles = makeStyles((theme) =>
  createStyles({
    "@global": {
      "@media(min-width: 508px)": {
        "*::-webkit-scrollbar": {
          width: "4px",
          backgroundColor: "#FFFDE8",
        },
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "#EF4646",
        borderRight: "0px solid #FFFDE8",
        borderLeft: "0px solid #FFFDE8",
      },
    },
    root: {
      backgroundColor: "#FFFDE8",
      flexGrow: 1,
      maxWidth: "100vw",
      height: "100vh",
    },
    mainContent: {
      backgroundColor: "#FFFDE8",
      padding: "1.5rem",
    },
    coreStats: {
      fontFamily: "Oxygen",
      margin: "10px 0px",
    },
    msgCard: {
      padding: "15px",
      minHeight: "40px",
      marginTop: "20px",
      backgroundColor: "#FFD94D",
      borderRadius: "15px",
      transition: "all ease-in-out 0.3s",
      "&:hover": {
        cursor: "pointer",
        transform: "translateY(-2px)",
      },
    },
    content: {
      fontSize: "14px",
      fontFamily: "Oxygen, sans-serif",
      fontWeight: 700,
      padding: 0,
      marginTop: "10px",
    },
    coreName: {
      fontSize: "12px",
    },
    inactive: {
      backgroundColor: "#4CBC14",
      color: "white",
      padding: "10px 20px",
      border: "none",
      cursor: "pointer",
      borderRadius: "30px",
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      fontWeight: "bold",
      fontFamily: "Oxygen",
      outline: "none",
      transition: "all ease-in-out 0.3s",
      "&:hover": {
        backgroundColor: "#5CDE1B",
        transform: "translateY(-2px)",
      },
      "&:active": {
        transform: "scale(0.99)",
      },
    },
  })
);

const CoreCard = ({ courseinfo }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={4} md={4} lg={3}>
      <Card className={classes.msgCard} raised={true}>
        <IconButton>
          <PlayCircleOutlineIcon />
        </IconButton>
        <div className={classes.content}> {courseinfo.info} </div>
        <CardActions>
          <div className={classes.content}>
            By <span className={classes.coreName}>{courseinfo.name}</span>
          </div>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CoreCard;
