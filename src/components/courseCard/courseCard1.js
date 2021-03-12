import { Card, CardHeader, Container, IconButton, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { PlayCircleFilledOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    margin: 0,
    marginTop: "16px",
    borderRadius: "8px",
    padding: 0,
  },
  cardHeader: {
    backgroundColor: "#A60000",
    color: "#fff",
  },
  icon: {
    color: "#fff",
    padding: "4px",
  },
  title: {
    fontWeight: 700,
    fontSize: "12px",
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
            <Typography variant="h3">
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
        <div style={{ backgroundColor: "#000", color: "#fff", padding: "2px 8px" }}>
          <Typography variant="h6">Chapter 1 : How to start with WD?</Typography>
        </div>
        <Typography variant="caption" style={{ paddingLeft: "8px", fontStyle: "italic" }}>
          1hr 45 min learned out of 3 days
        </Typography>
      </Card>
    </Container>
  );
};

export default CourseCard;
