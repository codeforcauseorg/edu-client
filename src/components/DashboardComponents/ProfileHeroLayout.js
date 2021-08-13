import React from "react";
import { makeStyles, CardMedia, Box } from "@material-ui/core";
import useSWR from "swr";
import { GET_USER_ENDPOINT } from "../../constants/apiEndpoints";
import { loadData } from "../../services/apiService";

function ProfileHeroLayout({ children }) {
  const classes = useStyles();

  const { data: currentUserData } = useSWR(GET_USER_ENDPOINT, loadData, {
    revalidateOnFocus: false,
    dedupingInterval: 10000,
  });

  const coverPicture = () => {
    if (currentUserData === undefined || currentUserData.coverPhotoUrl === "") {
      return "assets/img/profileBanner.svg";
    }
    return currentUserData?.coverPhotoUrl;
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
