import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

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
}));
const footerItems = [
  {
    id: 1,
    title: "FAQs",
  },
  {
    id: 2,
    title: "ABOUT US",
  },
  {
    id: 3,
    title: "TERMS OF USE",
  },
  {
    id: 4,
    title: "PRIVACY POLICY",
  },
];

function FooterComponent() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.footer}>
        {footerItems.map((items) => (
          <Typography key={items.id}>{items.title}</Typography>
        ))}
      </Box>
    </React.Fragment>
  );
}

export default FooterComponent;
