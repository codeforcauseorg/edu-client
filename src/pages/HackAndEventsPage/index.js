import React from "react";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { AppBar, IconButton, Toolbar, makeStyles, Typography, Box, Grid } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import HackCard from "./HackCard.js";
import UpcomingEve from "./UpcomingCard";
import PreviousCard from "./previousCard";
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
  rel="stylesheet"
></link>;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f3f3f3",
    textAlign: "center",
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  head: {
    flexGrow: 1,
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
  aboutText: {
    color: "#555",
  },
  container: {
    marginBottom: "2rem",
    marginLeft: "-1rem",
    padding: "1rem 0",
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
    overflowStyle: "none",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  body: {
    margin: "20px",
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  profiletitle: {
    padding: theme.spacing(2),
    fontSize: "20px",
    fontWeight: 400,
    color: "#0D0F44",
  },
  margin: {
    margin: theme.spacing(2),
  },
  BoxSpaces: {
    padding: "15px",
  },
  mainTitles: {
    padding: theme.spacing(2),
    fontSize: "20px",
    fontWeight: 400,
    color: "#0D0F44",
  },
}));

const data = [
  {
    id: 1,
    name: "Azure Developer League",
    countdownDuration: "may 18, 2021 00:00:00",
    orgName: "microsoft",
    eveType: "Hackathon",
    participants: "27234",
    preview:
      "https://media-fastly.hackerearth.com/media/hackathon/azure-developer-league-hackathon/images/50dfb05c98-Microsoft_Azure_Hackathon_Image_Pack_Listing_Img_Listing_Img.png",
    icon:
      "https://media-fastly.hackerearth.com/media/companies/a2bdab0-MS_Symbol_Social_FB_TWTR_LNKD_INSTA.png",
  },
  {
    id: 2,
    name: "Code with SAP",
    countdownDuration: "june 21, 2021 00:00:00",
    orgName: "SAP Labs",
    eveType: "Hackathon",
    participants: "3467",
    preview:
      "https://media-fastly.hackerearth.com/media/hackathon/sap-code/images/eaf756da86-SAP_Listing_image_1.png",
    icon:
      "https://media-fastly.hackerearth.com/media/companies/a2bdab0-MS_Symbol_Social_FB_TWTR_LNKD_INSTA.png",
  },
  {
    id: 3,
    name: "Integrate to Disrupt ",
    countdownDuration: "may 25, 2021 00:00:00",
    orgName: "Symble.AI",
    eveType: "Hackathon",
    participants: "23429",
    preview:
      "https://media-fastly.hackerearth.com/media/hackathon/symblais-disruption-hackathon/images/fe0ccdccaf-Symbl_listing_image.png",
    icon:
      "https://media-fastly.hackerearth.com/media/companies/a2bdab0-MS_Symbol_Social_FB_TWTR_LNKD_INSTA.png",
  },
  {
    id: 4,
    name: "FaaS Wars II",
    countdownDuration: "june 12, 2021 00:00:00",
    orgName: "FaceBook",
    eveType: "Hackathon",
    participants: "635",
    preview:
      "https://media-fastly.hackerearth.com/media/hackathon/faas-wars-season-2/images/5060a254a6-Listing_image_2.png",
    icon:
      "https://media-fastly.hackerearth.com/media/companies/a2bdab0-MS_Symbol_Social_FB_TWTR_LNKD_INSTA.png",
  },
];

const ChallengeData = [
  {
    id: 1,
    EventName: "HackOn 2.0",
    date: "May 28, 12:00 PM IST",
    orgIcon: "https://media-fastly.hackerearth.com/media/companies/fa5a65a-logo__11_2.png",
    OrgName: "Red hat",
    challengeType: "hackthon",
    challengImg:
      "https://media-fastly.hackerearth.com/media/hackathon/hackon/images/d7b7b18478-Listing_Image.png",
  },
  {
    id: 2,
    EventName: "Brute Force 4.0 - Cybersecurity",
    date: "May 15, 12:00 PM IST",
    orgIcon: "https://media-fastly.hackerearth.com/media/companies/fa5a65a-logo__11_2.png",
    OrgName: "Hackathon",
    challengeType: "hackthon",
    challengImg:
      "https://media-fastly.hackerearth.com/media/hackathon/brute-force-4/images/9ae7faaa61-Untitled-7.png",
  },
];

const PreviousData = [
  {
    id: 1,
    preName: "organic food supply",
    preDate: "May 15, 12:00 PM IST",
    previousImg:
      "https://media-fastly.hackerearth.com/media/hackathon/nanban-foundation-organic-food-supply-chain-hackathon/images/4c2e161c7d-Nanban_listing_image_1.png",
  },
  {
    id: 2,
    preName: "interapt/hack",
    preDate: "May 15, 12:00 PM IST",
    previousImg:
      "https://media-fastly.hackerearth.com/media/hackathon/interapthacks/images/9114574e9e-Interapt_lisitng_image_1.png",
  },
  {
    id: 3,
    preName: "Hack to enable",
    preDate: "May 15, 12:00 PM IST",
    previousImg:
      "https://media-fastly.hackerearth.com/media/hackathon/accenture-laterals/images/daaa0b067f-Accenture_listing_image.png",
  },
];

function HackathonsAndEvents() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.backButton}
            color="inherit"
            onClick={() => history.goBack()}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.head}>
            Hackathons And Events
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit">
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid className={classes.root}>
        <Typography className={classes.mainTitles} variant="h5">
          Hackathons
        </Typography>
        <Box>
          {data.map((item, index) => (
            <HackCard
              key={index}
              preview={item.preview}
              name={item.name}
              countdownDuration={item.countdownDuration}
              icon={item.icon}
              orgName={item.orgName}
              eveType={item.eveType}
              participants={item.participants}
            />
          ))}
        </Box>
        <Typography className={classes.mainTitles} variant="h5">
          Upcoming challenges
        </Typography>

        {ChallengeData.map((item, index) => (
          <UpcomingEve
            key={index}
            challengImg={item.challengImg}
            EventName={item.EventName}
            date={item.date}
            orgIcon={item.orgIcon}
            OrgName={item.OrgName}
            challengeType={item.challengeType}
          />
        ))}
        <Typography variant="h6" color="inherit" className={classes.head}></Typography>
        <Typography className={classes.mainTitles} variant="h5">
          Previous challenges
        </Typography>

        <Box className={classes.container}>
          {PreviousData.map((item, i) => (
            <PreviousCard
              key={i}
              previousImg={item.previousImg}
              preName={item.preName}
              preDate={item.preDate}
            />
          ))}
        </Box>
      </Grid>
    </>
  );
}

export default HackathonsAndEvents;
