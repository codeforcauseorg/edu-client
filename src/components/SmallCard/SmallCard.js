import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    marginLeft: "2rem",
    width: "10rem",
  },
  media: {
    width: "10rem",
    height: "4rem",
  },
});

function SmallCard({data}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          style={{
            backgroundImage: "url(/assets/wishlist/1.png)",
            backgroundSize: "cover",
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            3 Days Linux Course
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species,
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            $ 10
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SmallCard;