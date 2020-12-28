import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Skeleton from "@material-ui/lab/Skeleton";
import sanityClient from "../../client";
import { Fragment } from "react";
import Block from "../common/Block";

const styles = {
  margin: {
    marginTop: 8,
    marginBottom: 8,

    maxWidth: "600pt",
  },
  card: {
    marginTop: "0px",
    padding: 24,
    paddingTop: 24,
    paddingRight: 24,
    paddingLeft: 24,
    borderRadius: "7px",

    float: "middle",
    textAlign: "left",
  },
};

var loading = (
  <React.Fragment>
    <Skeleton />
    <Skeleton />
    <Skeleton />
  </React.Fragment>
);

export default function AboutMe({ about, setAbout }) {
  useEffect(() => {
    if (about == null) {
      sanityClient
        .fetch(`*[_type == "about"]`)
        .then((data) => setAbout(data[0].body))
        .catch(console.error);
    }
  }, []);

  return (
    <div>
      <Paper style={styles.card} elevation="0" variant="outlined">
        <Typography variant="h6">About me</Typography>
        {about ? "" : loading}
        <Block value={about} />
      </Paper>
    </div>
  );
}
