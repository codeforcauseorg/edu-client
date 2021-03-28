import { Container, makeStyles, Typography } from "@material-ui/core";

import Carousel from "react-material-ui-carousel";
import Item from "./Item";

const useStyles = makeStyles(() => ({
  root: {
    background: "linear-gradient(180deg, #17003C 0%, rgba(0, 0, 0, 0) 100%)",
    color: "#fff",
    paddingBottom: "120px",
  },
  heading: {
    padding: "40px 0px 12px",
  },
  img: {
    borderRadius: "6px",
    marginTop: "18px",
    width: "100%",
  },
}));

export default function Hero(props) {
  const classes = useStyles();

  const items = [
    {
      img: "/assets/img/home.png",
    },
    {
      img: "/assets/img/home1.jpg",
    },
    {
      img: "/assets/img/learning.jpg",
    },
  ];

  return (
    <Container className={classes.root}>
      <Typography className={classes.heading} variant="h2">
        Learn from the experts how to expertise
      </Typography>
      <Typography variant="h3" style={{ color: "#FFB2B2" }}>
        Know us connect with us on live!!
      </Typography>
      {/* <img className={classes.img} src="/assets/img/home.png" alt="" /> */}
      <Carousel
        fullHeightHover={false}
        navButtonsProps={{
          style: {
            backgroundColor: "transparent",
          },
        }}
        navButtonsWrapperProps={{
          style: {
            bottom: "50px",
            top: "unset",
          },
        }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Container>
  );
}
