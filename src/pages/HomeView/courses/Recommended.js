import React from "react";
import MediaCard from "../../../components/MaterialCard";
import Typography from "@material-ui/core/Typography";
import styles from "./Recommended.module.css";

const data = Array(10).fill({
  image: "https://img.mobiscroll.com/demos/worms3.png",
  title: "Worms 3",
  level: "Beginner",
  length: "35",
  price: 94,
});

function Recommended() {
  return (
    <>
      <Typography className={styles.mainHeading} gutterBottom variant="h5" component="h2">
        Recommended Courses
      </Typography>
      <div className={styles.container}>
        {data.map((item, i) => (
          <MediaCard key={i} data={item} />
        ))}
      </div>

      <Typography className={styles.mainHeading} gutterBottom variant="h5" component="h2">
        Top Courses
      </Typography>
      <div className={styles.container}>
        {data.map((item, i) => (
          <MediaCard key={i} data={item} />
        ))}
      </div>

      <Typography className={styles.mainHeading} gutterBottom variant="h5" component="h2">
        Upcoming Courses
      </Typography>
      <div className={styles.container}>
        {data.map((item, i) => (
          <MediaCard key={i} data={item} />
        ))}
      </div>
    </>
  );
}

export default Recommended;
