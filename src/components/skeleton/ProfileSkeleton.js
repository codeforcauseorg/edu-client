import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import SkeletonElement from "./SkeletonElement";
import ProfileHeroLayout from "../DashboardComponents/ProfileHeroLayout";

function ProfileSkeleton() {
  const classes = useStyles();

  return (
    <ProfileHeroLayout>
      <SkeletonElement variant="circle" height={120} width={120} />
      <Box className={classes.infoContainer}>
        <SkeletonElement variant="text" component="h1" />
        <Box mt={2}>
          <SkeletonElement variant="text" component="h4" width={150} />
        </Box>
        <Box mt={5}>
          <SkeletonElement variant="rect" width={100} height={50} />
        </Box>
      </Box>
    </ProfileHeroLayout>
  );
}

const useStyles = makeStyles((theme) => ({
  infoContainer: {
    color: "#fff",
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      marginLeft: theme.spacing(0),
      marginTop: theme.spacing(3),
    },
  },
}));

export default ProfileSkeleton;
