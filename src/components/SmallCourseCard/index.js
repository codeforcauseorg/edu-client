import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    marginLeft: "2rem",
    minWidth: "10rem",
    boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
  },
  media: {
    height: "5rem",
    width: "10rem",
  },
  level: {
    color: "#AD0517",
    fontSize: ".7rem",
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.card} onClick={() => history.push(`/course/${props.id}`)}>
        <CardMedia
          className={classes.media}
          image={props.data.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.title}
          </Typography>
          <Typography className={classes.level} variant="body2" color="textSecondary" component="p">
            {props.data.level}
          </Typography>
          <Typography className={classes.level} variant="body2" color="textSecondary" component="p">
            {props.data.length} hrs of content
          </Typography>
          <div
            style={{
              marginTop: ".5rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body2" color="textSecondary" component="p">
              $ {props.data.price}
            </Typography>
            <FavoriteIcon style={{ color: "#AD0517" }} />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
