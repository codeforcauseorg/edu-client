import { Card, CardHeader, Container, IconButton, makeStyles, Typography } from "@material-ui/core";

import { PlayCircleFilledOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    margin: 0,
    marginTop: "16px",
    borderRadius: "8px",
    padding: 0,
    "&:hover": {
      cursor: "pointer",
      transform: "translateY(-2px)",
    },
  },
  cardHeader: {
    backgroundColor: "#A60000",
    color: "#fff",
  },
  bottomfont: {
    paddingLeft: "8px",
    fontStyle: "italic",
    fontSize: "12px",
  },
  icon: {
    color: "#fff",
    padding: "4px",
  },
  topic: {
    fontSize: "18px",
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
  chapterstyle: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "2px 8px",
  },
  chaptertextstyle: {
    fontSize: "15px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
}));

const CourseCard = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Card style={{ margin: 0, padding: 0 }}>
        <CardHeader
          style={{
            backgroundImage: "url(/assets/wishlist/2.png)",
            backgroundSize: "cover",
            paddingLeft: "8px",
          }}
          title={
            <Typography className={classes.topic}>
              Fullstack Web Development Course <br /> by code for cause
            </Typography>
          }
          action={
            <IconButton className={classes.icon}>
              <PlayCircleFilledOutlined />
              {/* <IonIcon src={playCircleOutline} /> */}
            </IconButton>
          }
          className={classes.cardHeader}
          classes={{
            title: classes.title,
          }}
        />
        <div className={classes.chapterstyle}>
          <Typography className={classes.chaptertextstyle}>
            Chapter 1 : How to start with WD?
          </Typography>
        </div>
        <Typography className={classes.bottomfont}>1hr 45 min learned out of 3 days</Typography>
      </Card>
    </Container>
  );
};

export default CourseCard;
