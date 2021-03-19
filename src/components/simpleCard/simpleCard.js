import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles({
  media: {
    postion: "relative",
    height: 0,
    paddingTop: "48.25%", // 21:9
  },
  cardInfo: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    postion: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "45px",
    padding: "0 10px",
    background: "#eee",
  },
  instructorProfile: {
    position: "relative",
  },
  profileImg1: {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    alignItems: "center",
    position: "absolute",
    left: 0,
    top: "-15px",
  },
  profileImg2: {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    alignItems: "center",
    position: "absolute",
    left: "15px",
    top: "-15px",
  },
  instructor: {
    fontSize: "11px",
    fontWeight: "bold",
    marginLeft: "50px",
  },
  content: {
    padding: "10px",
    "&:last-child": {
      paddingBottom: "10px",
    },
  },
  title: {
    marginBottom: "10px",
  },
  subTitle: {
    fontSize: "14px",
    marginBottom: "6px",
  },
  detail: {
    fontStyle: "italic",
    fontSize: "15px",
  },
  price: {
    fontWeight: "700",
  },
  action: {
    marginTop: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const renderIcon = (showIcon) => {
  return showIcon ? <FavoriteIcon /> : null;
};

export default function SimpleCard({ width, image, title, subTitle, detail, price, showIcon }) {
  const classes = useStyles();

  return (
    <Card
      style={{
        minWidth: `${width}`,
      }}
      className={classes.root}
    >
      <CardMedia className={classes.media} image={image} title="Paella dish" />
      <div className={classes.cardInfo}>
        <div className={classes.instructorProfile}>
          <img
            className={classes.profileImg1}
            src="https://media.istockphoto.com/vectors/default-placeholder-woman-vector-id844000348?k=6&m=844000348&s=612x612&w=0&h=2QiYy7vaGEt7MlzlMnLPhUSbRNw2FzwoLc6lTXh-3vA="
            alt=""
          />
          <img
            className={classes.profileImg2}
            src="https://media.istockphoto.com/vectors/default-placeholder-woman-vector-id844000348?k=6&m=844000348&s=612x612&w=0&h=2QiYy7vaGEt7MlzlMnLPhUSbRNw2FzwoLc6lTXh-3vA="
            alt=""
          />
        </div>
        <div>
          <Typography className={classes.instructor}>Anuj Garg and Ganga Chaturvedi</Typography>
        </div>
      </div>
      <CardContent className={classes.content}>
        <Typography className={classes.title} variant="h5" component="h5">
          {title}
        </Typography>
        <Typography className={classes.subTitle} variant="body2" component="p">
          {subTitle}
        </Typography>
        <Typography className={classes.detail}>{detail}</Typography>
        <div className={classes.action}>
          <Typography className={classes.price} variant="body2" component="p" color="secondary">
            {price}
          </Typography>
          {renderIcon(showIcon)}
        </div>
      </CardContent>
    </Card>
  );
}
