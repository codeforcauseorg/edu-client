import React from "react";
import Typography from "@material-ui/core/Typography";

import styles from "./SmallCard.module.css";

function SmallCard({ data }) {
  return (
    <div key={data.id} className={styles.card}>
      <img className={styles.image} src={data.image} />
      <div className={styles.text}>
        <Typography gutterBottom variant="h5" component="h2" className={styles.heading}>
          {data.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" className={styles.info}>
          {data.dev}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" className={styles.info}>
          {data.rank}
        </Typography>
      </div>
    </div>
  );
}

export default SmallCard;
