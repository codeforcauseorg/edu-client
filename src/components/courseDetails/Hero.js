import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import ReactPlayer from "react-player/lazy";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import DateRangeIcon from "@material-ui/icons/DateRange";
// import LanguageIcon from "@material-ui/icons/Language";
// import { wishlistAdded } from "../../actions/wishlistActions";
import { Chip, Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  playerWrapper: {
    margin: "0 0 0 3rem",
    position: "relative",
    paddingTop: "56.25%" /* Player ratio: 100 / (1280 / 720) */,
  },
  reactPlayer: {
    position: "absolute",
    top: "0",
    left: "0",
  },
  headContainer: {
    padding: "4rem 3rem",
    background: "#3740A1",
    color: "#fff",
    border: "1px solid #000",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.headContainer}>
      <Typography variant="h1" component="h4">
        Title
      </Typography>
      <div style={{ display: "flex" }}>
        <Typography variant="body1">35 Lessons</Typography>
        <Typography variant="body1">5 hrs</Typography>
      </div>
      <Typography variant="body1">4.5 Rating</Typography>
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
    <>
      {tagsName.map((item, index) => (
        <Chip
          key={index}
          className={classes.tag}
          label={<Typography variant="body1">{item}</Typography>}
        ></Chip>
      ))}

      <div style={{ display: "flex" }}>
        <DateRangeIcon style={{ fontSize: "2.5rem" }} />
        <div>
          <Typography>Starts on Dec 25</Typography>
          <Typography>Dec 25 - Dec 31</Typography>
        </div>
      </div>
      <Chip
        className={classes.priceTag}
        label={<Typography variant="body1">&#8377; 1200</Typography>}
      ></Chip>
    </>
  );
};

const MentorList = ({ mentorList }) => {
  const classes = useStyles();
  return (
    <>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      {mentorList.map((i) => {
        return (
          <Card className={classes.root} key={i.id}>
            <CardContent style={{ display: "flex" }}>
              <Avatar alt={i.title} src={i.image} />
              <Typography variant="body2">{i.name}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </>
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
  const classes = useStyles();

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
      <Grid className={classes.hero} container justify="space-between">
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
