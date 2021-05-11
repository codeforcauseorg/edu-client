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
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
const useStyle = makeStyles((theme) => ({
  card: {
    margin: 25,
    width: 300,
    boxShadow: "0 1px 1px 0 rgb(159 167 194 / 60%)",
    borderRadius: "3px",
  },
  media: {
    height: "120px",
    width: "270px",
    marginTop: "10px",
    margin: "0 auto",
    float: "none",
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
  },
  compDetails: {
    color: "white",
    fontSize: "15px",
  },
  compIcon: {
    width: "35px",
    color: "white",
    marginRight: "10px",
  },
  compWrapper: {
    display: "flex",
    flexGrow: 2,
    alignItems: "center",
    padding: "48px",
    paddingLeft: "50px",
    background: "rgba(0,0,0,0.6)",
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

const PreviousCard = (item) => {
  const classes = useStyle();

  return (
    <>
      <Grid container alignItems="center" justify="center">
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia className={classes.media} image={item.previousImg}>
              <Box className={classes.compWrapper}>
                <AccessAlarmIcon className={classes.compIcon} />
                <Typography variant="caption" className={classes.compDetails}>
                  Challenge Over
                </Typography>
              </Box>
            </CardMedia>
            <Box className={classes.textDetails}>
              <Typography variant="h5">{item.preName}</Typography>
              <Typography variant="caption" className={classes.date}>
                {item.preDate}
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => console.log("DETAILS")}
            >
              DETAILS
            </Button>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default PreviousCard;
