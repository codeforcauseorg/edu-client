import {
  Box,
  Card,
  CardActionArea,
  Avatar,
  CardActions,
  CardContent,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import SkeletonElement from "./SkeletonElement";

function SkeletonMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <SkeletonElement variant="rect" className={classes.media} />
      <CardActionArea>
        <CardContent>
          <Box className={classes.tagSection}>
            <SkeletonElement variant="rect" className={classes.tag} height={20} width="40%" />
            <SkeletonElement variant="rect" className={classes.price} height={20} width="20%" />
          </Box>
          <Box className={classes.cardActions}>
            <SkeletonElement variant="rect" className={classes.title} />

            <Box className={classes.description}>
              <SkeletonElement variant="rect" height={60} />
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <SkeletonElement variant="rect" height={20} width="20%" />
        <SkeletonElement variant="rect" height={20} width="20%" />
        <Box style={{ flexGrow: 1 }} />
        <Box className={classes.lessons}>
          {[1, 2].map((index) => (
            <SkeletonElement key={index} variant="circle" className={classes.avatar}>
              <Avatar />
            </SkeletonElement>
          ))}
        </Box>
      </CardActions>
    </Card>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: 350,
    top: 0,
    boxShadow: "0px 4px 15px rgba(55, 64, 161, 0.05)",
    transition: "0.5s",
    cursor: "pointer",
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(2),
    borderRadius: "5px",
    flex: "0 0 auto",
    "&:hover": {
      boxShadow: "0px 4px 15px rgba(55, 64, 161, 0.25)",
      top: "-10px",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: 320,
      marginRight: "10px",
    },
  },
  title: {
    marginTop: theme.spacing(2),
  },
  cardActions: {
    height: 120,
  },
  media: {
    height: 150,
  },
  tagSection: {
    display: "flex",
  },
  ratings: {
    display: "flex",
  },
  lessons: {
    display: "flex",
    paddingLeft: theme.spacing(2),
  },
  tag: {
    marginRight: theme.spacing(2),
  },
  description: {
    marginTop: theme.spacing(1),
  },
  avatar: {
    marginLeft: theme.spacing(0.8),
  },
}));

export default SkeletonMediaCard;
