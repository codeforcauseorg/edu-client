import React from "react";
import MediaCard from "../../../components/MaterialCard";
import Typography from "@material-ui/core/Typography";
import styles from "./Recommended.module.css";

const props = {
  newGames: [
    {
      id: 1,
      image: "https://img.mobiscroll.com/demos/worms3.png",
      title: "Worms 3",
      level: "Beginner",
      length: "35",
      price: 94,
    },
    {
      id: 2,
      image: "https://img.mobiscroll.com/demos/candycrush.png",
      title: "Candy Crush Saga",
      level: "Beginner",
      length: "35",
      price: 94,
    },
    {
      id: 3,
      image: "https://img.mobiscroll.com/demos/angrybirds.png",
      title: "Angry Birds",
      level: "Beginner",
      length: "35",
      price: 94,
    },
    {
      id: 4,
      image: "https://img.mobiscroll.com/demos/nfs.png",
      title: "Need for Speed™ ",
      level: "Beginner",
      length: "35",
      price: 94,
    },
    {
      id: 5,
      image: "https://img.mobiscroll.com/demos/heartstone.png",
      title: "Hearthstone",
      level: "Beginner",
      length: "35",
      price: 94,
    },
  ],
};

function Recommended() {
  return (
    <>
      <Typography className={styles.mainHeading} gutterBottom variant="h5" component="h2">
        Recommended Courses
      </Typography>
      <div className={styles.container}>
        {props.newGames.map((item) => (
          <MediaCard key={item.id} data={item} />
        ))}
      </div>

      <Typography className={styles.mainHeading} gutterBottom variant="h5" component="h2">
        Top Courses
      </Typography>
      <div className={styles.container}>
        {props.newGames.map((item) => (
          <MediaCard key={item.id} data={item} />
        ))}
      </div>

      <Typography className={styles.mainHeading} gutterBottom variant="h5" component="h2">
        Upcoming Courses
      </Typography>
      <div className={styles.container}>
        {props.newGames.map((item) => (
          <MediaCard key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}

export default Recommended;
