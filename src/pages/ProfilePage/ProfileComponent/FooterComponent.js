import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "107px",
    marginTop: "20px",
    background: "#F0F4F8",
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    "& .MuiTypography-body1": {
      fontSize: "0.7rem",
      color: "#748BA0",
      fontWeight: 400,
    },
  },
  link_footer: {
    textDecoration: "none",
  },
}));
const footerItems = [
  {
    link: "/job-openings",
    title: "CAREERS",
  },
  {
    link: "/faq",
    title: "FAQs",
  },
  {
    link: "/about",
    title: "ABOUT US",
  },
  {
    link: "/ContactUs",
    title: "CONTACT US",
  },
  {
    link: "/terms-and-conditions",
    title: "TERMS OF USE",
  },
  {
    link: "/privacy",
    title: "PRIVACY POLICY",
  },
];

function FooterComponent() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.footer}>
        {footerItems.map((items, i) => (
          <Link to={items.link} key={i} className={classes.link_footer}>
            <Typography>{items.title}</Typography>
          </Link>
        ))}
      </Box>
    </React.Fragment>
  );
}

export default FooterComponent;
