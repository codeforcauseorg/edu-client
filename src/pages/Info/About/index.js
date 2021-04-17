import React, { lazy, Suspense } from "react";
import Button from "@material-ui/core/Button";
import DocsLayout from "../../../layouts/DocsLayout";
import { makeStyles } from "@material-ui/core/styles";

const Content = lazy(() => import("!babel-loader!mdx-loader!./About.mdx"));

const useStyles = makeStyles(() => ({
  img: {
    margin: ".75rem auto",
    width: "100%",
    background: "#ddd",
  },
  btn: {
    margin: "0 auto",
    width: "7rem",
    fontSize: ".9rem",
    textTransform: "none",
    backgroundColor: "#ba000d",
  },
}));

function About() {
  const classes = useStyles();

  return (
    <DocsLayout>
      <Suspense fallback={null}>
        <Content />
        <img
          className={classes.img}
          src="https://automattic.files.wordpress.com/2018/02/a8c_2017gm.jpg"
        />
        <Button variant="contained" color="secondary">
          Say Hello!
        </Button>
      </Suspense>
    </DocsLayout>
  );
}

export default About;
