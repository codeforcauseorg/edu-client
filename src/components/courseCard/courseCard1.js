import { Card, CardHeader, Container, IconButton, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import { PlayCircleFilledOutlined } from "@material-ui/icons";

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
            <Typography variant="h2">
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
          <Typography variant="h5">Chapter 1 : How to start with WD?</Typography>
        </div>
        <Typography className={classes.bottomfont}>1hr 45 min learned out of 3 days</Typography>
      </Card>
    </Container>
  );
};

export default CourseCard;
