import React from "react";
import { makeStyles, CardMedia, Box } from "@material-ui/core";

function ProfileHeroLayout({ children, props }) {
  const classes = useStyles();

  const { coverPhotoUrl, image } = props;

  const coverPicture = () => {
    if (image) {
      return URL.createObjectURL(image);
    } else if (coverPhotoUrl === "") {
      return "assets/img/profileBanner.svg";
    }
    return coverPhotoUrl;
  };

  return (
    <CardMedia image={coverPicture()} className={classes.heroSection}>
      <Box className={classes.container}>{children}</Box>
    </CardMedia>
  );
}

const useStyles = makeStyles((theme) => ({
  heroSection: {
    minHeight: 200,
    borderRadius: "5px",
  },
  container: {
    background: "linear-gradient(180deg, rgba(24, 24, 24, 0.03) 0%, rgba(24, 24, 24, 0.70) 0%)",
    width: "100%",
    height: "100%",
    display: "flex",
    borderRadius: "5px",
    padding: 35,
    flexDirection: "row",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

export default ProfileHeroLayout;
