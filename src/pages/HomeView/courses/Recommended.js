import React from "react";
import styles from "./Recommended.module.css";

const props = {
  newGames: [
    {
      id: 1,
      image: "https://img.mobiscroll.com/demos/worms3.png",
      title: "Worms 3",
      dev: "Team 17 Digital Limited",
      rank: 4.2,
    },
    {
      id: 2,
      image: "https://img.mobiscroll.com/demos/candycrush.png",
      title: "Candy Crush Saga",
      dev: "King",
      rank: 4.3,
    },
    {
      id: 3,
      image: "https://img.mobiscroll.com/demos/angrybirds.png",
      title: "Angry Birds",
      dev: "Rovino",
      rank: 4.4,
    },
    {
      id: 4,
      image: "https://img.mobiscroll.com/demos/nfs.png",
      title: "Need for Speed™ ",
      dev: "ELECTRONIC ARTS",
      rank: 4.3,
    },
    {
      id: 5,
      image: "https://img.mobiscroll.com/demos/heartstone.png",
      title: "Hearthstone",
      dev: "Blizzard Entertainment Inc.",
      rank: 4.2,
    },
  ],
};

function Recommended() {
  return (
    <>
      <h1 className={styles.mainHeading}>Recommended Courses</h1>
      <div className={styles.container}>
        {props.newGames.map((item) => (
          <div key={item.id} className={styles.card}>
            <img className={styles.image} src={item.image} />
            <div className={styles.text}>
              <h1 className={styles.heading}>{item.title}</h1>
              <p className={styles.info}>{item.dev}</p>
              <p className={styles.info}>{item.rank}</p>
            </div>
          </div>
        ))}
      </div>

      <h1 className={styles.mainHeading}>Top Courses</h1>
      <div className={styles.container}>
        {props.newGames.map((item) => (
          <div key={item.id} className={styles.card}>
            <img className={styles.image} src={item.image} />
            <div className={styles.text}>
              <h1 className={styles.heading}>{item.title}</h1>
              <p className={styles.info}>{item.dev}</p>
              <p className={styles.info}>{item.rank}</p>
            </div>
          </div>
        ))}
      </div>

      <h1 className={styles.mainHeading}>Upcoming Courses</h1>
      <div className={styles.container}>
        {props.newGames.map((item) => (
          <div key={item.id} className={styles.card}>
            <img className={styles.image} src={item.image} />
            <div className={styles.text}>
              <h1 className={styles.heading}>{item.title}</h1>
              <p className={styles.info}>{item.dev}</p>
              <p className={styles.info}>{item.rank}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Recommended;
