import { Box, IconButton, makeStyles, Typography } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import React from "react";
import { useHistory } from "react-router-dom";
import InfoIcon from "@material-ui/icons/Info";
import StepsTimeline from "./ReferralComponents/StepsTimeline";
import ReferralCode from "./ReferralComponents/ReferralCode";
import RedeemCode from "./ReferralComponents/RedeemCode";
const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#fff",
  },
  clearIcon: {
    color: "#000",
  },
  expanded: {
    flexGrow: 1,
  },
  mainTitle: {
    display: "flex",
    flexGrow: 1,
    marginTop: theme.spacing(2.1),
    justifyContent: "space-between",
    alignItems: "center",
  },
  root: {
    marginLeft: theme.spacing(3),
  },
  subtitle: {
    color: "#8A80A8",
    marginTop: theme.spacing(1.5),
    marginRight: theme.spacing(3),
  },
  infoTitle: {
    display: "flex",
    marginTop: theme.spacing(2.1),
    alignItems: "center",
  },
  stepsTimeline: {
    marginTop: theme.spacing(1),
  },
  title: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    color: "#150051",
  },
  InfoIcon: {
    color: "#150051",
    marginRight: theme.spacing(1),
  },
}));

const listElements = [
  { title: "Invite your friend", subTitle: "Just Share your referral code", value: 1 },
  { title: "They hit the road", subTitle: "With 15% off", value: 2 },
  { title: "You make savings!", subTitle: "Then you get 15% off  🥳", value: 3 },
];
function ReferralAndCoupons() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <Box className={classes.root}>
        <div className={classes.mainTitle}>
          <Typography variant="h2">Refer a friend</Typography>
          <IconButton
            edge="end"
            className={classes.clearIcon}
            color="inherit"
            onClick={() => history.goBack()}
          >
            <ClearIcon />
          </IconButton>
        </div>
        <Typography variant="body1" className={classes.subtitle}>
          And you can both save 15% off on available courses.
        </Typography>
        <Box className={classes.infoTitle}>
          <InfoIcon className={classes.InfoIcon} />
          <Typography variant="body2" style={{ color: "#150051" }}>
            How it Works{" "}
          </Typography>
        </Box>
        <Box className={classes.stepsTimeline}>
          {listElements.map((items, index) => (
            <StepsTimeline
              key={index}
              title={items.title}
              subtitle={items.subTitle}
              value={items.value}
            />
          ))}
        </Box>
        <ReferralCode />
        <Typography variant="h6" className={classes.title}>
          Redeem Code
        </Typography>
        <RedeemCode />
        <Typography variant="h6" className={classes.title}>
          *T&C apply
        </Typography>
      </Box>
    </>
  );
}

export default ReferralAndCoupons;
