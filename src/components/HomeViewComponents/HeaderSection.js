import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import Carousel from "react-material-ui-carousel";
import Hero from "./Hero";

const items = [
  {
    title: "Elastic Weekend Prizes worth 100K",
    description:
      "Learn about Building Search Engines, DevOps & Security, & Data Science 📈 ‼️ Prizes worth INR 1 lakh, including iPad, PS4, mobile phones, premium headphones, accessories, and more! 🤩",
    img: "/assets/img/home.png",
  },
  {
    title: "Elastic Weekend Prizes worth 100K",
    description:
      "Learn about Building Search Engines, DevOps & Security, & Data Science 📈 ‼️ Prizes worth INR 1 lakh, including iPad, PS4, mobile phones, premium headphones, accessories, and more! 🤩",

    img: "/assets/img/home1.jpg",
  },
  {
    title: "Elastic Weekend Prizes worth 100K",
    description:
      "Learn about Building Search Engines, DevOps & Security, & Data Science 📈 ‼️ Prizes worth INR 1 lakh, including iPad, PS4, mobile phones, premium headphones, accessories, and more! 🤩",

    img: "/assets/img/learning.jpg",
  },
];
function HeaderSection() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Carousel
        fullHeightHover={true}
        timeout={600}
        className={classes.carousel}
        navButtonsProps={{
          style: {
            backgroundColor: "transparent",
          },
        }}
      >
        {items.map((items, index) => (
          <Hero key={index} title={items.title} description={items.description} />
        ))}
      </Carousel>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  carousel: {
    boxShadow: "none",
  },
}));
export default HeaderSection;
