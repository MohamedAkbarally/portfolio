import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import { MyContext } from "../../Provider";

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
  const { Title, Description, Color, Image } = props.data;

  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  var url_full = Image.length != 0 ? Image[0].url : "";
  return (
    <React.Fragment>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
        <Paper className={classes.card} elevation={0} variant="outlined">
          <div className={classes.imageBG} style={{ background: Color }}>
            <img src={url_full} alt={Title} width="140px"></img>
          </div>
          <div className={classes.CardContent}>
            <Typography align="left" variant="h6" className={classes.mainText}>
              {Title}
            </Typography>
            <Typography
              align="left"
              variant="subtitle2"
              component="p"
              className={classes.subText}
            >
              {Description}
            </Typography>
          </div>

          <div className={classes.cardButton}>
            <MyContext.Consumer>
              {(context) => (
                <React.Fragment>
                  <Button
                    onClick={() => context.setCard(props.hel)}
                    size="small"
                  >
                    Find out more
                  </Button>
                </React.Fragment>
              )}
            </MyContext.Consumer>
          </div>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
