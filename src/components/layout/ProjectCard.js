import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InfoCard from "./InfoCard";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    Width: 345,
    borderRadius: "7px",
    position: "relative",
    paddingBottom: "40px"
  },
  cardButton: {
    position: "absolute",
    right: "10px",
    bottom: "5px"
  },
  imageBG: {
    paddingTop: "25px",
    paddingBottom: "20px",
    borderRadius: "7px 7px 0px 0px"
  },
  CardContent: {
    paddingTop: "10px",
    paddingRight: "15px",
    paddingLeft: "15px"
  },
  mainText: {
    fontWeight: 600
  },
  subText: {
    color: "#484848",
    fontSize: "0.9em"
  }
}));

export default function ProjectCard(props) {
  const classes = useStyles();
  const { name, description, image, bgColor } = props.data;

  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
        <Paper className={classes.card} elevation={0} variant="outlined">
          <div className={classes.imageBG} style={{ background: bgColor }}>
            <img src={image} alt={name} width="140px"></img>
          </div>
          <div className={classes.CardContent}>
            <Typography align="left" variant="h6" className={classes.mainText}>
              {name}
            </Typography>
            <Typography
              align="left"
              variant="subtitle2"
              component="p"
              className={classes.subText}
            >
              {description}
            </Typography>
          </div>

          <div className={classes.cardButton}>
            <Button size="small" onClick={handleToggle}>
              Find out more
            </Button>
          </div>
        </Paper>
      </Grid>
      <InfoCard open={open} handleToggle={handleToggle} data={props.data} />
    </React.Fragment>
  );
}
