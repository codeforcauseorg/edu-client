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
  },
  icon: {
    color: "#fff",
    padding: "4px",
  },
  chapterstyle: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "2px 8px",
  },
}));

const CourseCard = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Card style={{ margin: 0, padding: 0, boxShadow: "0px 0px 5px rgba(0,0,0,0.2)" }}>
        <CardHeader
          style={{
            backgroundImage: "url(/assets/wishlist/1.png)",
            backgroundSize: "cover",
            paddingLeft: "8px",
          }}
          title={
            <Typography variant="h5">
              Fullstack Web Development Course <br /> by Code For Cause
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
          <Typography variant="subtitle2">Chapter 1 : How to start with WD?</Typography>
        </div>
        <Typography variant="caption" className={classes.bottomfont}>
          1hr 45 min learned out of 3 days
        </Typography>
      </Card>
    </Container>
  );
};

export default CourseCard;
