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
    minHeight: 160,
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
      <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
        <Link className="text-link" to={"/project/" + slug}>
          <Card className={classes.card} elevation={0} variant="outlined">
            <CardActionArea>
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
                  <Ellipsis text={description} lines={4} suffix="..." />
                </Typography>
              </div>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
    </React.Fragment>
  );
}
