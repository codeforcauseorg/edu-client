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
    id: 1,
    link: "/faq",
    title: "FAQs",
  },
  {
    id: 2,
    link: "/about",
    title: "ABOUT US",
  },
  {
    id: 3,
    link: "/terms-and-conditions",
    title: "TERMS OF USE",
  },
  {
    id: 4,
    link: "/privacy",
    title: "PRIVACY POLICY",
  },
];

function FooterComponent() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.footer}>
        {footerItems.map((items) => (
          <Link to={items.link} key={items.id} className={classes.link_footer}>
            <Typography>{items.title}</Typography>
          </Link>
        ))}
      </Box>
    </React.Fragment>
  );
}

export default FooterComponent;
