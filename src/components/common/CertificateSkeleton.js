import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cert: {
    width: 100,
    cursor: "pointer",
  },
  div: { width: 150, display: "block" },
}));

export default function CertificateSkeleton() {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <Skeleton
        style={{ margin: "auto", display: "block" }}
        variant="rect"
        width={100}
        height={100}
      ></Skeleton>
      <br></br>
      <Typography className={classes.title} variant="body" gutterBottom>
        <Skeleton></Skeleton>
      </Typography>
    </div>
  );
}
