import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Card, CardActionArea } from "@material-ui/core";
import Ellipsis from "react-ellipsis-pjs";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    Width: 345,
    borderRadius: "7px",
    position: "relative",
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
    minHeight: 130,
  },
  mainText: {
    fontWeight: 600,
  },
  subText: {
    color: "#484848",
    fontSize: "0.9em",
  },
}));

export default function ProjectCard({
  title,
  image,
  slug,
  color,
  description,
}) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  var url_full = Image.length != 0 ? Image[0].url : "";
  return (
    <React.Fragment>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
        <Link className="text-link" to={"/project/" + slug}>
          <Card className={classes.card} elevation={0} variant="outlined">
            <CardActionArea>
              <div className={classes.imageBG} style={{ background: color }}>
                <img src={image} alt={title} width="130px"></img>
              </div>
              <div className={classes.CardContent}>
                <Typography
                  align="left"
                  variant="h6"
                  className={classes.mainText}
                >
                  {title}
                </Typography>
                <Typography
                  align="left"
                  variant="body1"
                  component="p"
                  className={classes.subText}
                >
                  <Ellipsis text={description} lines={3} suffix="..." />
                </Typography>
              </div>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
    </React.Fragment>
  );
}
