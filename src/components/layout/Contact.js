import React from "react";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  margin: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),

    maxWidth: "600pt"
  },
  card: {
    marginTop: "0px",
    padding: theme.spacing(3),
    paddingTop: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    borderRadius: "7px",

    float: "middle",
    textAlign: "left",
    maxWidth: "1400px"
  }
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div>
      {" "}
      <Paper className={classes.card} elevation="0" variant="outlined">
        <Typography variant="h6">About me</Typography>
        <Typography variant="body">My name is Mohamed.</Typography>
      </Paper>
    </div>
  );
}
