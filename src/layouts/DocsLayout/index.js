import React from "react";
import PropTypes from "prop-types";
import { MDXProvider } from "@mdx-js/react";
import { Container, makeStyles } from "@material-ui/core";
import BottomNav from "../MainLayout/BottomNav";
import components from "./mdx";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    height: "100%",
    overflow: "hidden",
    paddingButtom: 64,
    paddingLeft: 20,
    [theme.breakpoints.down("md")]:{
      paddingLeft: 5,
    },
  },
  contentContainer: {
    flex: "1 1 auto",
    overflow: "auto",
  },
  content: {
    paddingBottom: 120,
    paddingLeft: 70,
    paddingRight: 70,
    [theme.breakpoints.down("md")]: {
      paddingLeft: 15,
      paddingRight: 15,
    },
  },
}));

function DocsLayout({ children }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <Container maxWidth="lg" className={classes.content}>
            <MDXProvider components={components}>{children}</MDXProvider>
          </Container>
        </div>
      </div>
      <BottomNav />
    </>
  );
}

DocsLayout.propTypes = {
  children: PropTypes.any,
};

export default DocsLayout;
