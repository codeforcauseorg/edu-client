import React from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
  rel="stylesheet"
></link>;

const useStyle = makeStyles((theme) => ({
  root: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  card: {
    margin: 20,
    width: 300,
    boxShadow: "0 1px 1px 0 rgb(159 167 194 / 60%)",
    borderRadius: "3px",
  },
  media: {
    height: 160,
  },
  compDetails: {
    color: "white",
  },
  compIcon: {
    width: "35px",
    marginRight: "20px",
  },
  compWrapper: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    padding: "10px",
    paddingLeft: "80px",
    background: "linear-gradient(left,rgba(0,0,0,0.8) 0,rgba(0,0,0,0.15) 40%,rgba(0,0,0,0) 70%)",
  },
  eveType: {
    letterSpacing: "5px",
    fontWeight: 600,
    fontSize: "10px",
    textTransform: "uppercase",
    margin: "7px",
  },
  start: {
    fontWeight: 600,
    fontSize: "10px",
    textTransform: "uppercase",
    marginTop: "10px",
    marginBottom: "10px",
  },
  date: {
    color: "#46535e",
    fontSize: "12px",
    fontWeight: 600,
  },
  textDetails: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2.5),
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    "& .MuiTypography-caption": {
      color: "#9DA3A8 ",
    },
  },
  button: {
    background: 0,
    border: "1px solid #ccebff",
    fontSize: "0.85rem",
    color: "#09f",
    transition: "0.3s",
    marginTop: "10px",
    marginBottom: "15px",
    "&:hover": {
      background: "#09f",
      color: "white",
    },
  },
}));

const UpcomingEve = (item) => {
  const classes = useStyle();

  return (
    <>
      <Grid container alignItems="center" justify="center">
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia className={classes.media} image={item.challengImg}>
              <Box className={classes.compWrapper}>
                <img src={item.orgIcon} className={classes.compIcon}></img>
                <Typography variant="caption" className={classes.compDetails}>
                  {item.OrgName}
                </Typography>
              </Box>
            </CardMedia>
            <Box className={classes.textDetails}>
              <Typography variant="caption" className={classes.eveType}>
                {item.challengeType}
              </Typography>
              <Typography variant="h5">{item.EventName}</Typography>
              <Typography variant="caption" className={classes.start}>
                STARTS ON
              </Typography>
              <Typography variant="h5" className={classes.date}>
                {item.date}
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => console.log("REGISTER")}
            >
              REGISTER
            </Button>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default UpcomingEve;
