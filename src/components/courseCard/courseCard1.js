import { Card, CardHeader, IconButton, makeStyles, Typography } from "@material-ui/core";

import { PlayCircleFilledOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
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
    <Card style={{ margin: 0, padding: 0 }} variant="outlined">
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
  );
};

export default CourseCard;
