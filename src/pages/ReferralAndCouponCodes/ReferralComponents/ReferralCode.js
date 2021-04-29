import { Box, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import SocialShare from "../../../components/SocialShare/SocialShare";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#5C6C8D",
    marginBottom: theme.spacing(3),
  },
  wrapperContainer: {
    background: "#F1F3F5",
    border: "2px dashed #150051",
    borderRadius: "5px",
    marginRight: theme.spacing(3),
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: theme.spacing(1.5),
  },
  text: {
    color: "#5C6C8D",
  },
}));
function ReferralCode() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Box className={classes.root} onClick={() => handleDrawer()}>
      <Typography variant="h6" className={classes.title}>
        REFERRAL CODE
      </Typography>
      <Box className={classes.wrapperContainer}>
        <Box className={classes.container}>
          <Typography variant="h4">LVWDIEEYV</Typography>
          <Typography variant="subtitle2" className={classes.text}>
            Tap to Share
          </Typography>
        </Box>
      </Box>
      <SocialShare open={open} message="Referral Code: LVWDIEEYV" />
    </Box>
  );
}

export default ReferralCode;
