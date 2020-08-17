import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  card: {
    Width: 345,
    borderRadius: "7px",
    position: "relative",
    paddingBottom: "40px",
  },
  cardButton: {
    position: "absolute",
    right: "10px",
    bottom: "5px",
  },
  imageBG: {
    paddingTop: "25px",
    paddingBottom: "20px",
    borderRadius: "7px 7px 0px 0px",
  },
  CardContent: {
    paddingTop: "10px",
    paddingRight: "15px",
    paddingLeft: "15px",
  },
  mainText: {
    fontWeight: 600,
  },
  subText: {
    color: "#484848",
    fontSize: "0.9em",
  },
}));

export default function ProjectCard(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
        <Paper className={classes.card} elevation={0} variant="outlined">
          <Skeleton animation="wave" variant="rect" height={151} />
          <div className={classes.CardContent}>
            <Typography align="left" variant="h6" className={classes.mainText}>
              <Skeleton animation="wave" />
            </Typography>
            <Typography
              align="left"
              variant="subtitle2"
              component="p"
              className={classes.subText}
            >
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />

              <Skeleton animation="wave" />
            </Typography>
          </div>

          <div className={classes.cardButton}>
            <React.Fragment>
              <Button size="small">
                <Skeleton animation="wave" width={100} />
              </Button>
            </React.Fragment>
          </div>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
