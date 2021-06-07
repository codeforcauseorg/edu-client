import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import ReactPlayer from "react-player/lazy";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import StarIcon from "@material-ui/icons/Star";
import CardContent from "@material-ui/core/CardContent";
import DateRangeIcon from "@material-ui/icons/DateRange";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import { Chip, Grid, Typography, makeStyles } from "@material-ui/core";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.headContainer}>
      <Typography className={classes.title} variant="h1" component="h4">
        Full Stack Development Course By Code For Cause
      </Typography>
      <div style={{ display: "flex" }}>
        <div className={classes.divFlex}>
          <PlayCircleFilledWhiteIcon style={{ marginRight: ".5rem" }} />
          <Typography style={{ fontSize: "1rem" }} variant="body1">
            35 Lessons
          </Typography>
        </div>
        <div className={classes.divFlex}>
          <QueryBuilderIcon style={{ marginRight: ".5rem" }} />
          <Typography style={{ fontSize: "1rem" }} variant="body1">
            5 hrs
          </Typography>
        </div>
      </div>

      <div className={classes.divFlex}>
        <Typography style={{ marginRight: ".5rem", fontSize: "1rem" }} variant="body1">
          4.5
        </Typography>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>

      <Typography className={classes.topic} variant="body1">
        Web Development
      </Typography>
    </div>
  );
};

const ReactPlayerDiv = ({ thumbnail, videoUrl }) => {
  const classes = useStyles();
  return (
    <div className={classes.playerWrapper}>
      <ReactPlayer
        className={classes.reactPlayer}
        controls={true}
        light={thumbnail}
        url={videoUrl}
        volume={1}
        width="100%"
        height="100%"
      />
    </div>
  );
};

const Tags = () => {
  const classes = useStyles();
  const tagsName = ["English", "Training"];
  return (
    <div className={classes.tags}>
      {tagsName.map((item, index) => (
        <Chip
          key={index}
          className={classes.tag}
          label={<Typography variant="body1">{item}</Typography>}
        ></Chip>
      ))}

      <div style={{ margin: ".75rem 0", display: "flex" }}>
        <DateRangeIcon style={{ marginRight: "1rem", fontSize: "3rem" }} />
        <div>
          <Typography style={{ fontSize: "1rem" }} variant="body2">
            Starts on Dec 25
          </Typography>
          <Typography variant="body1">Dec 25 - Dec 31</Typography>
        </div>
      </div>
      <Chip
        className={classes.priceTag}
        label={<Typography variant="body1">&#8377; 1200</Typography>}
      ></Chip>
    </div>
  );
};

const MentorList = ({ mentorList }) => {
  const classes = useStyles();
  return (
    <div className={classes.mentorList}>
      <Button className={classes.btn} variant="contained" color="primary">
        Buy Now
      </Button>
      {mentorList.map((i) => {
        return (
          <Card key={i.id}>
            <CardContent className={classes.mentor}>
              <Avatar alt={i.title} src={i.image} style={{ marginRight: ".5rem" }} />
              <Typography variant="body2">{i.name}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

function Hero({
  title,
  description,
  startDate,
  duration,
  languages,
  thumbnail,
  videoUrl,
  price,
  dispatch,
  mentorList,
}) {
  // const classes = useStyles();
  // const handleAddWishlist = () => {
  //   dispatch(
  //     wishlistAdded({
  //       title: title,
  //       startDate: startDate,
  //       duration: duration,
  //       price: price,
  //       description: description,
  //     })
  //   );
  // };

  return (
    <>
      <Grid container spacing={5} justify="space-between">
        <Grid item xs={12} md={8}>
          <Header />
          <Tags />
        </Grid>
        <Grid item xs={12} md={4}>
          <ReactPlayerDiv thumbnail={thumbnail} videoUrl={videoUrl} />
          <MentorList mentorList={mentorList} />
        </Grid>
      </Grid>
    </>
  );
}
export default connect()(Hero);

const useStyles = makeStyles((theme) => ({
  headContainer: {
    padding: "3rem",
    background: "#3740A1",
    color: "#fff",
    border: "1px solid #000",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 1rem",
    },
  },
  title: {
    margin: "1rem 0",
  },
  divFlex: {
    margin: "1rem 1rem 1rem 0",
    display: "flex",
    alignItems: "center",
  },
  topic: {
    margin: "2rem 0 0 0",
    padding: ".5rem 1rem",
    width: "12rem",
    background: "#f4f4f4",
    color: "#3740A1",
    borderRadius: "1rem",
  },
  playerWrapper: {
    margin: "0 auto",
    width: "100%",
    minHeight: "380px",
    maxHeight: "450px",
    position: "relative",
  },
  reactPlayer: {
    position: "absolute",
    top: "0",
    left: "0",
  },
  tags: {
    margin: "3rem 0 0 0",
    [theme.breakpoints.down("sm")]: {
      margin: "1rem 0 0 1rem",
    },
  },
  tag: {
    margin: "0 .5rem 1rem 0",
    background: "#D9DEEA",
    border: "1px solid #3740A1",
    borderRadius: ".5rem",
  },
  priceTag: {
    margin: "1rem 0",
    background: "#3740A1",
    color: "#f4f4f4",
    borderRadius: ".5rem",
  },
  btn: {
    margin: "1rem 0",
    padding: ".5rem 1rem",
    width: "100%",
    borderRadius: ".25rem",
  },
  mentorList: {
    margin: "1rem",
  },
  mentor: {
    display: "flex",
    alignItems: "center",
  },
}));
